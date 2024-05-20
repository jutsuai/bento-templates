export default function HeroSection({ props, style }) {
  return (
    <section
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-gray-950"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex flex-row items-center justify-center gap-16 px-8 py-20 lg:justify-between"
      >
        <div className="flex max-w-3xl flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
          <h1 className="text-3xl font-bold text-black lg:text-5xl xl:text-6xl dark:text-white">
            {props.headerText}
          </h1>
          <p className="text-base text-gray-600 lg:text-lg dark:text-gray-300">
            {props.subHeaderText}
          </p>
          <div className="flex items-center gap-4">
            <button className="text-nowrap rounded-2xl border-purple-700 bg-purple-700 px-6 py-2 text-sm font-medium text-white">
              {props.primaryButtonText}
            </button>
            <button className="text-nowrap rounded-2xl border border-purple-700 bg-transparent px-6 py-2 text-sm font-medium text-purple-700">
              {props.secondaryButtonText}
            </button>
          </div>
        </div>
        <div className="relative mr-4 hidden aspect-square max-w-sm rounded-lg  lg:block xl:max-w-md">
          <div className="absolute -bottom-4 -left-4 z-0 h-40 w-40 rounded-lg bg-purple-700" />
          <img
            src={props.backgroundImageUrl}
            alt="hero"
            className="relative z-10 aspect-square h-full w-full min-w-28 rounded-lg object-cover object-center"
            loading="lazy"
          />
          <div className="absolute -right-4 -top-4 z-0 h-40 w-40 rounded-lg bg-purple-700" />
        </div>
      </div>
    </section>
  );
}
