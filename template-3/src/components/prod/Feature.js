export default function Feature({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-[#14161d11] dark:bg-[#14161d]"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className={`container mx-auto flex flex-col items-center gap-10 px-4 py-20 ${
          props?.isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <img
          src={props?.imageSrc}
          alt="features"
          className="aspect-video rounded-lg object-cover object-center lg:w-1/2"
          loading="lazy"
        />
        <div className="flex flex-col gap-4 lg:w-1/2 lg:p-14">
          <p className="text-sm text-gray-700 dark:text-gray-300 lg:text-base font-medium">
            // {props?.subHeaderText}
          </p>
          <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-200 lg:text-base">
            {props?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
