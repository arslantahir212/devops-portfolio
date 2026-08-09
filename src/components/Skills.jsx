import { portfolio } from "../data/portfolioData";

function Skills() {
const { skills } = portfolio;

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-5">
          Technical Skills
        </h2>

        <p className="text-gray-400 text-lg mb-14 max-w-2xl">
          Technologies and tools I use to build, automate, deploy,
          and manage modern cloud infrastructure and applications.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
