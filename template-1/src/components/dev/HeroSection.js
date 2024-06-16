import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const HeroWrapper = styled.section`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  background-color: white;
  overflow: hidden;

  &:not(.light *) {
    background-color: #080a11;
  }
`;
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 1rem;
  gap: 5rem;
  max-width: 75rem;
  margin-inline: auto;

  @container (min-width: ${bp.sm}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @container (min-width: ${bp.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 2rem;
  max-width: 36rem;

  @container (min-width: ${bp.lg}) {
    text-align: left;
    align-items: flex-start;
  }
`;
const HeroTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-top: 1.5rem;
  color: black;
  font-weight: bold;
  font-weight: 700;
  line-height: 1.25 !important;

  &:not(.light *) {
    color: white;
  }

  @container (min-width: ${bp.lg}) {
    font-size: 3.75rem;
    line-height: 1rem;
  }
`;
const HeroSubtitle = styled.h6`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #4b5563;

  &:not(.light *) {
    color: #d1d5db;
  }

  @container (min-width: ${bp.lg}) {
    font-size: 1.25rem;
  }
`;
const HeroButton1 = styled.button`
  background-color: ${({ accent }) => accent || "#b9ff81"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: white;
  border-radius: 9999px;

  font-size: 0.8rem;
  @container (min-width: ${bp.lg}) {
    font-size: 1rem;
  }
`;
const HeroButton2 = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.8rem;
  border-radius: 9999px;
  border: 2px solid ${({ accent }) => accent || "#b9ff81"};
  font-weight: 600;
  line-height: 1.5rem;
  color: ${({ accent }) => accent || "#b9ff81"};

  font-size: 0.8rem;
  @container (min-width: ${bp.lg}) {
    font-size: 1rem;
  }
`;
const HeroImageContainer = styled.div`
  position: relative;
  display: none;
  aspect-ratio: 1 / 1;
  max-width: 24rem; // max-w-sm
  border-radius: 0.5rem; // rounded-lg
  margin-right: 1rem; // mr-4

  @container (min-width: ${bp.lg}) {
    display: block;
  }

  @container (min-width: ${bp.xl}) {
    max-width: 28rem; // xl:max-w-md
  }
`;

const HeroImage1 = styled.img`
  position: absolute;
  top: 3.5rem;
  right: -2rem;
  outline: 0.5rem solid;
  outline-color: white;
  &:not(.light *) {
    outline-color: #080a11;
  }
  width: 100%;
  max-width: 18rem;
  aspect-ratio: 9/11;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-radius: 0.375rem;
`;
export default function HeroSection({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <HeroWrapper id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>{props?.headerText}</HeroTitle>

          <HeroSubtitle>{props?.subHeaderTextarea}</HeroSubtitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <HeroButton1 accent={style?.accent}>
              {props?.secondaryButtonText}
            </HeroButton1>
            <HeroButton2 accent={style?.accent}>
              {props?.primaryButtonText}
            </HeroButton2>
          </div>
        </HeroContent>
        <HeroImageContainer>
          <div
            style={{
              backgroundColor: style?.accent,
              position: "absolute",
              bottom: "-1rem",
              left: "-1rem",
              zIndex: 0,
              height: "10rem",
              width: "10rem",
              borderRadius: "0.5rem",
            }}
          />
          <img
            src={props?.imageSrc}
            alt="hero"
            style={{
              position: "relative",
              zIndex: 10,
              aspectRatio: "1/1",
              width: "100%",
              height: "100%",
              minHeight: "7rem",
              borderRadius: "0.5rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
            loading="lazy"
          />
          <div
            style={{
              backgroundColor: style?.accent,
              position: "absolute",
              top: "-1rem",
              right: "-1rem",
              zIndex: 0,
              height: "10rem",
              width: "10rem",
              borderRadius: "0.5rem",
            }}
          />
        </HeroImageContainer>
      </HeroContainer>
    </HeroWrapper>
  );
}
