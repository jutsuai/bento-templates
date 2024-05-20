import { useState } from "react";

export default function Navbar({ props, style }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      style={{
        padding: `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
          style?.paddingBottom || 0
        }px ${style?.paddingLeft || 0}px`,
        margin: `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
          style?.marginBottom || 0
        }px ${style?.marginLeft || 0}px`,
      }}
      className="relative border-b border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-950"
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
            {props.navItems.map((item, index) => (
              <li>
                <a
                  key={index}
                  href={item.link}
                  className="text-nowrap text-gray-700 hover:text-purple-700 dark:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <i
          class="fa-solid fa-bars-staggered block text-xl text-black dark:text-gray-200 lg:hidden"
          onClick={() => setShowNav(true)}
        />

        <button className="hidden text-nowrap rounded-2xl bg-purple-700  px-4 py-1 text-sm font-medium text-white lg:block">
          {props.buttonText}
        </button>

        <div
          className={`absolute right-0 top-0 w-full border-b bg-white p-7 px-8 transition-all duration-200 dark:border-gray-700 dark:bg-gray-900 ${
            showNav ? "inline-block" : "hidden"
          }`}
        >
          <i
            class="fa-solid fa-xmark mr-6 inline-block w-full cursor-pointer text-right text-2xl text-black dark:text-gray-200"
            onClick={() => setShowNav(false)}
          />{" "}
          <ul className="flex flex-col items-center justify-center gap-6">
            {props.navItems.map((item, index) => (
              <li>
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-700 hover:text-purple-700 dark:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <button className="text-nowrap rounded-2xl bg-purple-700  px-4 py-1 text-sm font-medium text-white ">
              {props.buttonText}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
