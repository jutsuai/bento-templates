export default function Partners({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-gray-800"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex flex-col items-center justify-center gap-8 px-8 py-20"
      >
        <h2 className="text-center text-2xl font-semibold text-black md:text-4xl dark:text-white">
          {props?.headerText}
        </h2>
        <div className="grid w-full grid-cols-2 items-center gap-10 sm:grid-cols-[repeat(auto-fit,_minmax(120px,1fr))]">
          {props?.logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logos"
              className="aspect-square w-full rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
