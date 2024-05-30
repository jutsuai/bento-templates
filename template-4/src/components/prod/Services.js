import React from "react";

export default function Services({ props, style, id }) {
  const {
    labelText = "SERVICES",
    headerText = "Making Magic Happen for Your Business",
    subHeaderText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    servicesData = [
      {
        image:
          "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
        headerText: "Web Design",
        subHeaderText:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
      {
        image:
          "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
        headerText: "SEO Optimization",
        subHeaderText:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
      {
        image:
          "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
        headerText: "Marketing",
        subHeaderText:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
    ],
  } = props;
  return (
    <section className="bg-white dark:bg-[#121212]">
      <div className="container mx-auto px-4 py-24 flex flex-col gap-6 items-center text-center justify-center">
        <h6 className="text-sm text-[#4fe173] font-medium">{labelText}</h6>
        <h2 className="text-4xl font-semibold text-black dark:text-white">
          {headerText}
        </h2>
        <p className="text-sm text-black/70 dark:text-white/70 max-w-lg text-center">
          {subHeaderText}
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-4 w-full">
          {servicesData.map((service, index) => (
            // <div >
            <div
              key={index}
              className="flex flex-col gap-6 items-center justify-center bg-black/5 dark:bg-white/5 p-14 rounded-2xl text-center border-2 border-transparent hover:border-[#4fe173] transition-all duration-200 ease-in-out"
            >
              <img
                src={service.image}
                alt={service.headerText}
                className="object-cover object-center w-24 h-24 rounded-lg "
              />
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {service.headerText}
              </h3>
              <p className="text-base text-black/70 dark:text-white/70 text-center">
                {service.subHeaderText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
