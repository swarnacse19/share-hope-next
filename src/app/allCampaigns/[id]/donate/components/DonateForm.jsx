"use client";

import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

export default function DonateForm({ campaignId }) {
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();
  const router = useRouter();

  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const user = session?.user;

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }

    if (!user?.email) {
      toast.error("Please log in to make a donation.");
      return;
    }

    setLoading(true);
    const card = elements.getElement(CardElement);

    try {
      // 1️⃣ Create payment intent
      const intentRes = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseInt(amount) * 100 }),
      });

      const { clientSecret, error } = await intentRes.json();
      if (error || !clientSecret) {
        toast.error("Failed to create payment intent.");
        setLoading(false);
        return;
      }

      // 2️⃣ Confirm payment
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.name || user?.email,
            email: user?.email,
          },
        },
      });

      if (stripeError) {
        toast.error(stripeError.message);
        setLoading(false);
        return;
      }

      // 3️⃣ Save donation in DB
      if (paymentIntent.status === "succeeded") {
        const transactionId = paymentIntent.id;

        const saveRes = await fetch("/api/donations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            campaignId,
            amount: parseInt(amount),
            donorId: user?.email,
            donorName: user?.name || user?.email,
            transactionId,
            date: new Date().toISOString(),
          }),
        });

        const saveResult = await saveRes.json();
        // console.log(saveResult);

        if (saveResult.success) {
          await Swal.fire({
            icon: "success",
            title: "Donation Successful!",
            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
            confirmButtonColor: "#22c55e",
          });
          router.refresh(); 
          router.push(`/allCampaigns/${campaignId}`);
        } else {
          toast("Payment succeeded but failed to save donation.", {
            icon: "⚠️",
          });
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while processing your donation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleDonate}
        className="bg-white shadow-lg p-6 rounded-xl max-w-md mx-auto space-y-5 mt-26 border border-gray-200"
      >
        {/* <h2 className="text-2xl font-bold text-center text-gray-800">
          Donate to Campaign
        </h2> */}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Donation Amount (USD)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter donation amount"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            min="1"
          />
        </div>

        <div className="border rounded-lg p-3">
          <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
        </div>

        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out disabled:opacity-50"
        >
          {loading ? "Processing..." : `Donate $${amount || 0}`}
        </button>
      </form>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
