import { useRouter } from "next/router";

export default function SimulationCard({ type }: { type: string }) {
  const router = useRouter();

  const handleRedirect = () => {
    if (type === "otp-fraud") {
      router.push("/simulation/otp-fraud");
    } else if (type === "email-phishing") {
      router.push("/simulation/email-phishing");
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2 className="text-xl font-bold">
        {type === "otp-fraud" ? "OTP Fraud" : "Email Phishing"}
      </h2>
      <button
        onClick={handleRedirect}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Wanna Try
      </button>
    </div>
  );
}
