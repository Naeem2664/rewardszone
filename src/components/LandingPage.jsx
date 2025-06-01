import Image from "next/image";
import Head from "next/head";
import HeroSection from "./HeroSection";
import { Link } from "@/link/Link";

export default function LandingPage() {
  const adsLink = Link;
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Head>
        <title>Techi Zone | We're Hiring!</title>
      </Head>

      {/* SECTION 1: Hero */}
      <HeroSection />

      {/* SECTION 2: Why Join Us */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Join Techi Zone?</h2>
          <p>
            If you’re searching for a place where your skills matter, your ideas
            are heard, and your work makes a difference—Techi Zone might be the
            perfect fit. Based in the United States, we’re a growing tech
            company built around one simple belief: great people build great
            products. Whether you’re an experienced developer, a fresh graduate,
            or a creative problem solver, you’ll find a meaningful career here
            with room to grow. What sets us apart? First, we value flexibility.
            At Techi Zone, we embrace a remote-first culture that gives you the
            freedom to work from anywhere—without sacrificing collaboration or
            connection. We believe talent has no borders, and we hire globally
            with a focus on people, not just resumes. Despite being spread out,
            our team feels tight-knit. We use thoughtful communication, daily
            check-ins, and shared goals to stay aligned and energized. The work
            we do is exciting. You’ll contribute to real-world projects across
            web, mobile, and cloud platforms. From SaaS startups to enterprise
            clients, our projects are diverse, modern, and built with purpose.
            We’re always experimenting with new technologies, frameworks, and
            tools, which means your work stays fresh and your skills stay sharp.
            If you’re someone who enjoys solving problems and pushing
            boundaries, you’ll thrive here. Beyond the tech, we care deeply
            about our work culture. That means offering fair pay, flexible
            hours, time-off when you need it, and support for your mental
            health. We invest in your growth through mentorship, learning
            budgets, and skill-sharing sessions. If you’re stuck or want to try
            something new, we encourage it—because we believe growth happens
            when you're challenged and supported at the same time. We’re also
            big believers in transparency and trust. No office politics, no
            micro-managing—just people working together to do good work. At
            Techi Zone, your input shapes the direction of the project, and your
            wins are celebrated, whether you're on your first day or your
            hundredth. So, why join Techi Zone? Because we’re building more than
            apps—we’re building a place where people love to work. A place where
            you can wake up every day excited to log in, solve challenges, and
            connect with teammates who have your back. We’re not just offering a
            job—we’re offering a chance to grow your career on your own terms,
            with people who care about the work and the person behind it. If
            you're ready for something better, we’re ready for you. Come build
            the future with us.
          </p>
          <br />
          <ul className="text-lg list-disc space-y-2 text-left">
            <li>Work with a passionate and innovative tech team</li>
            <li>Flexible remote opportunities</li>
            <li>Grow your skills with real-world projects</li>
            <li>Competitive pay and benefits</li>
            <li>Work-life balance and a supportive environment</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3: Open Roles */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Explore Career Opportunities at Techi Zone
          </h2>
          <br />
          <p>
            At Techi Zone, we’re not just filling roles—we’re building a
            community of passionate, driven, and curious individuals who want to
            shape the future of technology. Whether you’re a seasoned engineer
            or just beginning your journey in tech, we have open roles designed
            to match your talent and ambitions. Based in the USA with a global
            remote team, we’re currently hiring across multiple key positions.
            </p>
            <br />
            <h3 className="text-2xl">Front-End Developer (React/Next.js)</h3>
            <p> If you’re someone who lives and breathes clean, responsive UI design
            and thrives on building user-friendly interfaces, this role is for
            you. We’re looking for developers who are fluent in React and
            Next.js, with a strong eye for design and a love for performance
            optimization. You'll work closely with designers and back-end
            engineers to bring beautiful experiences to life.</p>
            <br />
           
            <h3 className="text-2xl">Back-End Developer (Node.js, Express)</h3>
            <p> We’re on the lookout for engineers who can build scalable and secure
            APIs using Node.js and Express. As a back-end developer at Techi
            Zone, you'll architect robust solutions, implement authentication
            flows, and manage databases with confidence. If designing
            infrastructure and ensuring smooth server-side logic is your thing,
            we want to hear from you.</p>
           
            <h3 className="text-2xl">Full-Stack Developer (MERN Stack)</h3>
            <p>Can’t decide between front-end and back-end? Perfect. As a
            Full-Stack Developer, you’ll have the chance to work across the
            entire tech stack—from crafting responsive React components to
            writing server-side logic in Node.js. We value problem solvers who
            are comfortable switching contexts and collaborating across the
            team.</p>
            <br />
            <h3 className="text-2xl">Mobile Developer (React Native)</h3>
            <p>Mobile-first is a mindset here at Techi Zone, and we’re searching
            for React Native developers to help us build beautiful,
            high-performance mobile apps for iOS and Android. Whether it's
            optimizing UI for responsiveness or integrating native APIs, you’ll
            play a key role in shaping our mobile experience.</p>
            <br />
            <h3 className="text-2xl">QA Engineer</h3>
            <p>
            We believe that quality is a shared responsibility—and our QA
            Engineers are essential to our success. If you love testing
            features, identifying bugs before users do, and creating smooth
            end-to-end test flows, this role offers the chance to be a
            gatekeeper for quality. Experience with automation tools is a big
            plus!
            </p>
            <br />
            <p>
             <b>All of these roles are remote-friendly, open to candidates
            across the USA and globally, and come with competitive pay, flexible
            hours, and a chance to grow with a fast-paced tech team. We’re proud
            to say our culture is built around respect, growth, and balance.
            Whether you're joining as a senior developer or an eager junior,
            you'll be supported, challenged, and appreciated. Sound like your
            kind of place? Then don’t wait. Apply today and start your journey
            with Techi Zone—where your code, your creativity, and your curiosity
            all have a place to thrive.</b>
          </p>
<br />
          <ul className="text-lg space-y-2">
            <li>👨‍💻 Front-End Developer (React/Next.js)</li>
            <li>👩‍💻 Back-End Developer (Node.js, Express)</li>
            <li>🌐 Full-Stack Developer (MERN Stack)</li>
            <li>📱 Mobile Developer (React Native)</li>
            <li>🧪 QA Engineer</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: How to Apply */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">📋 How to Apply</h2>
          <ol className="text-lg list-decimal list-inside space-y-2 text-left">
            <li>Click the "Apply Now" button below</li>
            <li>Submit your resume and portfolio</li>
            <li>We'll get in touch for an interview!</li>
          </ol>
        </div>
      </section>

      {/* SECTION 5: Final CTA */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          🎯 Ready to Join Techi Zone?
        </h2>
        <a
          href={adsLink}
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full text-xl transition"
        >
          ✉️ Apply Now
        </a>
      </section>
    </div>
  );
}
