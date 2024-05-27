export default function Gallery({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white overflow-hidden dark:bg-[#080a11]"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex flex-col items-center relative justify-center gap-20 px-8 py-20 text-center lg:flex-row"
      >
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl text-black dark:text-white xl:text-5xl font-bold mb-6">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 lg:text-lg">
            {props?.subHeaderText}
          </p>
        </div>

        <img
          src={props?.galleryImages[0]}
          alt=""
          width={600}
          height={400}
          className="block aspect-[16/9] w-[100%] rounded-xl bg-gray-50 object-cover sm:hidden"
        />
        <div className="hidden flex-wrap items-start justify-end gap-6 sm:flex sm:gap-8 lg:contents">
          <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
              <img
                src={props?.galleryImages[0]}
                alt=""
                width={600}
                height={500}
                className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <img
                src={props?.galleryImages[1]}
                alt=""
                width={600}
                height={500}
                className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
              <img
                src={props?.galleryImages[2]}
                alt=""
                width={600}
                height={500}
                className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
