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
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Black%20Jutsu.png"
            alt="Jutsu"
            className="inline-block h-8 dark:hidden"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/White%20Jutsu.png"
            alt="Jutsu"
            className="hidden h-8 dark:inline-block"
          />

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
          />{" "}
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
