import Navbar from "./components/prod/Navbar";
import HeroSection from "./components/prod/HeroSection";

import Services from "./components/prod/Services";
import About from "./components/prod/About";

import CTA from "./components/prod/CTA";

import { useState } from "react";

import Protfolio from "./components/prod/Protfolio";
import Testimonial from "./components/prod/Testimonial";
import ProtoneFooter from "./components/prod/ProtoneFooter";
import Metrics from "./components/prod/Metrics";
export default function App() {
  const [darkMode, setDarkMode] = useState();
  return (
    <main
      className={`relative ${darkMode ? "dark" : "light"}`}
      // style={{ fontFamily: "revert" }}
    >
      {/* <button
        className="fixed z-50 top-10 aspect-square bg-orange-600 text-white text-sm font-bold p-2 rounded-full left-12"
        onClick={() => setDarkMode((e) => !e)}
      >
        {darkMode ? "Dark" : "Light"}
      </button> */}
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
      <Metrics
        props={values.metrics.props}
        style={values.metrics.style}
        id={values.metrics.node}
      />
      <Services
        props={values.services.props}
        style={values.services.style}
        id={values.services.node}
      />
      <About
        props={values.about.props}
        style={values.about.style}
        id={values.about.node}
      />
      <Protfolio
        props={values.protfolio.props}
        style={values.protfolio.style}
        id={values.protfolio.node}
      />

      <Testimonial
        props={values.testimonial.props}
        style={values.testimonial.style}
        id={values.testimonial.node}
      />
      <CTA
        props={values.cta.props}
        style={values.cta.style}
        id={values.cta.node}
      />

      <ProtoneFooter
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
          name: "HOME",
          link: "#",
        },

        {
          name: "SERVICES",
          link: "#",
        },
        {
          name: "ABOUT US",
          link: "#",
        },
        {
          name: "CONTACT US",
          link: "#",
        },
      ],
      buttonText: "BUY",
      logoSrc:
        "https://ipfs.near.social/ipfs/bafkreidii2ec3qsi54iknwotmnnqejoe6l6nivbq2ma65v4thyp7w7dhza",
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
      accent: "#412dff",
    },
    node: "7YoXE88zl3",
  },
  heroSection: {
    props: {
      imageSrc:
        "https://ipfs.near.social/ipfs/bafkreibuoq4pd34vkyv3wqcsyj44ahmhxd5jc6plfk37s4e2xhal2m7fg4",
      headerText: "We Create Beautiful Templates for your dapps",
      subHeaderTextarea:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      primaryButtonText: "HIRE ME",
      secondaryButtonText: "DOWNLOAD CV",
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
      accent: "#412dff",
    },
    node: "eqJ1Le-Eek",
  },
  metrics: {
    props: {
      stats: [
        {
          titleText: "PROJECTS",
          countText: "100",
        },
        {
          titleText: "AWARDS",
          countText: "24",
        },
        {
          titleText: "CLIENTS",
          countText: "70",
        },
        {
          titleText: "EXPERIENCE",
          countText: "10",
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
      accent: "#412dff",
    },
    node: "eqJ1Le-Eek",
  },
  services: {
    props: {
      subHeaderText: "SERVICES",
      headerText: "Making Magic Happen for Your Business",
      descriptionTextarea:
        "Our expert team designs and develops outstanding templates, tailored to bring your decentralized applications to life.",
      solutions: [
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Web Design",
          subHeaderTextarea:
            "We craft user-centric web designs that ensure your dApp is intuitive and engaging, making every interaction smooth and enjoyable.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "SEO Optimization",
          subHeaderTextarea:
            "Optimize your dApp’s reach with our strategic SEO services, designed to increase visibility and drive meaningful traffic.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Marketing",
          subHeaderTextarea:
            "Leverage our bespoke marketing strategies to elevate your dApp’s presence in the decentralized world, attracting and retaining users effectively.",
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
      accent: "#412dff",
    },
    node: "eqJ1Le-Eek",
  },
  about: {
    props: {
      headerText: "Who are we?",
      descriptionTextarea:
        "We are a dynamic team dedicated to designing and developing exceptional templates for decentralized applications. Our goal is to enhance user interaction through creative design and functional excellence on blockchain platforms.",
      subHeaderText: "ABOUT US",
      buttonText: "KNOW MORE",
      imageSrc:
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
      projects: [
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Web Design",
          subHeaderTextarea:
            "Our web designs ensure that your dApp is intuitive, engaging, and perfectly aligned with the user's needs, offering a seamless digital experience.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "SEO Optimization",
          subHeaderTextarea:
            "Boost your dApp’s visibility with our tailored SEO strategies that propel your project to the top of search results, enhancing user acquisition and retention.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Marketing",
          subHeaderTextarea:
            "From strategic planning to execution, our marketing services are designed to elevate your dApp’s market presence and connect with your target audience effectively.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "DAPP Development",
          subHeaderTextarea:
            "Leverage our expertise in dApp development to build robust, scalable, and secure applications that drive your business forward in the decentralized world.",
        },
      ],
    },
    style: {
      flexDirection: "column",
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#412dff",
    },
    node: "qW8TVT1Ghs",
  },
  protfolio: {
    props: {
      subHeaderText: "PORTFOLIO",
      headerText: "Our Projects",
      descriptionTextarea:
        "Explore our portfolio to see how we've transformed ideas into beautifully functional dApps that excel in user experience and aesthetic design.",
      imageSrc: [
        "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
        "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
        "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
      ],
      projects: [
        {
          headerText: "Web Design",
          subHeaderTextarea:
            "Our web design projects showcase our commitment to creating user-friendly, visually appealing, and responsive dApp interfaces.",
        },
        {
          headerText: "SEO Optimization",
          subHeaderTextarea:
            "Our SEO optimization projects highlight our expertise in enhancing dApp visibility and user engagement through targeted strategies.",
        },
        {
          headerText: "Marketing",
          subHeaderTextarea:
            "Our marketing projects demonstrate how we use innovative strategies to effectively market dApps, ensuring high visibility and user retention.",
        },
      ],
    },
    style: {
      flexDirection: "column",
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#412dff",
    },
    node: "qW8TVT1Ghs",
  },
  testimonial: {
    props: {
      headerText: "TESTIMONIALS",
      messageTextarea:
        "“At our core, we design and develop cutting-edge templates for decentralized applications. Our approach combines aesthetic precision with technical functionality to ensure each project not only looks appealing but operates seamlessly across all blockchain platforms.”",
      imageSrc: [
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
      ],

      createdBy: {
        avatarSrc:
          "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
        nameText: "John Doe",
        designationText: "CEO, Company",
      },
    },
    style: {
      flexDirection: "column",
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#412dff",
    },
    node: "qW8TVT1Ghs",
  },
  cta: {
    props: {
      headerText: "Discover How Design Can Help Your Business",
      primaryButtonText: "LETS TALK",
    },
    style: {
      flexDirection: "column",
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#412dff",
    },
    node: "lb4B3saWZH",
  },
  footer: {
    props: {
      headerText: "Get In Touch With Me",
      subHeaderTextarea:
        "Feel free to reach out to us for any inquiries or assistance.",
      emailText: "hello@jutsu.ai",
      phoneText: "+1 234 567 890",
      addressText: "123 Main Street, New York, NY 10001",
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
      accent: "#412dff",
    },
    node: "WLZFjGp2JT",
  },
};
