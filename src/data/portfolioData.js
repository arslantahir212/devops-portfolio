import nebulaCart from "../assets/images/nebula-cart.png";
import portfolioImage from "../assets/images/portfolio.png";
import zynexCertificate from "../assets/images/zynex-devops.jpg";
import mitDegree from "../assets/images/mit-degree.jpg";

export const portfolio = {
  personal: {
    greeting: "👋 Hello, I'm",
    name: "Muhammad Arslan Tahir",
    title: "DevOps Engineer",

    tagline:
      "I build cloud infrastructure, automate deployments, and create CI/CD pipelines using AWS, Docker, Kubernetes, Jenkins, Terraform, and Linux.",

    about: [
      "I'm an aspiring DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Jenkins, Terraform, Linux, Git, and CI/CD automation.",

      "I enjoy building scalable infrastructure, automating deployments, and solving real-world DevOps challenges through practical projects. I'm continuously improving my skills by working on cloud-native technologies and automation.",
    ],

    resume: "/Arslan-Tahir-CV.pdf",
  },

  contact: {
    email: "arslantahir9000@gmail.com",

    github: "https://github.com/arslantahir212",

    linkedin:
      "https://www.linkedin.com/in/muhammad-arslan-tahir-48753b3a4/",
  },

  skills: [
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Linux",
    "Git",
    "GitHub",
    "React",
    "JavaScript",
    "CI/CD",
    "Nginx",
  ],

  projects: [
    {
      title: "Nebula Cart DevOps",

      image: nebulaCart,

      description:
        "Containerized a React e-commerce application using Docker and implemented a CI/CD pipeline with Jenkins. Deployed the application on Kubernetes running on AWS EC2.",

      technologies: [
        "React",
        "Docker",
        "Jenkins",
        "Kubernetes",
        "AWS",
      ],

      github: "https://github.com/arslantahir212/nebula-cart-devops",

      demo: "#",
    },

    {
      title: "DevOps Portfolio",

      image: portfolioImage,

      description:
        "Designed and developed a responsive personal portfolio using React and Tailwind CSS to showcase DevOps projects, certifications, and technical skills.",

      technologies: [
        "React",
        "Tailwind CSS",
        "Docker",
      ],

      github: "https://github.com/arslantahir212/devops-portfolio",

      demo: "#",
    },
  ],

  certifications: [
    {
      title: "DevOps Engineering Certification",

      issuer: "Zynex Solutions",

      image: zynexCertificate,

      description:
        "Completed hands-on DevOps Engineering training covering Linux, AWS, Docker, Kubernetes, Jenkins, Terraform, Git, and CI/CD automation.",
    },
  ],

  education: [
    {
      degree: "Master of Information Technology",

      university: "Virtual University of Pakistan",

      faculty:
        "Faculty of Computer Science and Information Technology",

      duration: "2020 – 2022",

      image: mitDegree,
    },
  ],
};
