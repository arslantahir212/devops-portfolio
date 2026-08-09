import { portfolio } from "../data/portfolioData";

function About() {
  const { personal, projects, certifications, skills } = portfolio;
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <p className="text-gray-300 leading-8 text-lg">
  {personal.about[0]}

  <br /><br />

  {personal.about[1]}
</p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-8 text-center">

             <h3 className="text-4xl font-bold text-blue-400">
              {projects.length}
            </h3>

              <p className="text-gray-400 mt-3">
                DevOps Projects
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">

             <h3 className="text-4xl font-bold text-blue-400">
              {certifications.length}
              </h3>

              <p className="text-gray-400 mt-3">
                Certifications
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">

              <h3 className="text-4xl font-bold text-blue-400">
                 {skills.length}
                </h3>

              <p className="text-gray-400 mt-3">
                Technologies
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">

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
