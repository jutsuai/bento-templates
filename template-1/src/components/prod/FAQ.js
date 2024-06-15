import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const FAQWrapper = styled.section`
  background-color: white;
  &:not(.light *) {
    background-color: #080a11;
  }
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};
`;

export default function FAQ({ props, style, id }) {
  return (
    <FAQWrapper id={id} style={style}>
      <div
        style={{ flexDirection: style?.flexDirection }}
        className="container mx-auto flex flex-col items-center justify-center gap-8 px-8 py-20"
      >
        <h2 className="text-3xl font-semibold text-black dark:text-white md:text-4xl">
          {props?.headerText}
        </h2>
        <p className="text-center text-sm text-gray-700 dark:text-gray-300 md:text-base">
          {props?.subHeaderTextarea}
        </p>
        <div className="my-8 flex flex-col items-start justify-center gap-6">
          {props?.qna?.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold leading-relaxed text-black dark:text-white md:text-base ">
                {item.question}
              </h3>
              <p className="text-xs font-medium leading-relaxed text-black dark:text-gray-300 md:text-sm md:font-normal">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FAQWrapper>
  );
}
