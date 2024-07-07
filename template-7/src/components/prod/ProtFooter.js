import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const FooterWrapper = styled.section`
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

  color: #00000080;
  &:not(.light *) {
    color: #ffffff80;
  }
`;
export default function ProtFooter({ props, style, id }) {
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
          padding: "2rem 1rem",
          paddingTop: "4rem",
        }}
      >
        {props?.contentText}
      </div>
    </FooterWrapper>
  );
}
