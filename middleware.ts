import NextAuth from "next-auth"
import authConfig from "@/auth.config"
 
export const { auth } = NextAuth(authConfig)

export default auth((req) => {
  // Your middleware logic here
  const isLoggedIn = !!req.auth;
  console.log("isLoggedIn", isLoggedIn);
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
