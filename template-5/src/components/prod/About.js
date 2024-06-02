export default function About({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-gray-950"
    >
      <div className="flex flex-col p-4 md:px-12 gap-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h2 className="text-xl md:text-4xl dark:text-white text-black leading-snug col-span-1">
            {props?.headerText}
          </h2>
        </div>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="col-start-2 col-span-1">
            {props?.moreInfo?.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-6 py-14 border-t"
              >
                <h3 className="col-span-2 text-lg font-medium md:text-2xl md:w-min dark:text-white text-black">
                  {item?.title}
                </h3>
                <p className="col-span-4 text-sm md:text-lg dark:text-white/80 text-black/80">
                  {item?.description}
                </p>
              </div>
            ))}
            <button className="border-2 rounded-full text-black dark:text-white py-3 px-6 w-fit h-fit flex items-center justify-center gap-3 font-semibold">
              {props?.buttonText}
              <div
                style={{ color: style?.accent }}
                className="h-6 w-6 bg-gray-800 text-[#b9ff81]  rounded-full flex items-center justify-center"
              >
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
