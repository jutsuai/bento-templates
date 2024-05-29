export default function Gallery({ props, style, id }) {
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
        className="container mx-auto flex flex-col items-center relative justify-center gap-20 px-4 py-20 text-center @lg:flex-row"
      >
        <div className="w-full @lg:w-1/2">
          <h2 className="text-3xl text-black dark:text-white @xl:text-4xl font-semibold mb-6">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 @lg:text-base">
            {props?.subHeaderText}
          </p>
        </div>
        <div className="grid grid-cols-2 @md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {props?.galleryImages?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="gallery"
              className="aspect-square object-cover object-center rounded-md shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
