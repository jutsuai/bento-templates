import React from "react";

export default function About({ props, style, id }) {
  const {
    headerText = "Who is Adnan Siddiqui?",
    subHeaderText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    labelText = "ABOUT US",
    buttonText = "KNOW MORE",
    projects = [
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
      {
        image:
          "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
        headerText: "DAPP",
        subHeaderText:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
    ],
  } = props;
  return (
    <section className="bg-white dark:bg-[#121212] max-h-screen">
      <div className="container mx-auto px-4 flex items-start justify-between gap-12 py-20 max-h-screen">
        <div className="flex-1 relative w-full h-full">
          <img
            src="https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi"
            alt=""
            className="object-cover object-center w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-start items-start">
          <h6 className="text-sm text-[#4fe173] font-medium">{labelText}</h6>
          <h2 className="text-4xl font-semibold text-black dark:text-white max-w-2xl">
            {headerText}
          </h2>
          <p className="text-sm text-black/70 dark:text-white/70 max-w-2xl">
            {subHeaderText}
          </p>
          <div className="grid grid-cols-2 gap-8 py-8">
            {projects.map((project, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src={project.image}
                  alt={project.headerText}
                  className="object-cover object-center max-w-20 max-h-20 p-2 bg-black/5 dark:bg-white/5 rounded-lg"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-black dark:text-white text-lg">
                    {project.headerText}
                  </h3>
                  <p className="text-black/70 dark:text-white/70 text-xs">
                    {project.subHeaderText}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            style={{
              borderColor: style?.accent,
              backgroundColor: style?.accent,
            }}
            className="text-nowrap rounded-md border-[#412dff] bg-[#412dff] px-8 py-4 text-sm font-medium text-white flex items-center gap-2"
          >
            {buttonText} <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
