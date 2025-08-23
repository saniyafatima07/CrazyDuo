export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center h-screen px-6 "
    >
      <p className="text-4xl md:text-8xl pb-20 pt-20 font-Fira_Code">
        <span className="text-blue-400  ">Cyber</span>

        <span className=" text-blue-200 ">Protec</span>
      </p>
      <span className="text-blue-500 text-5xl pb-8">
        Cybersecurity Awareness for Everyone
      </span>

      <p className="mt-4 text-xl md:text-2xl max-w-5xl text-gray-300">
        Protect yourself from online threats with simple and practical tips.
        Learn how to avoid scams,and keep your data secure.
      </p>
    </section>
  );
}
