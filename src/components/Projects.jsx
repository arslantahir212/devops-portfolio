import { portfolio } from "../data/portfolioData";

function Projects() {
const { projects } = portfolio;
  return (
    <section id="projects" className="bg-slate-900 text-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-5">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-lg mb-14 max-w-2xl">
          A selection of projects demonstrating my experience with cloud,
          automation, containerization, and modern DevOps practices.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-blue-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-xl transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
