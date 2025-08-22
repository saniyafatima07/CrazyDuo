export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-white text-gray-800 overflow-y-auto">
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2 text-blue-700 font-bold text-xl">
          🔐 CyberAware
        </div>
        <div className="space-x-6 font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Learn
          </a>
          <a href="#" className="hover:text-blue-600">
            Tips
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 leading-tight">
          Stay Safe Online <br />
          <span className="text-blue-600">
            Cybersecurity Awareness for Everyone
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-600">
          Protect yourself from online threats with simple, practical tips.
          Learn how to browse safely, avoid scams, and keep your data secure.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
            Get Started
          </button>
          <button className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-xl transition">
            Learn More
          </button>
        </div>
      </section>

      <section className="mt-24 px-6 md:px-16 grid md:grid-cols-3 gap-10">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700">
            🔒 Strong Passwords
          </h3>
          <p className="mt-3 text-gray-600">
            Learn how to create and manage passwords that keep your accounts
            safe.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700">⚠️ Spot Scams</h3>
          <p className="mt-3 text-gray-600">
            Identify phishing emails, fake websites, and common online fraud
            tactics.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700">
            🛡️ Safe Browsing
          </h3>
          <p className="mt-3 text-gray-600">
            Browse securely with tips on secure websites, updates, and antivirus
            tools.
          </p>
        </div>
      </section>
    </main>
  );
}
