export default function LearnSection() {
  return (
    <section
      id="learn"
      className="mt-24 px-6 md:px-16 flex flex-col gap-10 w-full max-w-3xl"
    >
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
          🔒 Strong Passwords
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Learn how to create and manage passwords that keep your accounts safe.
        </p>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
          ⚠️ Spot Scams
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Identify phishing emails, fake websites, and common online fraud
          tactics.
        </p>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
          🛡️ Safe Browsing
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Browse securely with tips on secure websites, updates, and antivirus
          tools.
        </p>
      </div>
    </section>
  );
}
