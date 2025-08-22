"use client";
import { useState } from "react";

export default function OtpFraudSimulation() {
  const [otp] = useState(() =>
    Math.floor(100000 + Math.random() * 900000).toString()
  );
  const [input, setInput] = useState("");
  const [step, setStep] = useState<"call" | "entered" | "lesson">("call");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 p-6">
      {step === "call" && (
        <div className="text-center space-y-6 max-w-lg w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
          <audio autoPlay>
            <source src="/scam-call.mp3" type="audio/mpeg" />
          </audio>
          <h1 className="text-3xl font-bold text-red-400">
            📞 Incoming Call...
          </h1>
          <p className="text-lg">
            "You have won 10 lakh rupees! Please share your OTP to claim."
          </p>
          <div className="bg-black/30 p-4 rounded-lg shadow border border-white/20">
            <p className="font-mono text-xl">
              Your OTP: <strong>{otp}</strong>
            </p>
          </div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="mt-4 p-3 w-full rounded-lg text-gray-200 text-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setStep("entered")}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full"
          >
            Submit
          </button>
        </div>
      )}

      {step === "entered" && (
        <div className="text-center space-y-6 max-w-lg w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
          <h1 className="text-4xl font-bold text-red-500">
            ⚠️ Your Account Balance is 0!
          </h1>
          <button
            onClick={() => setStep("lesson")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
          >
            Learn Why
          </button>
        </div>
      )}

      {step === "lesson" && (
        <div className="max-w-2xl text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            This was a Simulation
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            Scammers often trick people into sharing OTPs over calls or
            messages.
            <br />
            <strong className="text-red-700">
              Never share your OTP with anyone , not even bank staff.
            </strong>
          </p>
        </div>
      )}
    </main>
  );
}
