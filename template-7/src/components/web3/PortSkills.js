const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const SkillsWrapper = styled.div`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};
  background-color: #f9fafb;
  &:not(.light *) {
    background-color: #111827;
  }
`;

const SkillsHeader = styled.h1`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }

  font-weight: 500;
  font-size: 2.2rem;
`;

const SkillsContent = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #29303d20;
  padding: 0.7rem 1.2rem;
  &:not(.light *) {
    background-color: #29303d;
  }
`;

const SkillItem = styled.p`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
  font-weight: 400;
  font-size: 1.2rem;
  opacity: 0.8;
`;


  return (
    <SkillsWrapper style={style} id={id}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          maxWidth: bp.lg,
          margin: "0 auto",
          padding: "4rem 1rem",
        }}
      >
        <SkillsHeader>{props?.headerText}</SkillsHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {props?.catagories &&
            props?.catagories?.map((item, index) => (
              <SkillsContent key={index}>
                <SkillItem>{item?.name || item}</SkillItem>
              </SkillsContent>
            ))}
        </div>
      </div>
    </SkillsWrapper>
  );

