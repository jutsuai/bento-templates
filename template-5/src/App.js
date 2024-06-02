// import Gallery from "./components/prod/Gallery";
import Navbar from "./components/prod/Navbar";
import HeroSection from "./components/prod/HeroSection";
import About from "./components/prod/About";
// import Contact from "./components/prod/Contact";
import Footer from "./components/prod/Footer";
import { useState } from "react";
import Article from "./components/prod/Article";
import News from "./components/prod/News";
import PrimaryCTA from "./components/prod/PrimaryCTA";
import SecondaryCTA from "./components/prod/SecondaryCTA";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`relative ${darkMode ? "dark" : ""} font-sans`}
      // style={{ fontFamily: "revert" }}
    >
      <button
        className="fixed z-50 top-52 aspect-square bg-orange-600 text-white text-sm font-bold p-2 rounded-full left-12"
        onClick={() => setDarkMode((e) => !e)}
      >
        {darkMode ? "Dark" : "Light"}
      </button>
      <Navbar
        props={values.navbar.props}
        style={values.navbar.style}
        id={values.node}
      />
      <HeroSection
        props={values.heroSection.props}
        style={values.heroSection.style}
        id={values.heroSection.node}
      />
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
      />
    </main>
  );
}

const values = {
  navbar: {
    props: {
      navItems: [
        {
          name: "Company",
          link: "#",
        },
        {
          name: "Technology",
          link: "#",
        },
        {
          name: "Solution",
          link: "#",
        },
        {
          name: "Latest news",
          link: "#",
        },
        {
          name: "Careers",
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
      backgroundImageUrl:
        "https://source.unsplash.com/random/1920x1080/?chemistry%20black",
      headerText: "changing chemistry for good",
      subHeaderText:
        "We are a team of passionate cyclists dedicated to providing high-quality bikes and accessories to our customers.",
      primaryButtonText: "Contact Us",
      secondaryButtonText: "View Collection",
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

  about: {
    props: {
      aboutText:
        "The global, $5 trillion chemical industry faces a reckoning. Chemical production is expected to quadruple by 2050 to meet ever-increasing demand. But the industry must cut greenhouse gas emissions by more than half to meet sustainability goals.",
      moreInfo: [
        {
          title: "Nature's catalysts",
          description:
            "Enzymes enable chemistry in the natural world. We unlock their potential as clean, precise, and efficient catalysts for sustainable manufacturing.",
        },
        {
          title: "Nature's catalysts",
          description:
            "Enzymes enable chemistry in the natural world. We unlock their potential as clean, precise, and efficient catalysts for sustainable manufacturing.",
        },
        {
          title: "Nature's catalysts",
          description:
            "Enzymes enable chemistry in the natural world. We unlock their potential as clean, precise, and efficient catalysts for sustainable manufacturing.",
        },
        {
          title: "Nature's catalysts",
          description:
            "Enzymes enable chemistry in the natural world. We unlock their potential as clean, precise, and efficient catalysts for sustainable manufacturing.",
        },
      ],
      buttonText: "Get started",
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
    node: "eqJ12e-Eer",
  },
  article: {
    props: {
      backgroundImageUrl:
        "https://source.unsplash.com/random/1920x1080/?lab%20article",
      headerText: "We need the chemistry industry but it needs to change",
      subHeaderText:
        "Even as the world transitions to renewable energy, we still need the chemistry industry to produce the materials that make modern life possible. But the industry must change to meet sustainability goals.",
      metadata: {
        title: "ARTICLES",
        date: "2024-02-05",
      },
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
    node: "eqQ12q-Eer",
  },
  news: {
    props: {
      headerText: "Latest news, events & press",
      buttonText: "View all",
      news: [
        {
          article:
            "Even as the world transitions to renewable energy, we still need the chemistry industry to produce the materials that make modern life possible. But the industry must change to meet sustainability goals.",
          metadata: {
            title: "ARTICLES",
            date: "2024-02-05",
          },
        },
        {
          article:
            "Even as the world transitions to renewable energy, we still need the chemistry industry to produce the materials that make modern life possible. But the industry must change to meet sustainability goals.",
          metadata: {
            title: "ARTICLES",
            date: "2024-02-05",
          },
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
    node: "eqQ1r2q-Eer",
  },

  primaryCTA: {
    props: {
      headerText: "Pattented technology",
      subHeaderText:
        "Our patented enzyme immobilisation technology enables best of both worlds  biomanufacturing. We create bespoke, stable biocatalysts that can be used in multi-step enzymatic reactions, applying lessons from nature to modern manufacturing.",
      buttonText: "Get started",
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
    node: "lb4B3saWZH",
  },
  secondaryCTA: {
    props: {
      headerText: "Join enginzyme and impact tomorrow today",
      subHeaderText:
        "Could your company benefit from a cleaner, less energy-intensive manufacturing process? Let's talk about it.",
      buttonText: "Join Us",
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
    node: "lb4B3saWZH",
  },

  footer: {
    props: {
      legal: [
        {
          name: "Privacy Policy",
          link: "#",
        },
        {
          name: "Terms and Conditions",
          link: "#",
        },
        {
          name: "Cookies Policy",
          link: "#",
        },
        {
          name: "Disclaimer",
          link: "#",
        },
        {
          name: "Refund Policy",
          link: "#",
        },
      ],
      service: [
        {
          name: "FAQ",
          link: "#",
        },
        {
          name: "Contact Us",
          link: "#",
        },
        {
          name: "Support",
          link: "#",
        },
        {
          name: "Live Chat",
          link: "#",
        },
        {
          name: "Community Forum",
          link: "#",
        },
      ],
      information: [
        {
          name: "Company Info",
          link: "#",
        },
        {
          name: "Careers",
          link: "#",
        },
        {
          name: "Press",
          link: "#",
        },
        {
          name: "Our Team",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
      ],
      copyRight: "2023 Bike Showroom. All Rights Reserved.",
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
    node: "WLZFjGp2JT",
  },
};
