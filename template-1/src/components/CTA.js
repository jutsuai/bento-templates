export default function CTA({ props, style, id }) {
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
        className="container mx-auto flex flex-col items-center justify-center gap-6 px-8 py-20 text-center"
      >
        <h2 className="text-3xl font-semibold text-black dark:text-white md:text-4xl">
          {props?.headerText}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-200 md:text-base">
          {props?.subHeaderText}
        </p>
        <div className="flex items-center justify-end gap-4">
          <button
            style={{
              borderColor: style?.accent,
              backgroundColor: style?.accent,
            }}
            className="rounded-2xl border border-purple-700 bg-purple-700 px-4 py-1 text-sm font-medium text-white"
          >
            {props?.primaryButtonText}
          </button>
          <button
            style={{
              borderColor: style?.accent,
              color: style?.accent,
            }}
            className="rounded-2xl border border-purple-700 bg-transparent px-4 py-1 text-sm font-medium text-purple-700"
          >
            {props?.secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}
