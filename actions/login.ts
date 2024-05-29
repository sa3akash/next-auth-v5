'use server';

import { LoginSchema, LoginType } from "@/schemas";


export const login = async (value:LoginType) => {
    console.log(value);
    const validatedField = LoginSchema.safeParse(value)
    if(!validatedField.success){
        return {error: "Invalid field."}
    }

    return {success: 'Email send successfully!'}
}