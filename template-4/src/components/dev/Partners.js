import { useNode } from "@craftjs/core";

export default function Partners({ props, style, id }) {
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
      }}
      className="bg-white dark:bg-slate-800"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="py-20 pb-28 mx-auto px-8 flex flex-col items-center justify-center gap-20 container"
      >
        <h2 className="text-3xl @md:text-4xl max-w-3xl dark:text-white text-black font-bold text-center">
          {props?.headerText}
        </h2>
        <div className="grid grid-cols-2 gap-6 @sm:grid-cols-[repeat(auto-fit,_minmax(140px,1fr))] place-items-center @xl:px-0 px-8 items-center w-full">
          {props?.logos?.map(
            (logo, index) =>
              index < 5 && (
                <div
                  key={index}
                  className="bg-slate-300 dark:bg-slate-800 p-4 rounded-lg aspect-square"
                >
                  <img
                    src={logo}
                    alt="logos"
                    className="aspect-square rounded-lg object-cover object-center"
                  />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
