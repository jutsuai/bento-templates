import { useNode } from "@craftjs/core";

export default function Footer({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <footer
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
        className="container mx-auto flex flex-col items-center justify-center gap-10 px-8 py-20"
      >
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] place-items-center gap-8 text-center text-sm text-gray-700 dark:text-gray-300 @sm:text-left">
          <div className="flex flex-col gap-4">
            {props?.legal?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-700 dark:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {props?.service?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-700 dark:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {props?.information?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-700 dark:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="-mb-10 flex flex-col items-center justify-center opacity-80">
          <svg
            className="max-w-52 h-fit dark:fill-white fill-black"
            width="517"
            height="173"
            viewBox="0 0 517 173"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M130.516 35.8742V99.9947C130.516 111.885 137.028 118.891 148.564 118.891C160.1 118.891 166.54 111.885 166.54 99.9947V35.8742H192.514V102.755C192.514 125.685 175.104 140.76 148.564 140.76C122.024 140.76 104.543 125.685 104.543 102.755V35.8742H130.516ZM266.472 138H240.569V56.7523H211.127V35.8742H295.984V56.7523H266.472V138ZM310.068 108.912H334.839C335.476 116.343 342.907 121.085 353.665 121.085C363.361 121.085 370.013 116.414 370.013 109.691C370.013 104.029 365.555 100.986 353.877 98.6501L340.43 95.9607C321.746 92.422 312.121 82.2307 312.121 66.1651C312.121 46.2071 328.115 33.114 352.745 33.114C376.666 33.114 393.227 46.0655 393.652 64.962H369.659C369.093 57.7431 362.228 52.7182 353.098 52.7182C343.969 52.7182 337.953 57.0354 337.953 63.8296C337.953 69.4207 342.482 72.6763 353.24 74.7995L366.404 77.3473C386.574 81.2398 395.633 90.3696 395.633 106.577C395.633 127.879 379.355 140.76 352.603 140.76C326.771 140.76 310.493 128.587 310.068 108.912ZM441.353 35.8742V99.9947C441.353 111.885 447.864 118.891 459.4 118.891C470.936 118.891 477.376 111.885 477.376 99.9947V35.8742H503.35V102.755C503.35 125.685 485.94 140.76 459.4 140.76C432.86 140.76 415.379 125.685 415.379 102.755V35.8742H441.353Z" />
            <path d="M0 57.627V35.8418H83.0678V99.303C83.0678 122.984 63.7154 140.842 41.2971 140.842C17.7083 140.842 0 121.148 0 99.303V83.3903H21.7852V99.303C21.7852 111.003 31.588 119.054 41.2971 119.054C52.4085 119.054 61.2827 110.326 61.2827 99.303V57.627H0Z" />
            <circle cx="10.8919" cy="70.6034" r="7.2933" fill="#FFD37C" />
          </svg>
          <div className="mt-2 flex items-center gap-4 text-black dark:text-white">
            <i className="fa-brands fa-linkedin text-xl"></i>
            <i className="fa-brands fa-square-facebook text-xl"></i>
            <i className="fa-brands fa-github text-xl"></i>
            <i className="fa-brands fa-x-twitter text-xl"></i>
            <i className="fa-brands fa-youtube text-xl"></i>
          </div>
        </div>
      </div>
      <div className="border-t py-3 text-center dark:border-slate-800">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {props?.copyRight}
        </p>
      </div>
    </footer>
  );
}
