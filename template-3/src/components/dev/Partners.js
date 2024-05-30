import { useNode } from "@craftjs/core";

export default function Partners({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  const logos = [
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/spikeball-color.svg",
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/shapeshift-color.svg",
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/goody-color.svg",
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/codecademy-color.svg",
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/facepunch-color.svg",
  ];

  return (
    <section
      ref={(ref) => connect(drag(ref))}
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-[#080a11]"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="py-20 pb-28 mx-auto px-4 flex flex-col items-center justify-center gap-20 container"
      >
        <div className="grid grid-cols-2 gap-10 @sm:grid-cols-[repeat(auto-fit,_minmax(140px,1fr))] place-items-center @xl:px-0 px-8 items-center w-full">
          {(logos || props?.logos)?.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logos"
              className="backface-hidden grayscale pointer-events-none transform-gpu select-none !rounded-none dark:brightness-[0.35] dark:grayscale dark:invert dark:saturate-[0.15] dark:sepia-[0.01]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
