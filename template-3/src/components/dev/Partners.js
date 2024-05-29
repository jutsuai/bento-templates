export default function Partners({ props, style, id }) {
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
        className="py-20 pb-28 mx-auto px-4 flex flex-col items-center justify-center gap-20 container"
      >
        <h2 className="text-3xl @md:text-4xl font-semibold dark:text-white text-black text-center">
          {props?.headerText}
        </h2>
        <div className="grid grid-cols-2 gap-10 @sm:grid-cols-[repeat(auto-fit,_minmax(140px,1fr))] place-items-center @xl:px-0 px-8 items-center w-full">
          {props?.logos?.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logos"
              className="backface-hidden grayscale pointer-events-none transform-gpu select-none !rounded-none dark:brightness-[0.35] dark:grayscale dark:invert dark:saturate-[0.15] dark:sepia-[0.01]"
              // className="aspect-video grayscale rounded-lg object-cover object-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
