import { useState } from "react";
import MemeNav from "./components/prod/MemeNav";

import MemeHero from "./components/prod/MemeHero";
import MemeHowToGet from "./components/prod/MemeHowToGet";
import MemeAbout from "./components/prod/MemeAbout";
import MemeFeatured from "./components/prod/MemeFeatured";
import MemeFooter from "./components/prod/MemeFooter";

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
      <MemeHowToGet
        props={values.howtoget.props}
        style={values.howtoget.style}
        id={values.howtoget.node}
      />
      <MemeFeatured
        props={values.featured.props}
        style={values.featured.style}
        id={values.featured.node}
      />

      <MemeFooter
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
  howtoget: {
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
  featured: {
    props: {
      headerText: "Team Members",
      subHeaderTextarea:
        "Our team is made up of experienced professionals who are passionate about blockchain technology and its potential to change the world.",
      featuredImages: [
        "https://ipfs.near.social/ipfs/bafkreihjjyq5fhtcmtkc7mtuxkzi3nq7bszurkcu3odmgicg3zwefqtvpi",
        "https://ipfs.near.social/ipfs/bafkreihjjyq5fhtcmtkc7mtuxkzi3nq7bszurkcu3odmgicg3zwefqtvpi",
        "https://ipfs.near.social/ipfs/bafkreihjjyq5fhtcmtkc7mtuxkzi3nq7bszurkcu3odmgicg3zwefqtvpi",
        "https://ipfs.near.social/ipfs/bafkreihjjyq5fhtcmtkc7mtuxkzi3nq7bszurkcu3odmgicg3zwefqtvpi",
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
  footer: {
    props: {
      headerText: "TRUMP INU",
      subHeaderText:
        "We will make weekly donations to the Wounded Warrior Project and Veterans For Child Rescue",
      buttonText: "Buy Trump Menu",

      legal: {
        titleText: "Legal",
        data: [
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
      },
      service: {
        titleText: "Service",
        data: [
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
      },

      copyRight: "2025 TRUMP INU. All Rights Reserved.",
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
      accent: "#94cc67",
    },
    node: "WLZFjGp2JT",
  },
};
