import { useState } from "react";

export default function Gallery({ props, style, id }) {
  const [count, setCount] = useState(0);
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-slate-800"
    >
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div
        style={{ flexDirection: style.flexDirection }}
        className="mx-auto px-8 py-20 flex lg:flex-row flex-col items-center justify-center text-center gap-20 container"
      >
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl text-black dark:text-white xl:text-5xl font-bold mb-6">
            {props.headerText}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 lg:text-lg">
            {props.subHeaderText}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,1fr))] lg:grid-cols-2 items-center gap-6 w-full lg:w-1/2">
          {props.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="bike"
              className="w-full aspect-video object-cover object-center rounded-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
