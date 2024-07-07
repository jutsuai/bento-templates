import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const AboutWrapper = styled.section`
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

const AboutHeader = styled.h1`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }

  font-weight: 500;
  font-size: 2.2rem;
`;

const AboutSubHeader = styled.p`
  color: #000000cc;
  &:not(.light *) {
    color: #ffffffcc;
  }
  font-weight: 300;
  line-height: 1.8;
  font-size: 0.875rem;

  @container (min-width: ${bp.sm}) {
    font-size: 1.1rem;
  }
`;

export default function ProtAbout({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <AboutWrapper style={style} id={id} ref={(ref) => connect(drag(ref))}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          maxWidth: bp.md,
          margin: "0 auto",
          textAlign: "center",
          padding: "0rem 1rem",
          paddingBottom: "4rem",
        }}
      >
        <AboutHeader>{props?.headerText}</AboutHeader>
        <AboutSubHeader>{props?.subHeaderTextarea}</AboutSubHeader>
      </div>
    </AboutWrapper>
  );
}
