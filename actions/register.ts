'use server';

import { RegisterSchema, RegisterType } from "@/schemas";


export const register = async (value:RegisterType) => {
    console.log(value);
    const validatedField = RegisterSchema.safeParse(value)
    if(!validatedField.success){
        return {error: "Invalid field."}
    }

    return {success: 'Email send successfully!'}
}