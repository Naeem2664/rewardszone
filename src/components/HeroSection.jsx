import { Link } from "@/link/Link";
export default function HeroSection() {
    const smartLink=Link
    return (
        <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/heroSectionBG.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            We are hiring talented people from around the globe.
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Limited-time opportunity.
          </p>
          <a
            href={smartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-full font-semibold transition"
          >
        Apply Now
          </a>
        </div>
      </section>
      
    );
  }
  