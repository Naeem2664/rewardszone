import Image from "next/image";
import Head from "next/head";
import HeroSection from "./HeroSection";
import { Link } from "@/link/Link";
export default function LandingPage() {
    const smartLink = Link
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Head>
        <title>Exclusive Rewards | Free Gift Cards</title>
      </Head>

      {/* SECTION 1: Hero */}
     <HeroSection/>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bol mb-6">
            ✅ Why This Offer Is Worth Your Time
          </h2>
          <ul className="text-lg list-disc list-inside space-y-2">
            <li>100% free to join</li>
            <li>No personal info needed beyond email</li>
            <li>Works on mobile and desktop</li>
            <li>Verified by thousands of US users</li>
            <li>Only 50 spots open per day</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3: Real-Time Urgency */}
      <section className="bg-red-600 text-white py-10 px-6 text-center">
        <h3 className="text-2xl font-bold">
          🕒 Offer Expires Soon! Act Fast Before the Page Closes.
        </h3>
        <div id="timer" className="text-xl mt-2 font-mono"></div>
      </section>

      {/* SECTION 4: How It Works */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            📋 How to Claim Your Reward
          </h2>
          <ol className="text-lg list-decimal list-inside space-y-2">
            <li>Click the "Get My Reward" button</li>
            <li>Complete the short verification (30 seconds)</li>
            <li>Receive your exclusive access – instantly</li>
          </ol>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">🚀 Ready to Get Started?</h2>
        <a
          href={smartLink}
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full text-xl transition"
        >
          🎁 Claim My Free Gift Now
        </a>
      </section>

      {/* TIMER SCRIPT */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const target = new Date().getTime() + (1000 * 60 * 60 * 15);
          const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;
            if (distance < 0) {
              clearInterval(interval);
              document.getElementById("timer").innerHTML = "Offer Expired";
              return;
            }
            const hrs = Math.floor((distance / (1000 * 60 * 60)));
            const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = hrs + "h " + mins + "m " + secs + "s left";
          }, 1000);
        `
      }} />
    </div>
  );
}
