import React from "react";

export default function About({ props, style, id }) {
  const {
    headerText = "Who is Adnan Siddiqui?",
    descriptionTextarea = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    subHeaderText = "ABOUT US",
    buttonText = "KNOW MORE",
    imageSrc = "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
    projects = [
      {
        imageSrc:
          "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
        headerText: "Web Design",
        subHeaderTextarea:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
      {
        imageSrc:
          "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
        headerText: "SEO Optimization",
        subHeaderTextarea:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
      {
        imageSrc:
          "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
        headerText: "Marketing",
        subHeaderTextarea:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
      {
        imageSrc:
          "https://ipfs.near.social/ipfs/bafkreiabqdbtejrwgrb3x3rmyv4xqv6xxkdpo64zcrxourox4lc3op7rt4",
        headerText: "DAPP",
        subHeaderTextarea:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
    ],
  } = props;
  return (
    <section className="bg-white dark:bg-[#121212] min-h-[400px]">
      <div className="container mx-auto px-4 flex items-start justify-between gap-12 py-20 h-full w-full">
        <div className="flex-1 relative w-full h-full hidden lg:flex">
          <div className="bg-[#412dff] w-full h-full max-w-[600px] aspect-square rounded-full mx-auto" />
          <div className="absolute top-[8%] h-full left-0 w-full">
            <div className="bg-gradient-to-r from-[#847dc9]  to-white flex p-4 pr-6 gap-4 rounded-2xl w-fit absolute top-1/3 border border-gray-400">
              <img
                src="https://ipfs.near.social/ipfs/bafkreiasl4rqon4ol4ue2u3qwmagkplt3o2rc3dbxoy236tebwtk7ofzam"
                alt="tick"
              />
              <div className="flex flex-col justify-center gap-1">
                <h6 className="font-semibold text-base">99%</h6>
                <p className="text-sm">Satisfied User</p>
              </div>
            </div>
            <div className="bg-gradient-to-l from-gray-700 to-white flex p-4 pr-6 gap-4 rounded-2xl w-fit absolute bottom-[15%] right-0 border border-gray-400">
              <img
                src="https://ipfs.near.social/ipfs/bafkreifzbt23gmod3nuyd2xg2ce6ej3lce6gt32pyowlphwomvrlznp744"
                alt="work"
              />
              <div className="flex flex-col justify-center gap-1">
                <h6 className="font-semibold text-base">99%</h6>
                <p className="text-sm">Satisfied User</p>
              </div>
            </div>
            <img
              src={imageSrc}
              alt=""
              className="object-cover object-center w-full max-w-[500px] h-full mx-auto rounded-sm"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-start items-start">
          <h6 className="text-sm text-[#4fe173] font-medium">
            {subHeaderText}
          </h6>
          <h2 className="text-4xl font-semibold text-black dark:text-white max-w-2xl">
            {headerText}
          </h2>
          <p className="text-sm text-black/70 dark:text-white/70 max-w-2xl">
            {descriptionTextarea}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
            {projects.map((project, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src={project.imageSrc}
                  alt={project.headerText}
                  className="object-cover object-center max-w-20 max-h-20 p-2 aspect-square bg-black/5 dark:bg-white/5 rounded-lg"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-black dark:text-white text-lg">
                    {project.headerText}
                  </h3>
                  <p className="text-black/70 dark:text-white/70 text-xs">
                    {project.subHeaderTextarea}
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
