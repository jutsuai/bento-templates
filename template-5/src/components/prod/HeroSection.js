export default function HeroSection({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
        backgroundImage: `url(${props?.backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-white dark:bg-[#080a11]"
    >
      <div className="relative p-4 md:px-12 min-h-dvh max-h-full py-24 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col items-center lg:text-left text-center lg:items-start justify-center w-full gap-16 col-span-1">
          <h1 className="text-5xl sm:text-7xl md:text-9xl leading-none text-white drop-shadow-xl ">
            {props?.headerText}
          </h1>

          <h6 className="text-sm md:text-lg text-gray-200 lg:text-lg drop-shadow-lg max-w-xl">
            {props?.subHeaderText}
          </h6>
          <button
            style={{
              backgroundColor: style?.accent,
            }}
            className="flex items-center justify-center bg-[#b9ff81] text-black text-sm font-semibold w-12 h-12 rounded-full absolute bottom-10 "
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
