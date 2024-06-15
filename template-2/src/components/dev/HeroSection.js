import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const HeroSectionWrapper = styled.section`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  background-color: white;

  &:not(.light *) {
    background-color: #080a11;
  }
`;
const HeroSectionContainer = styled.div`
  max-width: 96rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  gap: 5rem;

  @container (min-width: ${bp.sm}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;
const HeroSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 2rem;
`;
const HeroSectionTitle = styled.h1`
  font-size: 2.5rem; // text-4xl
  margin-top: 1.5rem; // mt-6
  color: black;
  font-weight: 800; // font-extrabold

  &:not(.light *) {
    color: white;
  }

  @container (min-width: ${bp.lg}) {
    font-size: 4.5rem; // lg:text-7xl
  }
`;
const HeroSectionSubtitle = styled.h6`
  font-size: 1.125rem;
  color: #4b5563;

  &:not(.light *) {
    color: #d1d5db;
  }
  @container (min-width: ${bp.lg}) {
    font-size: 1.25rem;
  }
`;

export default function HeroSection({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <HeroSectionWrapper id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <HeroSectionContainer>
        <HeroSectionContent>
          <HeroSectionTitle>{props?.headerText}</HeroSectionTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <HeroSectionSubtitle>
              {props?.subHeaderTextarea}
            </HeroSectionSubtitle>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <button
                style={{
                  backgroundColor: style?.accent,
                  color: "white",
                  borderRadius: "1rem",
                  padding: "0.5rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  border: "1px solid transparent",
                }}
              >
                {props?.primaryButtonText}
              </button>
              <button
                style={{
                  color: style?.accent,
                  borderColor: style?.accent,
                  border: "1px solid",
                  backgroundColor: "transparent",
                  borderRadius: "1rem",
                  padding: "0.5rem 1.5rem",
                  fontSize: "0.875rem",
                }}
              >
                {props?.secondaryButtonText}
              </button>
            </div>
          </div>
        </HeroSectionContent>
        <img
          src={props?.imageSrc}
          alt="hero"
          style={{
            width: "100%",
            borderRadius: "9999px",
            aspectRatio: "16/9",
            objectFit: "cover",
            objectPosition: "center",
          }}
          loading="lazy"
        />
      </HeroSectionContainer>
    </HeroSectionWrapper>
  );
}
