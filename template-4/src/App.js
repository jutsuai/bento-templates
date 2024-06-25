import Navbar from "./components/prod/Navbar";
import HeroSection from "./components/prod/HeroSection";
import Numbers from "./components/prod/Numbers";
import Services from "./components/prod/Services";
import About from "./components/prod/About";
import Gallery from "./components/prod/Gallery";
import Footer from "./components/prod/Footer";
import { useState } from "react";
import Testimonials from "./components/prod/Testimonials";
import CTA from "./components/prod/CTA";

export default function App() {
  const [darkMode, setDarkMode] = useState();
  return (
    <main
      className={`relative ${darkMode ? "dark" : ""}`}
      // style={{ fontFamily: "revert" }}
    >
      <button
        className="fixed z-50 top-10 aspect-square bg-orange-600 text-white text-sm font-bold p-2 rounded-full left-12"
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
      <Numbers
        props={{}}
        style={values.partners.style}
        id={values.partners.node}
      />
      <Services
        props={{}}
        style={values.partners.style}
        id={values.partners.node}
      />
      <About
        props={{}}
        style={values.partners.style}
        id={values.partners.node}
      />
      <Gallery
        props={{}}
        style={values.partners.style}
        id={values.partners.node}
      />

      <Testimonials
        props={{}}
        style={values.partners.style}
        id={values.partners.node}
      />
      <CTA props={{}} style={values.partners.style} id={values.partners.node} />

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
  partners: {
    props: {
      headerText: "Trusted by the worlds best companies",
      imageSrc: [
        "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/107.webp",
        "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/40626.webp",
        "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/4332857.webp",
        "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/5.webp",
        "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/ODUJEH0.webp",
        "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/bird_2.webp",
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
  gallery: {
    props: {
      headerText: "Explore Our Bike Gallery",
      subHeaderTextarea:
        "Browse through our collection of high-quality bikes available for sale",
      imageSrc: [
        "https://source.unsplash.com/random/315x215/?bike gallery",
        "https://source.unsplash.com/random/320x220/?bike gallery",
        "https://source.unsplash.com/random/325x225/?bike gallery",
        "https://source.unsplash.com/random/335x235/?bike gallery",
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
    node: "c0841A0VNv",
  },
  features: {
    props: {
      isReverse: false,
      subHeaderTextarea: "Ride in Style and Comfort",
      headerText: "Premium Bikes",
      description:
        "Explore our collection of premium bites that offer both style and cockpit for an exceptional writing experience.",
      imageSrc: "https://source.unsplash.com/random/600x500/?sports bikes",
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
    node: "I2n0gkh6lx",
  },
  "features-1": {
    props: {
      isReverse: true,
      subHeaderTextarea: "Ride in Style and Power",
      headerText: "Mountain Bikes",
      description:
        "Explore the great outdoors with our range of durable and high-performance mountain bikes. Designed to tackle rough terrains and steep inclines, these bikes are perfect for adventure seekers.",
      imageSrc: "https://source.unsplash.com/random/605x505/?sports bikes",
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
    node: "jOCWcl4ZY3",
  },
  "features-2": {
    props: {
      isReverse: false,
      subHeaderTextarea: "Ride in style with our sleek and modern designs",
      headerText: "Sleek Design",
      description:
        "Our bikes are designed to not only perform well but also turn heads with their sleek and stylish appearance.",
      imageSrc: "https://source.unsplash.com/random/610x510/?sports bikes",
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
    node: "hFj2-m4g8y",
  },
  cta: {
    props: {
      headerText: "Find Your Perfect Ride",
      subHeaderTextarea:
        "Explore our wide range of bikes and find the one that suits your style and needs.",
      primaryButtonText: "Browse Bikes",
      secondaryButtonText: "Contact Us",
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
  faq: {
    props: {
      headerText: "Frequently Asked Questions",
      subHeaderTextarea:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      qna: [
        {
          question: "Do you offer test rides for the bikes?",
          answer:
            "Yes, we offer test rides for all our bikes to ensure you find the perfect fit.",
        },
        {
          question: "What is the warranty period for your products?",
          answer:
            "Our products come with a 1-year warranty from the date of purchase.",
        },
        {
          question: "Can I return a product if I'm not satisfied?",
          answer:
            "Yes, we have a 30-day return policy for all our products. Please refer to our return policy for more details.",
        },
        {
          question: "How long does shipping take?",
          answer:
            "Shipping usually takes 3-5 business days within the country. International shipping may take longer.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, PayPal, and bank transfers.",
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
    node: "qWKNVA6O_F",
  },
  contact: {
    props: {
      headerText: "Contact Us",
      subHeaderTextarea:
        "Feel free to reach out to us for any inquiries or assistance.",
      email: "hello@jutsu.ai",
      phone: "+1 234 567 890",
      address: "123 Main Street, New York, NY 10001",
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
    node: "LZ3qsC8_zP",
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
      accent: "#412dff",
    },
    node: "WLZFjGp2JT",
  },
};
