import { loginUser } from "@/app/actions/loginUser";
import dbConnect from "@/lib/dbConnect";
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
                // console.log(user)
                if (user) {
                    
                    return {
                        ...user, 
                        // image: user.image,
                    }
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
                    const payload = { providerAccountId, provider, email: user_email, image, name, role: "user" }
                    await userCollection.insertOne(payload)
                }
            }
            return true
        },
        async jwt({ token, user, account, profile }) {
            
            if (user) {
                token.id = user._id; 
                token.image = user.image; 
                token.role = user.role;
            }
            return token;
        },

        async session({ session, token }) {
            
            if (token) {
                session.user.id = token.id;
                session.user.image = token.image; 
                session.user.role = token.role;
            }
            return session;
        },
    }
}
