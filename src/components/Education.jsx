import { portfolio } from "../data/portfolioData";

function Education() {
  const { education } = portfolio;

  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-5">
          Education
        </h2>

        <p className="text-gray-400 text-lg mb-14 max-w-2xl">
          My academic background that has supported my journey into
          software engineering and DevOps.
        </p>

        {education.map((item, index) => (
          <div
            key={index}
            className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-all duration-300 grid md:grid-cols-2"
          >

            {/* Degree Image */}
            <div className="p-6 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.degree}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>

            {/* Degree Details */}
            <div className="p-8 flex flex-col justify-center">

              <h3 className="text-3xl font-bold text-blue-400 mb-4">
                {item.degree}
              </h3>

              <p className="text-xl text-white mb-3">
                {item.university}
              </p>

              <p className="text-gray-400 mb-3">
                {item.faculty}
              </p>

              <p className="text-gray-500 font-medium text-lg">
                {item.duration}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Education;
