// pages/index.js (or /dashboard, etc.)
"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div>
        <h1>Please Sign In</h1>
        <button onClick={() => signIn("google")}>Sign in with College Email</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>{session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
