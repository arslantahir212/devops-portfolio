import { portfolio } from "../data/portfolioData";

function About() {
  const { personal, projects, certifications, skills } = portfolio;

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-blue-400 font-semibold text-lg mb-3">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-bold">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* About Text */}
          <div>
            <p className="text-gray-300 leading-8 text-lg">
              {personal.about[0]}
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              {personal.about[1]}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6">

            {/* Projects */}
            <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-blue-400">
                {projects.length}
              </h3>

              <p className="text-gray-400 mt-3">
                DevOps Projects
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-blue-400">
                {certifications.length}
              </h3>

              <p className="text-gray-400 mt-3">
                Certifications
              </p>
            </div>

            {/* Technologies */}
            <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-blue-400">
                {skills.length}
              </h3>

              <p className="text-gray-400 mt-3">
                Technologies
              </p>
            </div>

            {/* Cloud Platform */}
            <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-4xl font-bold text-blue-400">
                AWS
              </h3>

              <p className="text-gray-400 mt-3">
                Cloud Platform
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
