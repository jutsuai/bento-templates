export default function CTA({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-slate-800"
    >
      <div className="container mx-auto px-8 py-20">
        <div
          style={{
            flexDirection: style?.flexDirection,
            backgroundColor: style?.accent + 12,
          }}
          className="gap-6 dark:bg-slate-800 max-w-10/12 rounded-3xl border dark:border-slate-800 mx-auto flex flex-col items-center text-center justify-center p-10 md:p-20"
        >
          <h2 className="text-3xl text-black dark:text-white md:text-5xl font-semibold">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 md:text-base">
            {props?.subHeaderText}
          </p>
          <div className="flex flex-col w-full sm:w-10/12 md:w-1/2 items-center justify-end gap-4">
            <button
              style={{
                backgroundColor: style?.accent,
                borderColor: style?.accent,
              }}
              className="border w-full border-teal-600 text-white rounded-xl bg-teal-600 px-10 text-sm font-medium py-3"
            >
              {props?.primaryButtonText}
            </button>
            <button
              style={{
                color: style?.accent,
                borderColor: style?.accent,
              }}
              className="border w-full bg-transparent border-teal-600 px-10 rounded-xl text-teal-600 text-sm font-medium py-3"
            >
              {props?.secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
