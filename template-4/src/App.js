import Navbar from "./components/prod/Navbar";
import HeroSection from "./components/prod/HeroSection";
import Numbers from "./components/prod/Statistics";
import Services from "./components/prod/Services";
import About from "./components/prod/About";
import Gallery from "./components/prod/Gallery";
import Footer from "./components/prod/Footer";
import Testimonials from "./components/prod/Testimonial";
import CTA from "./components/prod/CTA";

import { useState } from "react";
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
      <Numbers
        props={values.numbers.props}
        style={values.numbers.style}
        id={values.numbers.node}
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
      <Gallery
        props={values.gallery.props}
        style={values.gallery.style}
        id={values.gallery.node}
      />

      <Testimonials
        props={values.testimonials.props}
        style={values.testimonials.style}
        id={values.testimonials.node}
      />
      <CTA
        props={values.cta.props}
        style={values.cta.style}
        id={values.cta.node}
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
  statistics: {
    props: {
      statisticsData: [
        {
          titleText: "PROJECTS",
          countText: "100+",
        },
        {
          titleText: "AWARDS",
          countText: "24+",
        },
        {
          titleText: "CLIENTS",
          countText: "70+",
        },
        {
          titleText: "EXPERIENCE",
          countText: "10+",
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
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      servicesData: [
        {
          image:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Web Design",
          subHeaderTextarea:
            "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
        },
        {
          image:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "SEO Optimization",
          subHeaderTextarea:
            "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
        },
        {
          image:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Marketing",
          subHeaderTextarea:
            "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
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
      headerText: "Meet Adnan Siddiqui",
      descriptionTextarea:
        "Adnan Siddiqui is a seasoned full-stack developer with a track record of transforming ideas into digital solutions that empower businesses and enhance user experiences.",
      subHeaderText: "ABOUT US",
      buttonText: "LEARN MORE",
      imageSrc:
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
      projects: [
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Responsive Web Design",
          subHeaderTextarea:
            "Adnan specializes in creating visually stunning and highly interactive websites that ensure an optimal user experience on all devices.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "SEO Optimization",
          subHeaderTextarea:
            "Leveraging the latest SEO strategies, Adnan enhances your digital presence and search engine rankings, ensuring your business gets the visibility it deserves.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Digital Marketing",
          subHeaderTextarea:
            "From social media campaigns to email marketing, Adnan designs comprehensive digital marketing strategies that drive engagement and increase sales.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
          headerText: "Decentralized Applications (DApps)",
          subHeaderTextarea:
            "Adnan develops secure and scalable decentralized applications that leverage blockchain technology to offer innovative solutions to complex problems.",
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
      subHeaderText: "PROTFOLIO",
      headerText: "Our Projects",
      descriptionTextarea:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      protfolioData: [
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
          headerText: "Web Design",
          subHeaderTextarea:
            "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
          headerText: "SEO Optimization",
          subHeaderTextarea:
            "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
        },
        {
          imageSrc:
            "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
          headerText: "Marketing",
          subHeaderTextarea:
            "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
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
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.”",
      imageSrc: [
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
      ],

      userData: {
        imageSrc:
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
      buttonText: "LETS TALK",
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
