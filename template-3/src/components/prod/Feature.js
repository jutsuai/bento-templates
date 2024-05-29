import React from "react";

export default function Feature({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-[#080a11]"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className={`container mx-auto flex flex-col items-center gap-10 px-4 py-20 ${
          props?.isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="flex-1 relative">
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/feature-border-black.svg"
            alt=""
            className={`dark:hidden block absolute top-0 ${
              props?.isReverse ? "-scale-x-100 right-0" : "left-0"
            }`}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/feature-border-white.svg"
            alt=""
            className={`hidden dark:block absolute top-0 ${
              props?.isReverse ? "-scale-x-100 right-0" : "left-0"
            }`}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/feature-border2-black.svg"
            alt=""
            className={`dark:hidden block absolute top-3 ${
              props?.isReverse ? "-scale-x-100 right-3" : "left-3"
            }`}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/feature-border2-white.svg"
            alt=""
            className={`hidden dark:block absolute top-3 ${
              props?.isReverse ? "-scale-x-100 right-3" : "left-3"
            }`}
          />
          <div className={`mt-6 ${props?.isReverse ? "mr-6" : "ml-6"}`}>
            <img
              src={props?.imageSrc}
              alt="features"
              className="rounded-lg object-cover object-center "
              loading="lazy"
            />
          </div>
        </div>
        {/* </div>
        </div> */}
        <div className="flex flex-1 flex-col gap-4 lg:w-1/2 lg:p-14">
          <p className="text-sm text-gray-700 dark:text-gray-300 lg:text-base font-medium">
            // {props?.subHeaderText}
          </p>
          <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-200 lg:text-base">
            {props?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
