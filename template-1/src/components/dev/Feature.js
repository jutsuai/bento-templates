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
      <div
        style={{ flexDirection: style?.flexDirection }}
        className={`container mx-auto flex flex-col items-center gap-10 px-8 py-20 ${
          props?.isReverse ? "@lg:flex-row-reverse" : "@lg:flex-row"
        }`}
      >
        <img
          src={props?.imageSrc}
          alt="features"
          className="aspect-video rounded-lg object-cover object-center @lg:w-1/2"
          loading="lazy"
        />
        <div className="flex flex-col gap-4 @lg:w-1/2 @lg:gap-8 @lg:p-14">
          <p className="-mb-4 text-sm text-gray-700 dark:text-gray-300 @lg:text-base">
            {props?.subHeaderText}
          </p>
          <h2 className="text-3xl font-bold text-black dark:text-white @md:text-4xl">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-200 @lg:text-base">
            {props?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
