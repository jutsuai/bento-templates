import Gallery from "./components/prod/Gallery";
import HeroSection from "./components/prod/HeroSection";
import Navbar from "./components/prod/Navbar";
import Partners from "./components/prod/Partners";
import Feature from "./components/prod/Feature";
import CTA from "./components/prod/CTA";
import FAQ from "./components/prod/FAQ";
import Contact from "./components/prod/Contact";
import Footer from "./components/prod/Footer";
import { useState } from "react";

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
      <Partners
        props={values.partners.props}
        style={values.partners.style}
        id={values.partners.node}
      />
      <Gallery
        props={values.gallery.props}
        style={values.gallery.style}
        id={values.gallery.node}
      />
      <Feature
        props={values.features.props}
        style={values.features.style}
        id={values.features.node}
      />
      <CTA
        props={values.cta.props}
        style={values.cta.style}
        id={values.cta.node}
      />
      <FAQ
        props={values.faq.props}
        style={values.faq.style}
        id={values.faq.node}
      />
      <Contact
        props={values.contact.props}
        style={values.contact.style}
        id={values.contact.node}
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
          name: "Home",
          link: "#",
        },
        {
          name: "Bikes",
          link: "#",
        },
        {
          name: "Accessories",
          link: "#",
        },
        {
          name: "About Us",
          link: "#",
        },
        {
          name: "Contact Us",
          link: "#",
        },
      ],
      buttonText: "Buy",
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
      accent: "#0d9488",
    },
    node: "7YoXE88zl3",
  },
  heroSection: {
    props: {
      imageSrc:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headerText: "Welcome to our Bike Showroom",
      subHeaderTextarea:
        "Explore our widerange of bikes for every type of rider",
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
      accent: "#0d9488",
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
      accent: "#0d9488",
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
      accent: "#0d9488",
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
      accent: "#0d9488",
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
      accent: "#0d9488",
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
      accent: "#0d9488",
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
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 0,
      marginRight: 0,
      accent: "#0d9488",
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
      accent: "#0d9488",
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
      accent: "#0d9488",
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
      accent: "#0d9488",
    },
    node: "WLZFjGp2JT",
  },
};
