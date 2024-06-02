export default function News({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-gray-950"
    >
      <div className="p-4 md:px-12 py-24 grid grid-cols-1 lg:gap-0 gap-14 lg:grid-cols-2">
        <div className="flex flex-col md:gap-14 gap-10">
          <h2 className="text-4xl text-black dark:text-white md:text-5xl leading-snug max-w-md">
            {props?.headerText}
          </h2>
          <button className="text-black dark:text-white border-2 rounded-full py-3 px-6 w-fit h-fit flex items-center justify-center gap-3 font-semibold">
            {props?.buttonText}
            <div
              style={{ color: style?.accent }}
              className="h-6 w-6 bg-gray-800 text-[#b9ff81] rounded-full flex items-center justify-center"
            >
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-12">
          {props?.news?.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-6 grid-cols-1 gap-4 md:gap-0"
            >
              <h3 className="text-4xl md:text-6xl col-span-1 text-black dark:text-white ">
                {index < 9 ? `0${index + 1}` : index + 1}
              </h3>
              <div className="col-span-5 flex flex-col gap-10 md:gap-14 border-b-2 pb-4">
                <h4 className="text-base font-medium text-black dark:text-white">
                  {item?.article}
                </h4>
                <div className="flex flex-col gap-1">
                  <h6 className="text-sm font-normal text-black dark:text-white">
                    {item?.metadata?.title}
                  </h6>
                  <p className="text-xs text-black/70 dark:text-white/70">
                    {item?.metadata?.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
