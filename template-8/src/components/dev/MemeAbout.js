import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const AboutWrapper = styled.nav`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};

  background-color: #000000;
`;

const AboutContent = styled.div`
  margin: 0 auto;
  display: flex;

  padding: 8rem 1rem;
  flex-direction: column;
  @container (min-width: ${bp.lg}) {
    max-width: ${bp.xl};
  }
`;

const AboutHeader = styled.h1`
  color: #ffffff;
  font-family: Sword-Art;

  font-size: 2rem;
  text-align: center;

  @container (min-width: ${bp.lg}) {
    font-size: 4rem;
    text-align: left;
  }
`;

const AboutSubHeader = styled.p`
  color: gray;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  padding: 1rem;
  max-width: ${bp.sm};

  @container (min-width: ${bp.lg}) {
    font-size: 1rem;
  }
`;

export default function MemeAbout({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <AboutWrapper style={style} id={id} ref={(ref) => connect(drag(ref))}>
      <AboutContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AboutHeader>{props?.headerText}</AboutHeader>
          <AboutSubHeader>{props?.subHeaderTextarea}</AboutSubHeader>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              width: "100%",
              gap: "2rem",
              maxWidth: `${bp.lg}`,
              marginTop: "2rem",
            }}
          >
            {props?.cards &&
              props?.cards?.length > 0 &&
              props?.cards?.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: item?.backgroundColor || "white",
                    aspectRatio: "1/1",
                    borderRadius: "1.5rem",
                  }}
                >
                  <img
                    src={item?.imageSrc}
                    alt="placeholder"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",
                      padding: "1rem",
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </AboutContent>
    </AboutWrapper>
  );
}
