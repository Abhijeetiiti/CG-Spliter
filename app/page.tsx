"use client"


import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      router.push("/home");  
    } else {
      alert("Please fill in both email and password");
    }
  };


  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat">
        <div className="login-box">
          <h2 className="text-3xl font-bold mb-6 text-center">LOGIN</h2>

          <p className="text-center text-gray-600 mb-4">
            Welcome back! Please sign in to your account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex justify-end mt-2">
                <a href="#" className="text-black hover:underline ml-2.5">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-black text-xl font-bold py-2 rounded hover:bg-green-600 transition"
            >
              Sign In
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full mt-4
              bg-white/40 backdrop-blur-md border border-white/30
              py-2 rounded-md hover:bg-white/60 transition"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="w-5 h-5"/>
              <span className="text-black font-medium">
                Sign in with Google
              </span>
            </button>

            <div className="mt-4 text-center">
              <h1>
                Don't have an account?
                <a className="text-green-500 hover:underline hover:text-red-500 ml-1">
                  Sign Up
                </a>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
