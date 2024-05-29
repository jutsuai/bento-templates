import { useState } from "react";

export default function FAQ({ props, style, id }) {
  return (
    <section id={id} className="bg-white dark:bg-[#080a11]">
      <div className="container mx-auto px-4 py-20 grid w-full grid-cols-1 gap-10 place-items-center">
        <div
          style={{
            padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
            margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
          }}
          className="flex flex-col gap-6 text-center xl:text-left"
        >
          <h2 className="text-4xl text-center text-black dark:text-white font-bold lg:text-4xl">
            {props?.headerText}
          </h2>
          <p className="text-sm text-center text-gray-700 dark:text-gray-300 lg:text-base">
            {props?.subHeaderText}
          </p>
        </div>
        <div className="flex flex-col gap-8 rounded-sm w-full max-w-7xl py-14">
          {props?.qna?.map((item, index) => (
            <FAQItem
              key={index}
              question={item?.question}
              answer={item?.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={`relative border-b border-black/30 dark:border-white/30 pb-2 hover:text-black dark:hover:text-white dark:text-white/70`}
      onClick={() => setExpand((e) => !e)}
    >
      <div className="flex items-center w-full justify-between">
        <h3 className="text-lg font-medium text-black dark:text-white leading-relaxed ">
          {question}
        </h3>
        <i
          class={`transition-all fa-solid  text-sm text-gray-800 dark:text-gray-200 ${
            expand ? "transform rotate-180 fa-minus" : "fa-plus"
          }`}
        ></i>
      </div>
      <p
        className={`transition-all text-xs mt-1 ${
          expand ? "opacity-100 h-fit" : "opacity-0 h-0"
        } text-gray-800 dark:text-white/70 font-medium leading-relaxed lg:text-sm lg:font-normal`}
      >
        {answer}
      </p>
    </div>
  );
}
