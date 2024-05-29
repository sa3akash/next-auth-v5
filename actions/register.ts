'use server';

import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/userData";
import { RegisterSchema, RegisterType } from "@/schemas";
import bcryptjs from "bcryptjs";


export const register = async (value: RegisterType) => {
    console.log(value);
    const validatedField = RegisterSchema.safeParse(value)
    if (!validatedField.success) {
        return { error: "Invalid field." }
    }
    const { name, email, password } = validatedField.data;

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return { error: "User already exist." }
    }

    const hashPassword = await bcryptjs.hash(password, 12);

    await db.user.create({
        data: {
            name: name,
            email: email,
            password: hashPassword,
        }
    })

    return { success: 'User Created!' }
}