"use client";
import { useState } from "react";

export default function PhishingEmailSimulation() {
  const [step, setStep] = useState<"email" | "login" | "lesson">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 p-6">
      {step === "email" && (
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-6 space-y-4">
          <h1 className="text-2xl font-bold text-red-400">📩 New Email</h1>
          <div className="bg-gray-800 p-4 rounded-lg text-left">
            <p className="text-sm text-gray-400">
              From: security@bank-support.com
            </p>
            <p className="text-sm text-gray-400">
              Subject: Urgent: Verify Your Account
            </p>
            <hr className="my-2 border-gray-700" />
            <p>
              Dear Customer, <br />
              We noticed unusual activity in your account. Please{" "}
              <span
                onClick={() => setStep("login")}
                className="text-blue-400 underline cursor-pointer hover:text-blue-300"
              >
                click here
              </span>{" "}
              to verify your login details immediately or your account will be
              blocked.
            </p>
          </div>
        </div>
      )}

      {step === "login" && (
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-blue-400">🔒 Bank Login</h2>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg text-black border border-gray-400"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg text-black border border-gray-400"
          />
          <button
            onClick={() => setStep("lesson")}
            className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg"
          >
            Login
          </button>
        </div>
      )}

      {step === "lesson" && (
        <div className="max-w-2xl text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            This was a Simulation
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            This is how phishing emails trick people into entering login
            details.
            <br />
            <strong className="text-yellow-300">
              Always check the sender’s email address and never click suspicious
              links.
            </strong>
          </p>
        </div>
      )}
    </main>
  );
}
