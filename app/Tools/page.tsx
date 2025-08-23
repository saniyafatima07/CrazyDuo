import React from "react";

const CyberToolsPage = () => {
  const PhoneIcon = () => (
    <svg
      className="w-8 h-8 text-blue-400"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );

  const MessageIcon = () => (
    <svg
      className="w-8 h-8 text-green-400"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
    </svg>
  );

  const ShieldIcon = ({ color }: { color: string }) => (
    <svg className={`w-8 h-8 ${color}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
    </svg>
  );

  const AlertIcon = () => (
    <svg
      className="w-8 h-8 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );

  const DownloadIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );

  const tools = [
    {
      name: "Truecaller",
      icon: <PhoneIcon />,
      description:
        "Identify unknown callers, block spam calls and SMS. Community-powered caller ID and spam protection.",
      type: "Mobile App",
      price: "Free",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.truecaller",
      features: [
        "Caller ID",
        "Spam Detection",
        "Call Blocking",
        "SMS Protection",
      ],
    },
    {
      name: "Google Messages Spam Protection",
      icon: <MessageIcon />,
      description:
        "Built-in spam protection that flags suspicious SMS like fake UPI links, KYC expiry messages, and phishing attempts.",
      type: "Android Feature",
      price: "Free",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.google.android.apps.messaging",
      features: [
        "SMS Filtering",
        "Phishing Detection",
        "UPI Fraud Protection",
        "Auto-categorization",
      ],
    },

    {
      name: "RBI Sachet Portal",
      icon: <AlertIcon />,
      description:
        "Official RBI portal to report unauthorized digital transactions and seek assistance for payment frauds.",
      type: "Web Portal",
      price: "Free",
      playStoreLink: null,
      webLink: "https://sachet.rbi.org.in",
      features: [
        "Report Fraud",
        "Transaction Disputes",
        "Official Support",
        "Regulatory Backing",
      ],
    },
    {
      name: "CyberDost",
      icon: <ShieldIcon color="text-red-400" />,
      description:
        "Government of India's cybersecurity awareness initiative providing tips, reporting mechanisms, and educational resources.",
      type: "Government Initiative",
      price: "Free",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=in.gov.cyberdost",
      webLink: "https://cyberdost.gov.in",
      features: [
        "Cyber Education",
        "Incident Reporting",
        "Security Tips",
        "Government Backed",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900">
      {/* Header */}
      <div className="backdrop-blur-sm ">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-5xl pt-5 font-bold text-white mb-2 flex items-center justify-center gap-3">
              Essential Tools
            </h1>
            <p className="text-blue-200 text-2xl flex justify-center  w-3xl">
              Essential Tools to protect yourself from cyber crimes
            </p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-0x mx-auto px-90 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl border border-blue-800/30 p-6 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 hover:border-blue-900/50"
            >
              {/* Tool Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-900/50 rounded-lg">{tool.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-s px-2 py-1 bg-blue-700/20 text-blue-200 rounded-full">
                      {tool.type}
                    </span>
                    <span className="text-s px-2 py-1 bg-green-700/20 text-green-200 rounded-full">
                      {tool.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-white-300 text-lg mb-4 leading-relaxed">
                {tool.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-blue-300 mb-2">
                  Key Features:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {tool.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-2s px-2 py-1 bg-slate-700 text-slate-300 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {tool.playStoreLink && (
                  <a
                    href={tool.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-2sm font-medium"
                  >
                    <DownloadIcon />
                    Download from Play Store
                  </a>
                )}
                {tool.webLink && (
                  <a
                    href={tool.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <ExternalLinkIcon />
                    Visit Website
                  </a>
                )}
                {!tool.playStoreLink && !tool.webLink && (
                  <div className="w-full bg-slate-700/50 text-slate-400 py-2 px-4 rounded-lg text-center text-sm">
                    Built into your device
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberToolsPage;
