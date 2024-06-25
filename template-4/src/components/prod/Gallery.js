import React from "react";

export default function Gallery({ props, style, id }) {
  const {
    subHeaderText = "PROTFOLIO",
    headerText = "Our Projects",
    descriptionTextarea = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    galleryData = [
      {
        imageSrc:
          "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
        headerText: "Web Design",
        subHeaderTextarea:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
      {
        imageSrc:
          "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
        headerText: "SEO Optimization",
        subHeaderTextarea:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
      {
        imageSrc:
          "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm",
        headerText: "Marketing",
        subHeaderTextarea:
          "Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a semper elit mollis accumsan.",
      },
    ],
  } = props;
  return (
    <section className="bg-white dark:bg-[#121212] min-h-[300px] max-h-full">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center gap-8 w-full h-full">
        <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto gap-6">
          <h6 className="text-sm text-[#4fe173] font-medium">
            {subHeaderText}
          </h6>
          <h2 className="text-4xl font-semibold text-black dark:text-white max-w-2xl">
            {headerText}
          </h2>
          <p className="text-sm text-black/70 dark:text-white/70 max-w-2xl">
            {descriptionTextarea}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 place-items-center w-full">
          {galleryData?.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5"
            >
              <img
                src={item?.imageSrc}
                alt=""
                className="aspect-video object-cover object-center w-full h-4/6 border border-b-0 border-black/10 dark:border-white/10"
              />
              <div className="flex flex-col gap-4 p-6 pb-8">
                <h4 className="text-lg dark:text-white font-medium">
                  {item?.headerText}
                </h4>
                <p className="text-black/60 dark:text-white/60 text-base">
                  {item?.subHeaderTextarea}
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-black/80 dark:fill-white/80 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                  </svg>
                  <p className="text-black dark:text-white text-xs">SEE MORE</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
