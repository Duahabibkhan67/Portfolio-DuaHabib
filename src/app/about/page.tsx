import Image from "next/image";

export default function Aboutme() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4">
      {/* Profile Image */}
      <div className="flex justify-center mb-10">
        <Image
          className="rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-purple-500/30 my-4"
          height={300}
          width={300}
          src="/portfolioimg.jpg"
          alt="profile"
        />
      </div>

      {/* About Me Content */}
      <div className="max-w-4xl mx-auto text-white text-center">
        <h1 className="text-5xl md:text-6xl text-purple-700 font-serif mb-10">
          <b>A</b><b className="text-white">BOUT ME:</b>
        </h1>

        <p className="text-lg sm:text-xl text-justify leading-relaxed px-2 sm:px-6">
          Im a dedicated and versatile <strong>Web Developer and Agentic AI Developer</strong>, driven by a passion for creating modern, impactful, and intelligent digital solutions. My core expertise lies in technologies like <strong>JavaScript, Python, HTML, CSS, Tailwind CSS, and Next.js</strong>, which I use to build fast, responsive, and user-friendly web applications.
          <br /><br />
          I have completed the , a prestigious program designed to equip developers with the tools and knowledge to shape the future through AI. This experience significantly expanded my understanding of <strong>agentic AI systems</strong>, enabling me to build smarter, more adaptive applications that interact with users and environments in dynamic ways.
          <br /><br />
          My journey began with a strong focus on frontend development—building websites that not only look great but also perform exceptionally well. Over time, my curiosity and eagerness to push boundaries led me into the world of AI, where I now combine the best of both fields: web development and intelligent automation.
          <br /><br />
          As a developer, I believe in writing clean, scalable code, collaborating effectively with teams, and staying updated with the latest industry trends. Whether it’s developing a business website, a full-stack app, or an AI-driven solution, I approach every project with the same goal: to deliver meaningful and lasting value through technology.
          <br /><br />
          Im always open to learning, evolving, and creating tech that matters.
        </p>
      </div>
    </section>
  );
}
