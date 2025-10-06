"use server";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) =>{
    const userCollections = dbConnect("users");
    
    // validation
    const { password } = payload;
    const user = await userCollections.findOne({email: payload.email})

    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const result = await userCollections.insertOne(payload);
        const { acknowledged } = result;
        return { acknowledged };
    }
    return { success: false };
}