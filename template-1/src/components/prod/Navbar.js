import { useState } from "react";

export default function Navbar({ props, style, id }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="relative border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex items-center justify-between px-8 py-6"
      >
        <div className="flex items-center gap-6 text-sm font-medium">
          <svg
            className="dark:fill-white fill-black h-9"
            width="133"
            height="166"
            viewBox="0 0 133 166"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_3125_6665)">
              <path d="M2 33.8189V0H130.953V98.5159C130.953 135.278 100.911 163 66.1089 163C29.4901 163 2 132.427 2 98.5159V73.8134H35.8189V98.5159C35.8189 116.678 51.0366 129.176 66.1089 129.176C83.3579 129.176 97.134 115.628 97.134 98.5159V33.8189H2Z" />
              <circle cx="18.9094" cy="53.9631" r="11.322" fill="#FFD37C" />
            </g>
            <defs>
              <filter
                id="filter0_d_3125_6665"
                x="0.823691"
                y="0"
                width="131.305"
                height="165.353"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.17631" />
                <feGaussianBlur stdDeviation="0.588155" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3125_6665"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3125_6665"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <ul className="hidden items-center gap-6 lg:flex">
            {props?.navItems?.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-nowrap text-gray-700 dark:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <i
          className="fa-solid fa-bars-staggered block text-xl text-black dark:text-gray-200 lg:hidden"
          onClick={() => setShowNav(true)}
        />

        <button
          style={{
            backgroundColor: style?.accent,
          }}
          className="hidden text-nowrap rounded-2xl bg-purple-700  px-4 py-1 text-sm font-medium text-white lg:block"
        >
          {props?.buttonText}
        </button>

        <div
          className={`absolute right-0 top-0 w-full border-b bg-white p-7 px-8 transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 ${
            showNav ? "inline-block" : "hidden"
          }`}
        >
          <i
            className="fa-solid fa-xmark mr-6 inline-block w-full cursor-pointer text-right text-2xl text-black dark:text-gray-200"
            onClick={() => setShowNav(false)}
          />
          <ul className="flex flex-col items-center justify-center gap-6">
            {props?.navItems?.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-700  dark:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <button
              style={{
                backgroundColor: style?.accent,
              }}
              className="text-nowrap rounded-2xl bg-purple-700  px-4 py-1 text-sm font-medium text-white "
            >
              {props?.buttonText}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
