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
      className="relative bg-white dark:bg-[#080a11] dark:border-[#080a11]"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex items-center justify-between px-4 py-6"
      >
        <div className="flex items-center gap-10">
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

          <ul className="hidden text-base font-medium items-center gap-6 lg:flex">
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
          className="fa-solid fa-bars-staggered block text-black dark:text-gray-200 text-xl lg:hidden"
          onClick={() => setShowNav(true)}
        />

        <div className="hidden lg:flex items-center gap-2">
          <button
            style={{
              backgroundColor: style?.accent,
            }}
            className="hidden text-nowrap rounded-[4px] bg-[#b9ff81] px-6 py-2 text-base font-semibold text-inherit lg:block"
          >
            {props?.buttonText} <i class="fa-solid fa-arrow-right ml-1"></i>
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
          />{" "}
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
              {props?.buttonText} <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
