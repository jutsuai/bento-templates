import { useNode } from "@craftjs/core";

export default function Article({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <section
      ref={(ref) => connect(drag(ref))}
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,

        backgroundImage: `url(${props.backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 md:px-12 h-dvh grid grid-cols-1 lg:grid-cols-2 ">
        <div className="lg:col-start-2 lg:col-span-1 flex items-center justify-center py-16 md:p-16 xl:p-24">
          <div
            style={{ backgroundColor: style?.accent }}
            className="flex flex-col gap-8 bg-[#b9ff81] h-full w-full p-8 rounded-md drop-shadow-md max-w-xl max-h-"
          >
            <h4 className="text-lg md:text-2xl font-medium ">
              {props?.headerText}
            </h4>
            <p className="md:tet-base text-sm">{props?.subHeaderText}</p>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex flex-col justify-center">
                <h6 className="text-sm md:text-base font-medium">
                  {props?.metadata?.title}
                </h6>
                <p className="text-black/70 text-xs md:text-sm">
                  {props?.metadata?.date}
                </p>
              </div>
              <div
                style={{ color: style?.accent }}
                className="h-10 w-10 bg-gray-800 text-[#b9ff81]  rounded-full flex items-center justify-center"
              >
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
