const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const FooterWrapper = styled.div`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};
  background-color: #fff;
  &:not(.light *) {
    background-color: #09050f;
  }

  color: #00000080;
  &:not(.light *) {
    color: #ffffff80;
  }
`;

  return (
    <FooterWrapper style={style} id={id}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: bp.md,
          fontWeight: 300,
          fontSize: "0.875rem",
          margin: "0 auto",
          paddingBottom: "2rem",
          color: "inherit",
          padding: "4rem 1rem",
        }}
      >
        {props?.contentText}
      </div>
    </FooterWrapper>
  );

