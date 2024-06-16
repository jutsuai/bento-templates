import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const PartnersWrapper = styled.section`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};
  background-color: white;
  &:not(.light *) {
    background-color: #080a11;
  }
`;

const PartnersHeader = styled.h2`
  font-size: 1.875rem;
  max-width: 48rem;
  color: black;
  font-weight: bold;
  text-align: center;

  &:not(.light *) {
    color: white;
  }

  @container (min-width: ${bp.md}) {
    font-size: 2.25rem;
  }
`;

const PartnersLogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  place-items: center;
  align-items: center;
  width: 100%;
  padding-inline: 1rem;

  @container (min-width: ${bp.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;

const PartnersImageBox = styled.div`
  background-color: #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
  aspect-ratio: 1 / 1;

  &:not(.light *) {
    background-color: #1e293b;
  }
`;
export default function Partners({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <PartnersWrapper id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <div
        style={{
          flexDirection: style?.flexDirection || "column",
          padding: "5rem 1rem",
          paddingBottom: "7rem",
          marginInline: "auto",
          maxWidth: "75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <PartnersHeader>{props?.headerText}</PartnersHeader>
        <PartnersLogoContainer>
          {props?.imageSrc?.map(
            (logo, index) =>
              index < 5 && (
                <PartnersImageBox key={index}>
                  <img
                    src={logo}
                    alt="logos"
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      borderRadius: "0.5rem",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </PartnersImageBox>
              )
          )}
        </PartnersLogoContainer>
      </div>
    </PartnersWrapper>
  );
}
