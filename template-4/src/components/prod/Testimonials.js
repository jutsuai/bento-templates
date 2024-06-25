import React from "react";

export default function Testimonials({ props, style, id }) {
  const {
    headerText = "TESTIMONIALS",
    descriptionTextarea = `"“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.”"`,
    imageSrc = [
      "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
      "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
      "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
    ],
    userData = {
      imageSrc:
        "https://ipfs.near.social/ipfs/bafkreigerr5ialsoxptjn723r4z6zty75vthnnhovl2txuvjqp3gwlfhoi",
      name: "John Doe",
      designation: "CEO, Company",
    },
  } = props;
  return (
    <section className="bg-white dark:bg-[#121212] min-h-[400px] max-h-full">
      <div className="container mx-auto py-20 flex gap-8 justify-between px-4">
        <div className="flex-1 flex flex-col justify-center gap-8">
          <h6 className="text-[#4fe173] text-sm font-medium">{headerText}</h6>
          <p className="text-black dark:text-white font-medium text-2xl">
            {descriptionTextarea}
          </p>
          <div className="flex items-center gap-2">
            {[...new Array(4)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 fill-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <img
              src={userData?.imageSrc}
              className="w-20 h-20 aspect-square object-cover object-center rounded-full border border-gray-400 dark:border-white/10"
              alt="user"
            />
            <div className="flex flex-col justify-center gap-2">
              <h4 className="text-black dark:text-white font-medium text-lg">
                {userData?.name}
              </h4>
              <p className="text-[#4fe173] text-sm font-normal">
                {userData?.designation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative hidden xl:block">
          <svg
            className="w-full h-full z-0 opacity-20 dark:opacity-100"
            width="625"
            height="313"
            viewBox="0 0 625 313"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M573.284 312.264C573.284 168.495 456.582 51.9473 312.623 51.9473C168.664 51.9473 51.9619 168.495 51.9619 312.264"
              stroke="#363636"
            />
            <path
              d="M624.246 312.264C624.246 140.35 484.728 0.98584 312.623 0.98584C140.519 0.98584 1.00037 140.35 1.00037 312.264"
              stroke="#363636"
            />
            <path
              d="M526.455 311.92C526.455 193.824 430.719 98.0881 312.623 98.0881C194.527 98.0881 98.7914 193.824 98.7914 311.92"
              stroke="#363636"
            />
          </svg>

          <svg
            className="absolute bottom-0 left-[25%]"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.5077 0H36.5084C36.6037 20.12 52.8959 36.4121 73.0159 36.5073V36.5082C52.8957 36.6034 36.6034 52.8957 36.5084 73.0159H36.5077C36.4126 52.8957 20.1202 36.6033 0 36.5082V36.5073C20.1201 36.4122 36.4123 20.12 36.5077 0Z"
              fill="#6FFF93"
            />
          </svg>

          <svg
            className="absolute top-0 right-[30%]"
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.3495 0C19.3999 10.6636 28.0348 19.2984 38.6984 19.3489V19.3493C28.0348 19.3998 19.3999 28.0347 19.3495 38.6984H19.3491C19.2987 28.0347 10.6637 19.3997 0 19.3493V19.3489C10.6636 19.2984 19.2985 10.6636 19.3491 0H19.3495Z"
              fill="white"
            />
          </svg>

          {Array.isArray(imageSrc) ? (
            <>
              <img
                src={imageSrc[0]}
                alt=""
                className="absolute top-[20%] left-[5%] w-40 h-48 object-cover object-center rounded-md"
              />
              <img
                src={imageSrc[1]}
                alt=""
                className="absolute bottom-0 right-[5%] w-52 h-60 object-cover object-center rounded-md"
              />
              <img
                src={imageSrc[2]}
                alt=""
                className="absolute top-[-10%] right-[40%] w-32 h-40 object-cover object-center rounded-md"
              />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
