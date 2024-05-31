"use server";

import { signIn } from "@/auth";
import { DEFAULT_Logged_Redirect } from "@/routes";
import { LoginSchema, LoginType } from "@/schemas";
import { AuthError } from "next-auth";

export const login = async (value: LoginType) => {
  console.log(value);
  const validatedField = LoginSchema.safeParse(value);
  if (!validatedField.success) {
    return { error: "Invalid field." };
  }

  const { email, password } = validatedField.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_Logged_Redirect,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      if (err.type === "CredentialsSignin") {
        return { error: "Invalid Credentials" };
      }
      return { error: "Somthing went wrong!" };
    }
    throw err;
  }

  return { success: "Email send successfully!" };
};
