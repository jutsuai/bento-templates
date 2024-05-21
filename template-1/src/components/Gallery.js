export default function Gallery({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-gray-950"
    >
      <div
        style={{ flexDirection: style.flexDirection }}
        className="container mx-auto flex flex-col items-center justify-center gap-6 px-8 py-20 text-center"
      >
        <div>
          <h2 className="mb-4 text-2xl lg:text-4xl font-semibold text-black dark:text-white">
            {props.headerText}
          </h2>
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
            {props.subHeaderText}
          </p>
        </div>
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(120px,1fr))] items-center gap-10">
          {props.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="bike"
              className="w-full rounded-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
