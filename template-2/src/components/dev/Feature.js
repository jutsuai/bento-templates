import { useNode } from "@craftjs/core";

export default function Feature({ props, style, id }) {
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
      className="bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto flex items-center justify-center px-8 py-20">
        <div
          style={{
            flexDirection: style?.flexDirection,
            backgroundColor: style?.accent + 12,
          }}
          className={`flex aspect-auto h-full @xl:min-h-96 flex-col-reverse items-center justify-between gap-8 min-h-80 overflow-hidden rounded-3xl @md:w-full @xl:aspect-[16/5] ${
            props?.isReverse ? "@lg:flex-row-reverse" : "@lg:flex-row"
          }`}
        >
          <div className="@xl:p-15 flex w-full flex-col gap-4 px-10 pb-10 @md:gap-8 @lg:w-1/2 @lg:p-10">
            <p className="-mb-4 text-sm text-gray-700 dark:text-gray-300 @xl:text-base">
              {props?.subHeaderText}
            </p>
            <h2 className="text-2xl font-bold text-black dark:text-white @xl:text-4xl">
              {props?.headerText}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 @xl:text-base">
              {props?.description}
            </p>
          </div>
          <img
            src={props?.imageSrc}
            alt="features"
            className="aspect-video w-full object-cover object-center @lg:aspect-square @lg:w-1/2"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
