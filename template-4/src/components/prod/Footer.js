import React from "react";

const socialIcons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
    href: "https://www.linkedin.com/tryjutsu",
  },

  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
    href: "https://twitter.com/tryjutsu",
  },

  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
      </svg>
    ),
    href: "https://www.facebook.com/tryjutsu",
  },
];

export default function Footer({ props, style, id }) {
  const {
    headerText = "Get In Touch With Me",
    subHeaderTextarea = "Feel free to reach out to us for any inquiries or assistance.",
    emailText = "hello@jutsu.ai",
    phoneText = "+1 234 567 890",
    addressText = "123 Main Street, New York, NY 10001",
  } = props;
  return (
    <footer className="relative bg-[#f2f2f2] dark:bg-[#1e1e1e] overflow-hidden">
      <div className=" container mx-auto py-20 px-4">
        <div className="w-full z-10 h-full flex flex-col items-center justify-center text-center gap-6">
          <h2 className="text-3xl z-10 text-black dark:text-white font-medium">
            {headerText}
          </h2>
          <div
            style={{
              width: "100%",
              zIndex: "10",
              maxWidth: "150px",
              height: "2px",
              backgroundColor: "#6fff93",
            }}
          />
          <div className="z-10 flex flex-col items-center justify-center gap-2">
            <p className="text-black/80 dark:text-white/80">{emailText}</p>
            <p className="text-black/80 dark:text-white/80">{phoneText}</p>
            <p className="text-black/80 dark:text-white/80">{addressText}</p>
          </div>
          <div className="flex items-center gap-4">
            <svg
              style={{
                fill: "#6fff93",
                height: "25px",
                width: "25px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>

            <svg
              style={{
                fill: "#6fff93",
                height: "25px",
                width: "25px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>

            <svg
              style={{
                fill: "#6fff93",
                height: "25px",
                width: "25px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
            </svg>
          </div>
          <p className="text-black/80 dark:text-white/80 z-10">
            {subHeaderTextarea}
          </p>
        </div>
      </div>
      <img
        src="https://ipfs.near.social/ipfs/bafkreihxnynyx5buylxythhytug5w57stzf3ufwwhyz3cmmc2ongvhrdwm"
        alt="footer"
        className="absolute top-[10%] left-0 right-0 z-0 h-full mx-auto object-cover object-center opacity-20 dark:opacity-100"
      />
    </footer>
  );
}
