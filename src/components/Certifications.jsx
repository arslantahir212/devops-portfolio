import { portfolio } from "../data/portfolioData";

function Certifications() {
  const { certifications } = portfolio;

  return (
    <section
      id="certifications"
      className="bg-slate-900 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-5">
          Certifications
        </h2>

        <p className="text-gray-400 text-lg mb-14 max-w-2xl">
          Professional certifications that validate my DevOps knowledge
          and hands-on technical skills.
        </p>

        {certifications.map((item, index) => (
          <div
            key={index}
            className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-all duration-300 grid md:grid-cols-2"
          >

            {/* Certificate Image */}
            <div className="p-6 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>

            {/* Certificate Details */}
            <div className="p-8 flex flex-col justify-center">

              <h3 className="text-3xl font-bold text-blue-400 mb-3">
                {item.title}
              </h3>

              <p className="text-lg text-white mb-3">
                {item.issuer}
              </p>

              <p className="text-gray-400 leading-8 mb-8">
                {item.description}
              </p>

              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-xl font-semibold w-fit"
              >
                View Certificate
              </a>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Certifications;
