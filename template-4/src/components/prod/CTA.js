import React from "react";

export default function CTA({ props, style, id }) {
  const {
    headerText = "Discover How Design Can Help Your Business",
    buttonText = "LETS TALK",
  } = props;
  return (
    <section className="bg-white dark:bg-[#121212] min-h-[400px] max-h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="relative bg-[#412dff] p-10 sm:p-24 flex flex-col items-center justify-center gap-8 sm:gap-12 text-center w-full  rounded-xl mx-auto">
          <h1 className="text-3xl sm:text-6xl font-semibold text-white leading-normal">
            {headerText}
          </h1>
          <button className="z-20 border-none text-[#412dff] flex gap-2 items-center bg-white py-4 px-8 font-medium rounded-lg">
            {buttonText}
            <svg
              className="w-5 h-5 fill-[#412dff]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
          <svg
            className="absolute z-0 w-full h-full"
            width="1162"
            height="205"
            viewBox="0 0 1162 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.15">
              <path
                d="M1 70.1793C46.9404 105.123 185.326 158.433 371.346 92.1293C603.872 9.24921 638.519 -10.8085 740.538 6.97852C842.556 24.7656 1056.22 153.816 1159.39 107.267"
                stroke="white"
              />
              <path
                d="M1.80444 110.325C47.7448 145.268 186.131 198.579 372.151 132.275C604.676 49.3947 639.324 29.337 741.342 47.124C843.361 64.9111 1057.02 193.962 1160.2 147.413"
                stroke="white"
              />
              <path
                d="M2.60889 150.47C48.5493 185.414 186.935 238.724 372.955 172.42C605.48 89.5402 640.128 69.4825 742.147 87.2695C844.165 105.057 1057.83 234.107 1161 187.558"
                stroke="white"
              />
            </g>
          </svg>
          <svg
            style={{
              position: "absolute",
              bottom: "10%",
              left: "20%",
            }}
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
            style={{
              position: "absolute",
              top: "10%",
              right: "20%",
            }}
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
        </div>
      </div>
    </section>
  );
}
