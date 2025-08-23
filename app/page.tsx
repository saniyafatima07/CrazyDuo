import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearnCard from "./components/LearnCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <Navbar />

      <Hero />
      <section
        id="learn"
        className="mt-32 w-full flex flex-col items-center px-6 space-y-16"
      >
        <p className="text-3xl animation: spin md:text-4xl font-extrabold text-center text-blue-400 dark:text-blue-300">
          Explore Common Cybersecurity Threats
        </p>

        <LearnCard
          title="OTP Fraud (UPI)"
          description="Scammers trick you into sharing one-time passwords during online transactions. Never share your OTP, even with someone claiming to be from your bank."
          image="https://static.toiimg.com/thumb/msid-115671218,width-1280,height-720,imgsize-1274430,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
        />

        <LearnCard
          title="Phishing Emails"
          description="Fraudsters send fake emails that look genuine to steal your login details. Always verify the sender and avoid clicking on suspicious links."
          image="https://businesspost.ng/wp-content/uploads/2024/04/phishing-email.jpg"
          reverse
        />

        <LearnCard
          title="Social Engineering"
          description="Attackers manipulate you into revealing sensitive information by exploiting trust, fear, or urgency. Stay alert and question unusual requests."
          image="https://colony-west.com/wp-content/uploads/2019/08/socialengineering.jpg"
        />

        <LearnCard
          title="Social Media Stalking"
          description="Oversharing online can expose personal details. Adjust your privacy settings and be mindful of what you post."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFjxsp9VGqFd-Unwo_0xKphb7ZYe3jJG_AQ&s"
          reverse
        />
      </section>
      <footer className="w-full py-8 text-center bg-blue-1000 text-gray-100 mt-16">
        CyberProtec | Stay Secure 🔒
      </footer>
    </main>
  );
}
