"use client";
import { useState, useRef } from "react";

export default function OtpFraudSimulation() {
  const [otp] = useState(() =>
    Math.floor(100000 + Math.random() * 900000).toString()
  );
  const [input, setInput] = useState("");
  const [step, setStep] = useState<
    "start" | "ringing" | "call" | "entered" | "lesson"
  >("start");
  const audioRef = useRef<HTMLAudioElement>(null);

  const startSimulation = () => {
    setStep("ringing");
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Audio play failed:", err);
        });
      }
    }, 100);
  };

  const answerCall = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setStep("call");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] p-6">
        {step === "start" && (
          <div className="text-center max-w-md w-full">
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-8 shadow-2xl border border-blue-900/30">
              <div className="mb-6">
                <div className="w-16 h-16 border-2 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏦</span>
                </div>
                <h1 className="text-2xl font-bold mb-2">SBI Security Alert</h1>
                <p className="text-blue-100 text-sm">
                  Suspicious activity detected on your account
                </p>
              </div>
              <button
                onClick={startSimulation}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse"
              >
                VERIFY NOW - URGENT
              </button>
            </div>
          </div>
        )}

        {step === "ringing" && (
          <div className="text-center max-w-sm w-full">
            <audio ref={audioRef} loop preload="auto">
              <source src="/scam-call.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            <div className="bg-blue-950 rounded-3xl p-8 shadow-2xl border-4 border-gray-600 relative overflow-hidden">
              {/* Phone screen effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                  <span className="text-3xl">📞</span>
                </div>

                <h1 className="text-xl font-bold text-green-400 mb-2">
                  Incoming Call
                </h1>
                <p className="text-gray-300 text-sm mb-1">
                  SBI Fraud Prevention
                </p>
                <p className="text-gray-400 text-xs mb-6">+91-1800-XXX-XXXX</p>

                <div className="flex justify-center space-x-8 mt-8">
                  <button className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-2xl transform hover:scale-110 transition-all duration-200">
                    📞
                  </button>
                  <button
                    onClick={answerCall}
                    className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-2xl transform hover:scale-110 transition-all duration-200 animate-bounce"
                  >
                    📞
                  </button>
                </div>

                <p className="text-gray-500 text-xs mt-4">Swipe to answer</p>
              </div>
            </div>
          </div>
        )}

        {step === "call" && (
          <div className="text-center max-w-md w-full">
            <div className="bg-gradient-to-br from-gray-900 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-600">
              {/* Call header */}
              <div className="flex justify-center mb-6">
                <div className="bg-green-600 w-1/2 rounded-xl p-3 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">
                      Call Connected
                    </span>
                  </div>
                </div>
              </div>

              {/* Caller info */}
              <div className="mb-6">
                <div className="w-16 border-2-blue-400 h-16 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h2 className="text-lg font-bold text-blue-400">
                  Rajesh Kumar
                </h2>
                <p className="text-gray-400 text-sm">State Bank of India</p>
              </div>

              {/* Scammer message */}
              <div className="bg-yellow-900/30 border border-yellow-600 rounded-xl p-4 mb-6">
                <p className="text-yellow-100 text-sm leading-relaxed">
                  "Congratulations! You have won ₹10,00,000 in SBI Lucky Draw!
                  To claim your prize money, please verify your identity by
                  sharing the OTP sent to your mobile."
                </p>
              </div>

              {/* OTP Display */}
              <div className="bg-gradient-to-r from-green-800 to-blue-800 rounded-xl p-4 mb-4 border-2 border-green-500">
                <p className="text-green-200 text-xs mb-1">
                  SMS from SBI-ALERTS
                </p>
                <p className="font-mono text-lg text-white">
                  Your OTP:{" "}
                  <span className="font-bold text-green-300 text-xl">
                    {otp}
                  </span>
                </p>
                <p className="text-green-200 text-xs mt-1">
                  Valid for 5 minutes
                </p>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full p-4 rounded-xl bg-gray-700 border-2 border-gray-600 text-white text-lg text-center font-mono tracking-widest focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  maxLength={6}
                />
                <button
                  onClick={() => setStep("entered")}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-200"
                >
                  ✅ VERIFY & CLAIM PRIZE
                </button>
              </div>

              <p className="text-gray-500 text-xs mt-3">
                "Sir, please hurry! Only 2 minutes left to claim your prize!"
              </p>
            </div>
          </div>
        )}

        {step === "entered" && (
          <div className="text-center max-w-md w-full">
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 shadow-2xl border-2 border-red-500 animate-pulse">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">⚠️</span>
              </div>
              <h1 className="text-3xl font-bold text-red-200 mb-4">
                ACCOUNT COMPROMISED!
              </h1>
              <div className="bg-black/50 rounded-xl p-4 mb-6">
                <p className="text-red-300 text-xl font-mono">Balance: ₹0.00</p>
                <p className="text-red-400 text-sm">All funds transferred</p>
              </div>
              <div className="text-red-200 text-sm mb-6 space-y-1">
                <p>✓ OTP verified successfully</p>
                <p>✓ Account access granted</p>
                <p>✓ Funds transferred to scammer</p>
              </div>
              <button
                onClick={() => setStep("lesson")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-200"
              >
                💡 Learn How to Protect Yourself
              </button>
            </div>
          </div>
        )}

        {step === "lesson" && (
          <div className="max-w-2xl w-full">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 shadow-2xl border border-blue-500">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-300 mb-2">
                  This Was a Security Simulation
                </h2>
                <p className="text-blue-200">
                  Educational purpose only - No real money was involved
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-red-900/30 border border-red-500 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-red-300 mb-3">
                    🚨 Red Flags You Missed:
                  </h3>
                  <ul className="text-red-100 space-y-2 text-sm">
                    <li>• Unsolicited calls about "winning money"</li>
                    <li>• Asking for OTP over phone calls</li>
                    <li>• Creating urgency ("only 2 minutes left")</li>
                  </ul>
                </div>

                <div className="bg-green-900/30 border border-green-500 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-green-300 mb-3">
                    ✅ How to Stay Safe:
                  </h3>
                  <ul className="text-green-100 space-y-2 text-sm">
                    <li>
                      • <strong>Never share OTP</strong> with anyone, including
                      bank staff
                    </li>
                    <li>• Banks never ask for OTP over phone calls</li>
                    <li>• Verify caller identity through official channels</li>
                  </ul>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setStep("start");
                      setInput("");
                    }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold transform hover:scale-105 transition-all duration-200"
                  >
                    🔄 Try Simulation Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
