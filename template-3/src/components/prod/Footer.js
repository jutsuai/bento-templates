const socialIcons = [
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/" },
  { icon: "fa-brands fa-github", href: "" },
  { icon: "fa-brands fa-x-twitter", href: "https://twitter.com/" },
  { icon: "fa-brands fa-youtube", href: "https://www.youtube.com/" },
  { icon: "fa-brands fa-square-facebook", href: "https://www.facebook.com/" },
];
export default function Footer({ props, style, id }) {
  return (
    <footer
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-[#080a11]"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container py-20 gap-10 flex flex-col lg:flex-row items-center justify-between px-8 mx-auto"
      >
        <div className="opacity-80">
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20Black.png"
            alt=""
            className="max-w-36 inline-block dark:hidden"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20White.png"
            alt=""
            className="max-w-36 hidden dark:inline-block"
          />
          <div className="flex text-black dark:text-white items-center gap-4 mt-6">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-2 rounded-full aspect-square w-10 flex items-center justify-center bg-[#14161d12] dark:bg-[#14161d]"
              >
                <i className={`${item.icon} dark:text-white text-black`} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid sm:text-left text-gray-700 dark:text-gray-300 text-center grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] w-full text-sm gap-8">
          <div className="flex flex-col gap-4 px-4">
            {props?.legal?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-black dark:text-white/80"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="h-px w-full bg-gray-300 dark:bg-gray-800 sm:hidden block" />
          <div className="flex flex-col gap-4 px-4">
            {props?.service?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-black dark:text-white/80"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="h-px w-full bg-gray-300 dark:bg-gray-800 sm:hidden block" />
          <div className="flex flex-col gap-4 px-4">
            {props?.information?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-black dark:text-white/80"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-6 border-t dark:border-[#080a11]">
        <p className="text-gray-600 dark:text-gray-300 text-xs">
          {props?.copyRight}
        </p>
      </div>
    </footer>
  );
}
