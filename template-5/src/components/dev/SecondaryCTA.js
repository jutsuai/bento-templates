import { useNode } from "@craftjs/core";

export default function SecondaryCTA({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <section
      ref={(ref) => connect(drag(ref))}
      id={id}
      style={{
        backgroundColor: style?.accent,
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="h-dvh max-h-full w-full bg-[#b9ff81]"
    >
      <div className="relative grid grid-cols-1 @md:grid-cols-2 p-4 @md:px-12 gap-20 h-full">
        <div className="absolute opacity-80 @md:opacity-100 @md:relative grid col-span-1 grid-cols-[repeat(10,_minmax(10%,_1fr))] grid-rows-[repeat(10,_minmax(10%,_1fr))] h-full w-full place-items-center">
          {[...new Array(100)].map((_, index) => (
            <div key={index} className="text-xs">
              +
            </div>
          ))}
        </div>
        <div className="@md:col-start-2 z-20 col-span-1 flex items-center justify-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl @sm:text-5xl @lg:text-7xl leading-none max-w-xl">
              {props?.headerText}
            </h2>
            <p className="text-sm @sm:text-base @lg:text-lg max-w-lg">
              {props?.subHeaderText}
            </p>
            <button className="bg-[#28282c] text-white rounded-full py-3 px-6 w-fit h-fit flex items-center justify-center gap-4 font-medium">
              {props?.primaryButtonText}
              <div
                style={{ backgroundColor: style?.accent }}
                className="h-8 w-8 bg-[#b9ff81] text-[#28282c]  rounded-full flex items-center justify-center"
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
