"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbconnect";
import bcrypt from 'bcrypt'

export const registerUser = async (payload) => {
    try {
        const userCollection = await dbConnect(collectionNameObj.userCollection);

        // validation
        const { email, password } = payload;
        if (!email || !password) return { success: false, message: "Email & password required!" };

        const user = await userCollection.findOne({ email });

        if (!user) {
            const hasPassword = await bcrypt.hash(password, 10)
            payload.password = hasPassword
            const result = await userCollection.insertOne(payload);

            return {
                success: true,
                data: {
                    acknowledged: result.acknowledged,
                    insertedId: result.insertedId.toString()
                },
            };
        }

        return { success: false, message: "User already exists!" };
    } catch (error) {
        console.error("Error registering user:", error);
        return { success: false, message: "Registration failed!" };
    }
};
