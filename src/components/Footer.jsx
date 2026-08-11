import { portfolio } from "../data/portfolioData";
import { Mail } from "lucide-react";

function Footer() {
  const { personal, contact } = portfolio;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Name */}
        <h2 className="text-3xl font-bold text-blue-400 mb-2">
          {personal.name}
        </h2>

        {/* Title */}
        <p className="text-lg text-gray-300 mb-4">
          {personal.title}
        </p>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Building cloud infrastructure, automating deployments,
          and continuously learning modern DevOps practices.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">

          {/* GitHub */}
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.35-3.86-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
            </svg>
          </a>

          {/* Email */}
          <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=arslantahir9000@gmail.com"
               target="_blank"
               rel="noreferrer"
               aria-label="Email"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
               >
            <Mail size={30} />
           </a>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-6">

          <p className="text-gray-500">
            © 2026 {personal.name}. All rights reserved.
          </p>

          <p className="text-gray-500 mt-2">
            Built with React • Tailwind CSS • Docker • Jenkins • Kubernetes • AWS • CI/CD
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
