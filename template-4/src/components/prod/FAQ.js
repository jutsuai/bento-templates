export default function FAQ({ props, style, id }) {
  return (
    <section id={id} className="bg-white dark:bg-slate-800">
      <div className="container mx-auto px-8 py-20 grid w-full grid-cols-1 gap-10 xl:grid-cols-2">
        <div
          style={{
            padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
            margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
          }}
          className="flex flex-col gap-6 text-center xl:text-left"
        >
          <h2 className="text-3xl text-black dark:text-white font-bold lg:text-4xl">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 lg:text-base">
            {props?.subHeaderText}
          </p>
          <div
            style={{
              backgroundColor: style?.accent,
            }}
            className="hidden aspect-video w-full max-w-96 place-items-center rounded-3xl bg-[#412dff] xl:grid"
          >
            <i className="fa-solid fa-comments text-8xl text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-100 dark:bg-slate-800 p-14">
          {props?.qna?.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm text-black dark:text-white font-semibold leading-relaxed lg:text-base ">
                {item.question}
              </h3>
              <p className="text-xs text-gray-800 dark:text-gray-200 font-medium leading-relaxed lg:text-sm lg:font-normal">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
