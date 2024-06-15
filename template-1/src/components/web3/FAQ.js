const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const FAQWrapper = styled.div`
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

const FAQHeader = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: black;

  &:not(.light *) {
    color: white;
  }

  @media (min-width: ${bp.md}) {
    font-size: 2.25rem;
  }
`;

const FAQSubHeader = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #4b5563;

  &:not(.light *) {
    color: #d1d5db;
  }

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }
`;

const FAQquestion = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.625;
  color: black;

  &:not(.light *) {
    color: white;
  }

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
  }
`;

const FAQanswer = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.625;
  color: black;

  &:not(.light *) {
    color: #d1d5db;
  }

  @media (min-width: ${bp.md}) {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

  return (
    <FAQWrapper id={id} style={style}>
      <div
        style={{
          flexDirection: style?.flexDirection || "column",
          maxWidth: "96rem",
          marginInline: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "5rem 1rem",
        }}
      >
        <FAQHeader>{props?.headerText}</FAQHeader>
        <FAQSubHeader>{props?.subHeaderTextarea}</FAQSubHeader>
        <div
          style={{
            marginBlock: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {props?.qna?.map((item, index) => (
            <div key={index}>
              <FAQquestion>{item.question}</FAQquestion>
              <FAQanswer>{item.answer}</FAQanswer>
            </div>
          ))}
        </div>
      </div>
    </FAQWrapper>
  );

