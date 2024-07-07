// import Gallery from "./components/prod/Gallery";
// import Navbar from "./components/prod/Navbar";
// import HeroSection from "./components/prod/HeroSection";
// import About from "./components/prod/About";
// // import Contact from "./components/prod/Contact";
// import Footer from "./components/prod/Footer";
// import { useState } from "react";
// import Article from "./components/prod/Article";
// import News from "./components/prod/News";
// import PrimaryCTA from "./components/prod/PrimaryCTA";
// import SecondaryCTA from "./components/prod/SecondaryCTA";

import { useState } from "react";
import ProtfolioNav from "./components/ProtfolioNav";
import ProtfolioHero from "./components/ProtfolioHero";
import ProtfolioFeatured from "./components/ProtfolioFeatured";
import ProtfolioContact from "./components/ProtfolioContact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`relative font-sans ${darkMode ? "dark" : "light"}`}
      // style={{ fontFamily: "revert" }}
    >
      <button
        className="fixed z-50 top-24 aspect-square bg-orange-600 text-white text-sm font-bold p-2 rounded-full left-12"
        onClick={() => setDarkMode((e) => !e)}
      >
        {darkMode ? "Dark" : "Light"}
      </button>
      <ProtfolioNav
        props={values.navbar.props}
        style={values.navbar.style}
        id={values.node}
      />
      <ProtfolioHero
        props={values.heroSection.props}
        style={values.heroSection.style}
        id={values.heroSection.node}
      />
      <ProtfolioFeatured
        props={values.feature.props}
        style={values.feature.style}
        id={values.feature.node}
      />
      <ProtfolioContact
        props={values.contact.props}
        style={values.contact.style}
        id={values.contact.node}
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
      nameText: "EngnZyme",
      titleText: "Front-end",
      navItems: [
        {
          name: "Present",
          link: "#",
        },
        {
          name: "Skills",
          link: "#",
        },
        {
          name: "Contact",
          link: "#",
        },
      ],
      buttonText: "Contact",
    },
    style: {
      flexDirection: "row",
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
      user: {
        avatarSrc: "https://via.placeholder.com/50",
        nameText: "Netcati",
        titleText: "Front-end developer",
      },
      imageSrc:
        "https://ipfs.near.social/ipfs/bafkreifdqo3c7fg2qazsf32da7nchldfyupghi2y4quxuo2qsndkoqxmta",
      headerText: "Passionate to pursue the technology.",
      subHeaderTextarea:
        "I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.",
    },
    style: {
      flexDirection: "row",
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
  feature: {
    props: {
      projects: [
        {
          headerText: "cryptosea",
          subHeaderText: "Next gen bot for crypto-currencies.",
          url: "https://cryptosea.com",
          imageSrc: "https://necatikcl.dev/images/works/cryptosea.png",
        },
        {
          headerText: "mintlify",
          subHeaderText:
            "Meet the modern standard for public facing documentation.",
          url: "https://mintlify.com",
          imageSrc: "https://necatikcl.dev/images/works/mintlify.png",
        },
        {
          headerText: "wiza.co",
          subHeaderText:
            "Sales tool with email verification and LinkedIn export.",
          url: "https://wiza.co",
          imageSrc: "https://necatikcl.dev/images/works/wiza.png",
        },
        {
          headerText: "index.app",
          subHeaderText:
            "Explore your data, build your dashboard, bring your team together.",
          url: "https://index.app",
          imageSrc: "https://necatikcl.dev/images/works/index.png",
        },
        {
          headerText: "hypercal",
          subHeaderText:
            "Maximize work with a private, app-integrated calendar.",
          url: "https://hypercal.com",
          imageSrc: "https://necatikcl.dev/images/works/hypercal.png",
        },
        {
          headerText: "dimension.dev",
          subHeaderText: "Chat, code, cloud, deployments, and more.",
          url: "https://dimension.dev",
          imageSrc: "https://necatikcl.dev/images/works/dimension.png",
        },
        {
          headerText: "reflect.app",
          subHeaderText: "Never miss a note, idea or connection.",
          url: "https://reflect.app",
          imageSrc: "https://necatikcl.dev/images/works/reflect.png",
        },
        {
          headerText: "wope.com",
          subHeaderText: "New era of rank tracking.",
          url: "https://wope.com",
          imageSrc: "https://necatikcl.dev/images/works/wope.png",
        },
      ],
    },
    style: {
      flexDirection: "row",
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
      emailUrlText: "mail@gmail.com",
      twitterUrlText: "https://twitter.com/netci",
      headerText: "Passionate to pursue the technology.",
      subHeaderTextarea:
        "I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.",
    },
    style: {
      flexDirection: "row",
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
