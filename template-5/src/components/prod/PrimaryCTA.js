export default function PrimaryCTA({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,

        backgroundImage:
          "url(https://ipfs.near.social/ipfs/bafkreicgf3ripaiuwas5basym4m5wkcvtvg2lhoawcbbji6e3smkkcuwkq)",
        backgroundPosition: "right 20% top 0px",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-[#28282c] h-dvh max-h-full py-24"
    >
      <div className="p-4 md:px-12 flex flex-col justify-center h-full gap-14">
        <h2 className="text-6xl md:text-9xl leading-none max-w-3xl text-white break-words">
          {props?.headerText}
        </h2>
        <h6 className="text-sm md:text-base text-white/70 max-w-md lg:text-lg">
          {props?.subHeaderText}
        </h6>
        <button
          style={{ backgroundColor: style?.accent }}
          className="bg-[#b9ff81] rounded-full py-3 px-6 w-fit h-fit flex items-center justify-center gap-3 font-semibold"
        >
          {props?.buttonText}
          <div
            style={{ color: style?.accent }}
            className="h-6 w-6 bg-gray-800 text-[#b9ff81]  rounded-full flex items-center justify-center"
          >
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </div>
        </button>
      </div>
    </section>
  );
}
