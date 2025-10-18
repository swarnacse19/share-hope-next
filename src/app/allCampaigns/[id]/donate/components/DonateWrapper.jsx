
'use client'; 

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonateForm from "./DonateForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function DonateWrapper({ campaignId }) {
    
    if (!stripePromise) {
        return <div className="text-center mt-10">Loading payment system...</div>;
    }

    return (
        <Elements stripe={stripePromise}>
            <DonateForm campaignId={campaignId} />
        </Elements>
    );
}