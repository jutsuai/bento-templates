export default function HeroSection({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-[#080a11] overflow-hidden"
    >
      <div className="container mx-auto px-4 flex items-center py-20 sm:py-24 gap-20 justify-center lg:flex-row flex-col lg:justify-between">
        <div className="flex flex-col items-center lg:text-left text-center lg:items-start justify-center w-full  gap-8 max-w-xl">
          <h1 className="text-4xl mt-6 lg:text-6xl text-black dark:text-white font-bold !leading-tight">
            {props?.headerText}
          </h1>

          <h6 className="text-lg text-gray-800 dark:text-gray-300 lg:text-xl">
            {props?.subHeaderText}
          </h6>
          <div className="flex items-center justify-start gap-4">
            <button
              style={{
                backgroundColor: style?.accent,
              }}
              className="flex items-center gap-2 bg-[#b9ff81] px-8 rounded-[4px] text-black text-base font-semibold py-4"
            >
              {props?.secondaryButtonText}{" "}
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button className="text-black flex items-center gap-2 dark:text-white px-6 text-base font-semibold py-2">
              {props?.primaryButtonText} <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="relative h-full w-full aspect-square max-w-md hidden lg:block ">
          <img
            src={props?.backgroundImages[0] || ""}
            alt="hero"
            className="absolute top-14 -right-10 border  border-white/10 w-full max-w-72 aspect-[9/11] object-cover object-center shadow-lg rounded-md"
            loading="lazy"
          />
          <img
            src={props?.backgroundImages[1] || ""}
            alt="hero"
            className="w-full max-w-md max-h-64 border border-white/10 aspect-square object-cover object-center shadow-lg rounded-md"
            loading="lazy"
          />
          <img
            src={props?.backgroundImages[2] || ""}
            alt="hero"
            className="absolute bottom-5 -left-24 border border-white/10 w-full max-w-72 aspect-video object-cover object-center shadow-lg rounded-md"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
