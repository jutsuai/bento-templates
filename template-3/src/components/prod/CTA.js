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
            backgroundImage:
              'url("https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/Picsart_24-05-29_17-06-50-600.png',

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="gap-6 rounded-sm border max-w-7xl dark:border-[#14161d] mx-auto flex flex-col items-center overflow-hidden text-center justify-center h-full p-10 md:p-32"
          // style={{}}
        >
          <h2 className="text-3xl text-white md:text-4xl font-semibold">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-300 md:text-base">
            {props?.subHeaderText}
          </p>
          <div className="flex w-full h-12 max-w-md items-center ">
            <input
              placeholder="Enter your email address"
              className="border rounded-sm placeholder:text-sm sm:placeholder:text-base flex-grow w-full bg-transparent placeholder:text-gray-500 h-full min-h-12 outline-none border-gray-600 px-4"
            />
            <button
              style={{
                backgroundColor: style?.accent,
                borderColor: style?.accent,
              }}
              className="border w-full flex-shrink h-full max-w-40 border-[#b9ff81] text-black rounded-sm bg-[#b9ff81] px-1 text-xs sm:text-sm font-semibold py-2"
            >
              {props?.buttonText}
              <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
