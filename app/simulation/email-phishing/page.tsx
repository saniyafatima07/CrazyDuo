"use client";
import { useState } from "react";

export default function PhishingEmailSimulation() {
  const [step, setStep] = useState<"email" | "login" | "hacked" | "lesson">(
    "email"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-40px)] p-6">
        <div className="w-full max-w-3xl bg-gradient-to-br from-gray-900/50 via-blue-900/60 to-indigo-900/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl shadow-2xl p-6">
          {step === "email" && (
            <div className="bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-indigo-900/40 backdrop-blur-xl border border-blue-400/30 rounded-3xl shadow-2xl overflow-hidden">
              {/* Gmail-like header */}
              <div className="bg-gradient-to-r from-blue-1000 to-blue-900 px-8 py-4 border-b border-blue-400/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h1 className="text-2xl font-bold text-white">Gmail</h1>
                      <p className="text-blue-200 text-sm">1 new message</p>
                    </div>
                  </div>
                  <div className="text-blue-200 text-sm">
                    <span className="animate-pulse">🔴 Live</span>
                  </div>
                </div>
              </div>

              {/* Email content */}
              <div className="p-8 space-y-6">
                {/* Email header */}
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-red-300">
                          URGENT SECURITY ALERT
                        </h2>
                      </div>
                      <p className="text-gray-300 text-sm mb-1">
                        <span className="text-red-300">From:</span>{" "}
                        security@bankverification.com
                      </p>
                      <p className="text-gray-300 text-sm mb-1">
                        <span className="text-blue-300">To:</span>{" "}
                        {email || "your.email@gmail.com"}
                      </p>
                      <p className="text-gray-300 text-sm">
                        <span className="text-purple-300">Subject:</span>{" "}
                        Immediate Action Required - Account Suspended
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-gray-200 leading-relaxed">
                  <p className="text-lg font-semibold text-yellow-200">
                    Dear Valued Customer,
                  </p>

                  <div className="bg-red-900/20 border border-red-500/40 rounded-xl p-4">
                    <p className="text-red-300 text-center font-semibold mb-2">
                      ACCOUNT SECURITY BREACH DETECTED
                    </p>
                    We have detected multiple unauthorized login attempts on
                    your account
                  </div>

                  <p>
                    Your account has been{" "}
                    <span className="text-red-400 font-bold">
                      temporarily suspended
                    </span>{" "}
                    to prevent unauthorized access. You have{" "}
                    <span className="text-yellow-400 font-bold animate-pulse">
                      24 hours
                    </span>{" "}
                    to verify your identity before permanent closure.
                  </p>

                  <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-400/40 rounded-xl p-6 text-center">
                    <p className="mb-4 text-blue-200">
                      Click the button below to immediately secure your account:
                    </p>
                    <button
                      onClick={() => setStep("login")}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:to-green-400 text-white px-12 py-4 rounded-2xl  border-blue-400/50"
                    >
                      SECURE MY ACCOUNT NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === "login" && (
            <div className="bg-gradient-to-br from-blue-900/60 via-slate-900/80 to-indigo-900/60 backdrop-blur-xl border border-blue-400/40 rounded-3xl shadow-2xl overflow-hidden">
              {/* Bank logo header */}
              <div className="bg-gradient-to-r from-blue-950 to-blue-900 px-8 py-6 text-center border-b border-blue-400/30">
                <div className="w-16 h-16 border-2 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-blue-700">🏦</span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Online Banking
                </h1>
                <p className="text-blue-200">Secure Account Verification</p>
              </div>

              <div className="p-10 space-y-8">
                <h2 className="text-2xl font-bold text-blue-300 mb-2">
                  Account Verification Required
                </h2>
                <p className="text-gray-300">
                  Please enter your credentials to restore account access
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 rounded-xl bg-gray-800/50 border-2 border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 backdrop-blur text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-300 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-4 rounded-xl bg-gray-800/50 border-2 border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 backdrop-blur text-lg"
                    />
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="button"
                      onClick={() => setStep("hacked")}
                      className="bg-gradient-to-r from-green-700 to-green-600 hover:to-green-400 text-white px-12 py-4 rounded-2xl border-blue-400/50"
                    >
                      VERIFY & RESTORE ACCESS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === "hacked" && (
            <div className="bg-gradient-to-br from-red-600/80 via-black/90 to-red-600/80 backdrop-blur-xl border-2 border-red-500/60 rounded-3xl shadow-2xl overflow-hidden ">
              {/* Hacked header */}
              <div className="bg-gradient-to-r from-red-950 to-red-900 px-8 py-6 text-center border-b-2 border-red-500">
                <h1 className="text-3xl font-bold text-red-200 mb-2">
                  SYSTEM COMPROMISED
                </h1>
                <p className="text-red-300">
                  Your data has been successfully harvested
                </p>
              </div>

              <div className="p-5 space-y-8">
                <div className="text-center">
                  <p className="text-red-200 text-lg">
                    Congratulations! You just got phished
                  </p>
                </div>

                <div className="bg-gray/400 border-2 border-red-500/50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-red-300 mb-4 flex items-center justify-center">
                    <span className="mr-2 animate-pulse">💻</span> DATA STOLEN
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between text-red-200">
                        <span>Email Address:</span>
                        <span className="text-green-400 animate-pulse">
                          ✓ CAPTURED
                        </span>
                      </div>
                      <div className="flex justify-between text-red-200">
                        <span>Password:</span>
                        <span className="text-green-400 animate-pulse">
                          ✓ CAPTURED
                        </span>
                      </div>
                      <div className="flex justify-between text-red-200">
                        <span>IP Address:</span>
                        <span className="text-green-400 animate-pulse">
                          ✓ LOGGED
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-red-200">
                        <span>Device Info:</span>
                        <span className="text-green-400 animate-pulse">
                          ✓ COLLECTED
                        </span>
                      </div>
                      <div className="flex justify-between text-red-200">
                        <span>Location:</span>
                        <span className="text-green-400 animate-pulse">
                          ✓ TRACKED
                        </span>
                      </div>
                      <div className="flex justify-between text-red-200">
                        <span>Session Cookies:</span>
                        <span className="text-green-400 animate-pulse">
                          ✓ STOLEN
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/40 rounded-xl p-4 text-center">
                  <p className="text-yellow-200 text-sm">
                    You are among the majority who fell for this attack
                  </p>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setStep("lesson")}
                    className="bg-gradient-to-r from-blue-950 to-blue-900 hover:from-blue-800 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-200 border-2 border-blue-400/50"
                  >
                    Learn How This Happened
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === "lesson" && (
            <div className="bg-gradient-to-br  via-blue-950 to-purple-900/40 backdrop-blur-xl border border-blue-400/40 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-10 space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-blue-300 mb-4">
                    This Was a Phishing Simulation
                  </h2>
                  <p className="text-gray-200 text-lg">
                    No real data was compromised - This was for educational
                    purposes only
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-900/20 border border-red-500/40 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-300 mb-4 flex items-center">
                      Red Flags You Missed
                    </h3>
                    <ul className="space-y-2 text-red-100 text-sm">
                      <li>
                        • <strong>Suspicious email address:</strong>{" "}
                        chase-bankverification.com
                      </li>
                      <li>
                        • <strong>Urgency tactics:</strong> "24 hours to verify"
                      </li>
                      <li>
                        • <strong>Fear-based messaging:</strong> "Account
                        suspended"
                      </li>
                      <li>
                        • <strong>Fake security indicators</strong> and urgent
                        timers
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/40 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center">
                      How to Stay Safe
                    </h3>
                    <ul className="space-y-2 text-green-100 text-sm">
                      <li>
                        • <strong>Check sender's email</strong> carefully for
                        typos
                      </li>
                      <li>
                        • <strong>Verify independently:</strong> Call bank
                        directly
                      </li>
                      <li>
                        • <strong>Never click links</strong> in suspicious
                        emails
                      </li>
                      <li>
                        • <strong>Banks never ask</strong> for passwords via
                        email
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-blue-900/30  rounded-xl p-4">
                    <p className="text-white-200 font-semibold">
                      Remember: When in doubt, don't click!
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setStep("email");
                      setEmail("");
                      setPassword("");
                    }}
                    className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold transform hover:scale-105 "
                  >
                    Try Simulation Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
