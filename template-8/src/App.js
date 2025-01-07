import { useState } from "react";
import MemeNav from "./components/prod/MemeNav";

import MemeHero from "./components/prod/MemeHero";
import MemeFeatured from "./components/prod/MemeFeatured";
import MemeAbout from "./components/prod/MemeAbout";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`relative font-sans ${darkMode ? "dark" : "light"}`}
      // style={{ fontFamily: "revert" }}
    >
      {/* <button
        className="fixed  z-50 top-24 aspect-square bg-orange-600 text-white text-sm font-bold p-2 rounded-full left-12"
        onClick={() => setDarkMode((e) => !e)}
      >
        {darkMode ? "Dark" : "Light"}
      </button> */}

      <MemeNav
        props={values.navbar.props}
        style={values.navbar.style}
        id={values.navbar.node}
      />
      <MemeHero
        props={values.hero.props}
        style={values.hero.style}
        id={values.hero.node}
      />
      <MemeAbout
        props={values.about.props}
        style={values.about.style}
        id={values.about.node}
      />
      <MemeFeatured
        props={values.featured.props}
        style={values.featured.style}
        id={values.featured.node}
      />

      {/* <PortHero
        props={values.heroSection.props}
        style={values.heroSection.style}
        id={values.heroSection.node}
      /> */}
      {/* <PortAbout
        props={values.about.props}
        style={values.about.style}
        id={values.about.node}
      /> */}
      {/* <PortFeatured
        props={values.featured.props}
        style={values.featured.style}
        id={values.featured.node}
      /> */}
      {/* <PortSkills
        props={values.skills.props}
        style={values.skills.style}
        id={values.skills.node}
      /> */}
      {/* <PortExperience
        props={values.experience.props}
        style={values.experience.style}
        id={values.experience.node}
      /> */}
      {/* <PortContact
        props={values.contact.props}
        style={values.contact.style}
        id={values.contact.node}
      /> */}
      {/* <PortFooter
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
      headerText: "TRUMP INU",
      navItems: [
        {
          name: "Home",
          link: "#",
        },
        {
          name: "Whitepaper",
          link: "#",
        },
        {
          name: "Contact",
          link: "#",
        },
        {
          name: "Dextools",
          link: "#",
        },
      ],
      buttonText: "Buy Trump Menu",
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
  hero: {
    props: {
      avatarSrc:
        "https://ipfs.near.social/ipfs/bafkreidzejtmgg2pwce7rznwmz3aqnmew4en5q75345xg4kyc7ioiyvah4",
      headerText: "Welcome to",
      subHeaderText: "TRUMP INU",
      descriptionTextarea:
        "There is nothing more bulish then Trump and a Doge in 2024",
      primaryButtonText: "Whitepaper",
      secondaryButtonText: "Chart",
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
      headerText: "1% Tax donated to maga",
      subHeaderTextarea:
        "We will make weekly donations to the Wounded Warrior Project and Veterans For Child Rescue non-profits via trade fees.",
      cards: [
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreidzejtmgg2pwce7rznwmz3aqnmew4en5q75345xg4kyc7ioiyvah4",
          backgroundColor: "#5b8bee",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreidzejtmgg2pwce7rznwmz3aqnmew4en5q75345xg4kyc7ioiyvah4",
          backgroundColor: "#feef32",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreidzejtmgg2pwce7rznwmz3aqnmew4en5q75345xg4kyc7ioiyvah4",
          backgroundColor: "#e01eff",
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
  featured: {
    props: {
      headerText: " How to get Coin Trump INU",
      subHeaderTextarea:
        "Coin Trump INU is a decentralized meme token that grows in value through the community's efforts. The more you hold, the more you earn. The more you earn, the more you can hold. It's a cycle that rewards the community for their support.",
      cards: [
        {
          titleText: "ETH",
          descriptionTextarea:
            "Buy ETH on Coinbase or Binance. Send ETH to your Metamask wallet.",
        },
        {
          titleText: "Uniswap",
          descriptionTextarea:
            "Go to Uniswap and connect your Metamask wallet. Swap ETH for Trump INU.",
        },
        {
          titleText: "Hodl",
          descriptionTextarea:
            "Hold your Trump INU tokens in your Metamask wallet. The more you hold, the more you earn.",
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
      categories: [
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
