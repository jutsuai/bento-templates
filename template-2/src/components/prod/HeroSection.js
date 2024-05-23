export default function HeroSection({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-slate-800"
    >
      <div className="container mx-auto px-8 flex flex-col py-20 sm:py-24 gap-20 items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full text-center  gap-8">
          <h1 className="text-4xl mt-6 lg:text-7xl text-black dark:text-white font-extrabold">
            {props?.headerText}
          </h1>
          <div className="flex flex-col items-center justify-center gap-6">
            <h6 className="text-lg text-gray-800 dark:text-gray-300 lg:text-xl">
              {props?.subHeaderText}
            </h6>
            <div className="flex items-center justify-center gap-4">
              <button
                style={{
                  backgroundColor: style?.accent,
                }}
                className="text-white rounded-2xl bg-teal-600 px-6 text-sm font-medium py-2"
              >
                {props?.primaryButtonText}
              </button>
              <button
                style={{
                  color: style?.accent,
                  borderColor: style?.accent,
                }}
                className="border border-teal-600 bg-transparent px-6 rounded-2xl text-teal-600 text-sm font-medium py-2"
              >
                {props?.secondaryButtonText}
              </button>
            </div>
          </div>
        </div>
        <img
          src={props?.backgroundImageUrl}
          alt="hero"
          className="w-full  object-cover object-center shadow-lg rounded-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
