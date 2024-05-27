export default function CTA({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-[#080a11]"
    >
      <div className="container mx-auto px-4 py-20">
        <div
          style={{
            flexDirection: style?.flexDirection,
            // backgroundColor: style?.accent + 11,
          }}
          className="gap-6 dark:bg-[#14161d] max-w-6xl rounded-sm border bg-[#14161d12] dark:border-[#14161d] mx-auto flex flex-col items-center text-center justify-center h-full p-10 md:p-24"
        >
          <h2 className="text-3xl text-black dark:text-white md:text-4xl font-semibold">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 md:text-base">
            {props?.subHeaderText}
          </p>
          <div className="flex w-full h-12 max-w-md items-center ">
            <input
              placeholder={props?.placeholder}
              className="border rounded-sm placeholder:text-sm sm:placeholder:text-base flex-grow w-full bg-transparent placeholder:text-gray-500 h-full min-h-12 outline-none border-gray-600 px-4"
            />
            <button
              style={{
                backgroundColor: style?.accent,
                borderColor: style?.accent,
              }}
              className="border w-full flex-shrink h-full max-w-40 border-[#b9ff81] text-black rounded-sm bg-[#b9ff81] px-1 text-xs sm:text-sm font-semibold py-2"
            >
              {props?.buttonText} <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
