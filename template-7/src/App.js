import { useState } from "react";
import PortNav from "./components/prod/PortNav";
import PortHero from "./components/prod/PortHero";
import PortAbout from "./components/prod/PortAbout";
// import PortProjects from "./components/prod/ProtFeatured";
import PortFeatured from "./components/prod/PortFeatured";
import PortSkills from "./components/prod/PortSkills";
import PortContact from "./components/prod/PortContact";
import PortFooter from "./components/prod/PortFooter";
import PortExperience from "./components/prod/PortExperience";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`relative font-sans ${darkMode ? "dark" : "light"}`}
      // style={{ fontFamily: "revert" }}
    >
      <button
        className="fixed z-50 opacity-0 top-24 aspect-square bg-orange-600 text-white text-sm font-bold p-2 rounded-full left-12"
        onClick={() => setDarkMode((e) => !e)}
      >
        {darkMode ? "Dark" : "Light"}
      </button>

      <PortNav
        props={values.navbar.props}
        style={values.navbar.style}
        id={values.navbar.node}
      />
      <PortHero
        props={values.heroSection.props}
        style={values.heroSection.style}
        id={values.heroSection.node}
      />
      <PortAbout
        props={values.about.props}
        style={values.about.style}
        id={values.about.node}
      />
      <PortFeatured
        props={values.featured.props}
        style={values.featured.style}
        id={values.featured.node}
      />
      <PortSkills
        props={values.skills.props}
        style={values.skills.style}
        id={values.skills.node}
      />
      <PortExperience
        props={values.experience.props}
        style={values.experience.style}
        id={values.experience.node}
      />
      <PortContact
        props={values.contact.props}
        style={values.contact.style}
        id={values.contact.node}
      />
      <PortFooter
        props={values.footer.props}
        style={values.footer.style}
        id={values.footer.node}
      />
      {/* 
      <About
        props={values.about.props}
        style={values.about.style}
        id={values.about.node}
      />
      <Article
        props={values.article.props}
        style={values.article.style}
        id={values.article.node}
      />
      <News
        props={values.news.props}
        style={values.news.style}
        id={values.news.node}
      />
      <PrimaryCTA
        props={values.primaryCTA.props}
        style={values.primaryCTA.style}
        id={values.primaryCTA.node}
      />
      <SecondaryCTA
        props={values.secondaryCTA.props}
        style={values.secondaryCTA.style}
        id={values.secondaryCTA.node}
      />

      <Footer
        props={values.footer.props}
        style={values.footer.style}
        id={values.footer.node}
      /> */}
    </main>
  );
}

const values = {
  navbar: {
    props: {
      navItems: [
        {
          name: "Home",
          link: "#",
        },
        {
          name: "Projects",
          link: "#",
        },
        {
          name: "Present",
          link: "#",
        },
        {
          name: "Skills",
          link: "#",
        },
        {
          name: "Experience",
          link: "#",
        },
        {
          name: "Contact",
          link: "#",
        },
      ],
    },
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#b9ff81",
    },
    node: "7YoXE88zl3",
  },
  heroSection: {
    props: {
      avatarSrc:
        "https://ipfs.near.social/ipfs/bafkreifdqo3c7fg2qazsf32da7nchldfyupghi2y4quxuo2qsndkoqxmta",
      headerText:
        "Hello, I'm Saidul Badhon! I'm a Full Stack Software Engineer with 4 years of experience. I enjoy building sites & apps. My focus is Web3, Blockchain & AI.",
      buttonText: "Contact me",
      linkedinUrlText: "https://www.linkedin.com/in/saidulbadhon/",
      twitterUrlText: "https://twitter.com/saidulbadhon",
    },
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#b9ff81",
    },
    node: "eqJ1Le-Eek",
  },
  about: {
    props: {
      headerText: "About Me",
      subHeaderTextarea:
        "Hi, I'm a Full Stack Web & App Developer with 4 years of experience. I have worked with multiple technologies to build websites, web applications, and native applications. I've completed many projects with 100% client satisfaction. For me as a professional developer, learning new technologies in web and mobile is my passion. I have worked with PHP, Python, Java, C# and now in React JS, React Native & Node JS. Right now, I am working as a MERN stack engineer on a different platform.",
    },
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#b9ff81",
    },
    node: "eqJ1Le-Eek",
  },
  featured: {
    props: {
      headerText: "My Projects",
      projects: [
        {
          headerText: "Jutsu | Web3 Copilot",
          subHeaderTextarea:
            "# Deploy Forever | Jutsu: Revolutionizing Blockchain Development ## Overview **Deploy Forever | Jutsu** is a cutting-edge developer platform",
          tags: ["Next.js", "Near VM", "Blockchain", "Web3"],
          imageSrc:
            "https://saidulbadhon.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjutsu-web.a51b85e5.png&w=3840&q=95",
        },
        {
          headerText: "Jutsu IDE",
          subHeaderTextarea:
            "# Deploy Forever | Jutsu: Revolutionizing Blockchain Development ## Overview **Deploy Forever | Jutsu** is a cutting-edge developer platform...",
          tags: [
            "Codemirror",
            "Near Protocol",
            "Blockchain",
            "Web3",
            "Web3",
            "Web3",
          ],
          imageSrc:
            "https://saidulbadhon.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjutsu-web.a51b85e5.png&w=3840&q=95",
        },
        {
          headerText: "CorpComment",
          subHeaderTextarea:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
          tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
          imageSrc:
            "https://saidulbadhon.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjutsu-web.a51b85e5.png&w=3840&q=95",
        },
        {
          headerText: "rmtDev",
          subHeaderTextarea:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
          tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
          imageSrc:
            "https://saidulbadhon.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjutsu-web.a51b85e5.png&w=3840&q=95",
        },
        {
          headerText: "Word Analytics",
          subHeaderTextarea:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
          tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
          imageSrc:
            "https://saidulbadhon.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjutsu-web.a51b85e5.png&w=3840&q=95",
        },
      ],
    },
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#b9ff81",
    },
    node: "eqJ1Le-Eek",
  },
  skills: {
    props: {
      headerText: "My Skills",
      catagories: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Git",
        "MongoDB",
        "Express",
        "PostgreSQL",
        "Python",
        "Web3",
        "Blockchain",
      ],
    },
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#b9ff81",
    },
    node: "eqJ1Le-Eek",
  },
  experience: {
    props: {
      headerText: "Experience",
      timeline: [
        {
          durationText: 2019,
          titleText: "Graduated Bootcamp",
          locationText: "Miami, FL",
          descriptionTextarea:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        },
        {
          durationText: "2019 - 2021",
          titleText: "Front-End Developer",
          locationText: "Orlando, FL",
          descriptionTextarea:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        },
        {
          durationText: "2023 - present",
          titleText: "Full-Stack Software Engineer",
          locationText: "Concord, CF",
          descriptionTextarea:
            "I'm now working as a full-stack software engineer in Jutsu.ai. My stack includes Web2, Web3, Blockchain, AI and ML. I'm open to full-time opportunities.",
        },
      ],
    },
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#b9ff81",
    },
    node: "eqJ1Le-Eek",
  },
  contact: {
    props: {
      headerText: "Contact Me",
      subHeaderTextarea:
        "Please contact me directly at Saidulbadhon@gmail.com or through this form.",
      buttonText: "Submit",
    },
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#b9ff81",
    },
    node: "eqJ1Le-Eek",
  },
  footer: {
    props: {
      contentText: "2024 Jutsu. All rights reserved.",
    },
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#b9ff81",
    },
    node: "eqJ1Le-Eek",
  },
};
