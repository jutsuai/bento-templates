import { useState } from "react";

export default function Navbar({ props, style, id }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav
      id={id}
      style={{
        padding: `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
          style?.paddingBottom || 0
        }px ${style?.paddingLeft || 0}px`,
        margin: `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
          style?.marginBottom || 0
        }px ${style?.marginLeft || 0}px`,
      }}
      className="relative bg-white dark:bg-[#121212] dark:border-[#121212]"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex items-center justify-between px-4 py-6"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Black%20Jutsu.png"
          alt="Jutsu"
          className="h-8 inline-block dark:hidden"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/White%20Jutsu.png"
          alt="Jutsu"
          className="h-8 hidden dark:inline-block"
        />

        <ul className="hidden text-sm font-medium items-center gap-6 lg:flex">
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
        <i
          className="fa-solid fa-bars-staggered block text-black dark:text-gray-200 text-xl lg:hidden"
          onClick={() => setShowNav(true)}
        />

        <button
          style={{
            backgroundColor: style?.accent,
          }}
          className="hidden text-nowrap rounded-md bg-[#412dff] px-4 py-2 text-sm font-medium text-white lg:block"
        >
          {props?.buttonText}{" "}
          <i class="fa-regular fa-paper-plane opacity-90 ml-1"></i>
        </button>

        <div
          className={`absolute right-0 top-0 w-full border-b dark:border-[#121212] bg-white dark:bg-[#121212] z-50 p-7 px-8 transition-all duration-200 ${
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
              className="text-nowrap rounded-md bg-[#412dff] px-4 py-2 text-sm font-medium text-white"
            >
              {props?.buttonText}
              <i class="fa-regular fa-paper-plane opacity-90 ml-1"></i>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
