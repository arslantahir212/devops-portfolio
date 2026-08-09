import { portfolio } from "../data/portfolioData";

function Contact() {
const { contact } = portfolio;
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold mb-5">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          I'm open to DevOps opportunities, collaborations,
          and projects where I can contribute my cloud and automation skills.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300">

            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Email
            </h3>

            <p className="text-gray-300 mb-4">
              {contact.email}
            </p>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold inline-block"
            >
              Send Email
            </a>

          </div>

          {/* GitHub */}
          <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300">

            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              GitHub
            </h3>

            <p className="text-gray-400 mb-4">
              Explore my DevOps repositories.
            </p>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold inline-block"
            >
              Visit GitHub
            </a>

          </div>

          {/* LinkedIn */}
          <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300">

            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              LinkedIn
            </h3>

            <p className="text-gray-400 mb-4">
              Connect with me professionally.
            </p>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold inline-block"
            >
              Connect
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
