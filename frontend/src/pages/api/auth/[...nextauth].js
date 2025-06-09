import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { Members } from "./Members"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user?.email) return false

      const email = user.email.toLowerCase()
      const domain = "@bitmesra.ac.in"

      if (!email.endsWith(domain)) return false

      // extract username before '@'
      const username = email.split("@")[0]

      // check if username is in Members array
      if (Members.includes(username)) {
        return true
      }
      return false
    },
    async session({ session, token }) {
      session.user.email = token.email
      return session
    },
    async jwt({ token, account, profile }) {
      if (profile) {
        token.email = profile.email
      }
      return token
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
})
