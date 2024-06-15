export default function HeroSection({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-[#121212] h-[calc(100dvh-84px)] relative"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex flex-row items-center h-full w-full justify-center lg:justify-between gap-16 px-4 z-20"
      >
        <div className="z-10 flex flex-1 flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
          <h1 className="text-4xl max-w-xl leading-normal font-bold text-black lg:text-5xl xl:text-6xl dark:text-white">
            {props?.headerText}
          </h1>
          <p className="text-base max-w-xl text-gray-600 lg:text-lg dark:text-gray-300">
            {props?.subHeaderText}
          </p>
          <div className="flex items-center gap-4">
            <button
              style={{
                borderColor: style?.accent,
                backgroundColor: style?.accent,
              }}
              className="text-nowrap rounded-md border-[#412dff] bg-[#412dff] px-10 py-3 text-sm font-medium text-white flex items-center gap-2"
            >
              <i class="fa-regular fa-envelope text-lg"></i>
              {props?.primaryButtonText}
            </button>
            <button className="text-nowrap border-none text-black dark:text-white rounded-md border bg-transparent px-10 py-3 text-sm font-medium flex items-center gap-2">
              <i class="fa-regular fa-file text-lg"></i>
              {props?.secondaryButtonText}
            </button>
          </div>
        </div>

        <div className="w-full h-full overflow-hidden hidden lg:block flex-1 z-10">
          <img
            src={props?.imageSrc}
            alt="hero"
            className="object-cover w-full h-full object-center"
            loading="lazy"
          />
        </div>
      </div>
      <img
        src="https://ipfs.near.social/ipfs/bafkreihg6j6lusj3qwekfnquxdz2tatgofurhsaivviu37ozvnvj7wwjxq"
        alt=""
        className="absolute top-0 left-0 w-full h-full dark:opacity-100 opacity-15"
      />
    </section>
  );
}
