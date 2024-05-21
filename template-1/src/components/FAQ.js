export default function FAQ({ props, style, id }) {
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
        <h2 className="text-3xl font-semibold text-black dark:text-white md:text-4xl">
          {props.headerText}
        </h2>
        <p className="text-center text-sm text-gray-700 dark:text-gray-300 md:text-base">
          {props.subHeaderText}
        </p>
        <div className="my-8 flex flex-col items-start justify-center gap-6">
          {props.qna.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold leading-relaxed text-black dark:text-white md:text-base ">
                {item.question}
              </h3>
              <p className="text-xs font-medium leading-relaxed text-black dark:text-gray-300 md:text-sm md:font-normal">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
