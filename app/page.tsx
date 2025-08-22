import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearnSection from "./components/LearnSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-white text-gray-800 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <Navbar />
      <Hero />
      <LearnSection />
    </main>
  );
}
