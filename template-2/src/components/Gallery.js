import { useNode } from "@craftjs/core";

export default function Gallery({ props, style, id }) {
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
        className="container mx-auto flex flex-col items-center justify-center gap-20 px-8 py-20 text-center @lg:flex-row"
      >
        <div className="w-full @lg:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-black @xl:text-5xl dark:text-white">
            {props.headerText}
          </h2>
          <p className="text-sm text-gray-700 @lg:text-lg dark:text-gray-300">
            {props.subHeaderText}
          </p>
        </div>
        <div className="grid w-full grid-cols-[repeat(auto-fill,_minmax(250px,1fr))] items-center gap-6 @lg:w-1/2 @lg:grid-cols-2">
          {props.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="bike"
              className="aspect-video w-full rounded-md object-cover object-center"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
