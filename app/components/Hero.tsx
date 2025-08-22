export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center h-screen px-6"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 dark:text-blue-400 leading-tight">
        Stay Safe Online <br />
        <span className="text-blue-600 dark:text-blue-300">
          Cybersecurity Awareness for Everyone
        </span>
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300">
        Protect yourself from online threats with simple, practical tips. Learn
        how to browse safely, avoid scams, and keep your data secure.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
          Get Started
        </button>
        <a
          href="#learn"
          className="border border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 px-6 py-3 rounded-xl transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
