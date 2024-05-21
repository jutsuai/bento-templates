export default function Footer({ props, style, id }) {
  return (
    <footer
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-slate-950"
    >
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex flex-col items-center justify-center gap-10 px-8 py-20"
      >
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] place-items-center gap-8 text-center text-sm text-gray-700 dark:text-gray-300 sm:text-left">
          <div className="flex flex-col gap-4">
            {props.legal.map((item, index) => (
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
            {props.service.map((item, index) => (
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
            {props.information.map((item, index) => (
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
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20Black.png"
            alt=""
            className="inline-block max-w-44 dark:hidden"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/Jutsu%20White.png"
            alt=""
            className="hidden max-w-40 dark:inline-block"
          />
          <div className="mt-2 flex items-center gap-4 text-black dark:text-white">
            <i className="fa-brands fa-linkedin text-xl"></i>
            <i className="fa-brands fa-square-facebook text-xl"></i>
            <i className="fa-brands fa-github text-xl"></i>
            <i className="fa-brands fa-x-twitter text-xl"></i>
            <i className="fa-brands fa-youtube text-xl"></i>
          </div>
        </div>
      </div>
      <div className="border-t py-3 text-center dark:border-slate-900">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy;{props.copyRight}
        </p>
      </div>
    </footer>
  );
}
