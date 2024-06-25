import React from "react";

export default function Numbers({ props, style, id }) {
  const {
    data = [
      { numberText: 100, categoryText: "PROJECTS" },
      { numberText: 24, categoryText: "AWARDS" },
      { numberText: 70, categoryText: "CLIENTS" },
      { numberText: 10, categoryText: "EXPERIENCE" },
    ],
  } = props;
  return (
    <section
      style={{
        padding: `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
          style?.paddingBottom || 0
        }px ${style?.paddingLeft || 0}px`,
        margin: `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
          style?.marginBottom || 0
        }px ${style?.marginLeft || 0}px`,
      }}
      className="bg-white dark:bg-[#121212] "
    >
      <div className="container mx-auto px-4">
        <div className="bg-[#412dff] grid grid-cols-2 md:grid-cols-4 rounded-xl relative lg:rounded-tr-none">
          <img
            src="https://ipfs.near.social/ipfs/bafkreiest2ftnmktmisw64zkin2zcctdsjf7lxxlaiqgqajonjmyocaftm"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 py-14"
            >
              <h3 className="text-5xl font-bold text-white text-center">
                {item.numberText}+
              </h3>
              <p className="text-sm text-white text-center">
                {item.categoryText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
