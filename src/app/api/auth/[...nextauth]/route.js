import { loginUser } from "@/app/actions/loginUser";
import dbConnect from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const authOptions = {
    
    providers: [
        CredentialsProvider({
            
            name: "Credentials",
            
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                
                const user = await loginUser(credentials)
                console.log(user)
                if (user) {
                    
                    return user
                } else {
                    
                    return null

                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            
            if (account) {
                const { providerAccountId, provider } = account
                const { email: user_email, image, name } = user
                const userCollection = dbConnect("users")
                const isExisted = await userCollection.findOne({ providerAccountId })
                if (!isExisted) {
                    const payload = { providerAccountId, provider, email: user_email, image, name, }
                    await userCollection.insertOne(payload)
                }
            }
            return true
        },
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }