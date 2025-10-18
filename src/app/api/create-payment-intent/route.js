// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: '2023-10-16', 
// });


// export async function POST(request, { params }) {
//     try {
        
//         const { amount } = await request.json();
//         const campaignId = params.id; 

//         if (!amount || amount < 1) {
//             return NextResponse.json(
//                 { error: "Invalid amount. Amount must be at least 1." },
//                 { status: 400 }
//             );
//         }

        
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: parseInt(amount) * 100, 
//             currency: 'usd',
            
//             metadata: { campaignId: campaignId, integration_check: 'accept_a_payment' },
//             automatic_payment_methods: {
//                 enabled: true,
//             },
//         });

        
//         return NextResponse.json({
//             clientSecret: paymentIntent.client_secret,
//             campaignId: campaignId,
//         });

//     } catch (error) {
//         console.error('Error creating payment intent:', error);
//         return NextResponse.json(
//             { error: "Failed to create Payment Intent." },
//             { status: 500 }
//         );
//     }
// }
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { amount } = await req.json();

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
