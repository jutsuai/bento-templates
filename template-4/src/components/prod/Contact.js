export default function Contact({ props, style, id }) {
  return (
    <section
      id={id}
      style={{
        padding: `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`,
        margin: `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`,
      }}
      className="bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-8 py-20">
        <div className="mb-8 flex flex-col items-start justify-center gap-4">
          {/* <p className="text-sm text-gray-700 dark:text-gray-300">{opentime}</p> */}
          <h2 className="text-3xl font-semibold text-black dark:text-white md:text-4xl">
            {props?.headerText}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {props?.subHeaderTextarea}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] items-center gap-12 md:gap-16">
          <div className="flex flex-col items-start justify-center gap-4">
            <i
              className={`fa-solid fa-envelope text-3xl text-black dark:text-white`}
            />
            <h3 className="text-xl font-medium text-black dark:text-white">
              Email
            </h3>
            <p className=" text-sm text-gray-700 dark:text-gray-300">
              For any service related queries, please contact our email.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {props?.email}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <i
              className={`fa-solid fa-phone text-3xl text-black dark:text-white`}
            />
            <h3 className="text-xl font-medium text-black dark:text-white">
              Phone
            </h3>
            <p className=" text-sm text-gray-700 dark:text-gray-300">
              For any service related queries, please contact us.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {props?.phone}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <i
              className={`fa-solid fa-location-dot text-3xl text-black dark:text-white`}
            />
            <h3 className="text-xl font-medium text-black dark:text-white">
              Office
            </h3>
            <p className=" text-sm text-gray-700 dark:text-gray-300">
              For any service related queries, please come to our office.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {props?.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
