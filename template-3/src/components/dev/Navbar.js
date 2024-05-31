import { useState } from "react";
import { useNode } from "@craftjs/core";

export default function Navbar({ props, style, id }) {
  const [showNav, setShowNav] = useState(false);
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <nav
      ref={(ref) => connect(drag(ref))}
      id={id}
      style={{
        padding: `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
          style?.paddingBottom || 0
        }px ${style?.paddingLeft || 0}px`,
        margin: `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
          style?.marginBottom || 0
        }px ${style?.marginLeft || 0}px`,
      }}
      className="relative bg-white dark:bg-[#080a11] dark:border-[#080a11]"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex items-center justify-between px-4 py-6"
      >
        <div className="flex items-center gap-10">
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

          <ul className="hidden text-base font-medium items-center gap-6 @lg:flex">
            {props?.navItems?.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-nowrap text-gray-700 dark:text-gray-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <i
          className="fa-solid fa-bars-staggered block text-black dark:text-gray-200 text-xl @lg:hidden"
          onClick={() => setShowNav(true)}
        />

        <div className="hidden @lg:flex items-center gap-2">
          <button
            style={{
              backgroundColor: style?.accent,
            }}
            className="hidden text-nowrap rounded-[4px] bg-[#b9ff81] px-6 py-2 text-base font-semibold text-inherit @lg:block"
          >
            {props?.buttonText} <i className="fa-solid fa-arrow-right ml-1"></i>
          </button>
        </div>

        <div
          className={`absolute right-0 top-0 w-full border-b dark:border-gray-700 bg-white dark:bg-[#080a11] p-7 px-8 transition-all duration-200 ${
            showNav ? "inline-block" : "hidden"
          }`}
        >
          <i
            className="fa-solid fa-xmark mr-6 inline-block w-full cursor-pointer text-right text-2xl text-black dark:text-gray-200"
            onClick={() => setShowNav(false)}
          />
          <ul className="flex flex-col  items-center justify-center gap-6">
            {props?.navItems?.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <button
              style={{
                backgroundColor: style?.accent,
              }}
              className="text-nowrap rounded-md bg-[#b9ff81] px-4 py-1 text-base font-medium dark:text-white text-black block"
            >
              {props?.buttonText}
              <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
