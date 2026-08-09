import profile from "../assets/images/profile.png";
import { portfolio } from "../data/portfolioData";

function Hero() {
  const { personal } = portfolio;

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-blue-400 text-lg font-semibold mb-4">
            {personal.greeting}
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            {personal.name.split(" ")[0]}
            <br />
            <span className="text-blue-500">
              {personal.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <h2 className="text-3xl text-gray-300 mt-6">
            {personal.title}
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            {personal.tagline}
          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold inline-block"
            >
              View Projects
            </a>

            <a
              href={personal.resume}
              download
              className="border border-gray-600 hover:border-blue-500 px-7 py-4 rounded-xl inline-block"
            >
              Download CV
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

            {/* Profile Image */}
            <div className="relative w-80 h-80 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl">
              <img
                src={profile}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
