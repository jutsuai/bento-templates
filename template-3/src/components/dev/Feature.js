import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const FeatureWrapper = styled.section`
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
const FeatureContainer = styled.div`
  max-width: 96rem;
  margin-inline: auto;
  gap: 2.5rem;
  padding: 5rem 1rem;
  display: flex;
  /* flex-direction: ${({ style }) => style.flexDirection || "row"}; */
  align-items: center;
  flex-direction: row;

  @container (min-width: ${bp.lg}) {
    flex-direction: ${({ props }) =>
      `${props?.isReverse ? "row-reverse" : "row"}`};
  }
`;

const FeatureBorderWhite1 = styled.img`
  &:not(.light *) {
    display: block;
  }
  display: none;
  position: absolute;
  top: 0;
  ${({ props }) =>
    props?.isReverse
      ? `
    transform: scaleX(-1);
    right: 0;
    `
      : "left: 0"};
`;
const FeatureBorderBlack1 = styled.img`
  &:not(.light *) {
    display: none;
  }
  display: block;
  position: absolute;
  top: 0;
  ${({ props }) =>
    props?.isReverse
      ? `
        transform: scaleX(-1);
        right: 0;
        `
      : "left: 0"};
`;
const FeatureBorderWhite2 = styled.img`
  display: none;
  position: absolute;
  top: 0.75rem;

  &:not(.light *) {
    display: block;
  }

  ${({ props }) =>
    props?.isReverse
      ? `
    transform: scaleX(-1);
    right: 0.75rem;
    `
      : "left: 0.75rem"};
`;
const FeatureBorderBlack2 = styled.img`
  position: absolute;
  top: 0.75rem;
  display: block;

  &:not(.light *) {
    display: none;
  }

  ${({ props }) =>
    props?.isReverse
      ? `
    transform: scaleX(-1);
    right: 0.75rem;
    `
      : "left: 0.75rem"};
`;

const FeatureContent = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  gap: 1rem;

  @container (min-width: ${bp.lg}) {
    width: 50%;
    padding: 3.5rem;
  }
`;
const FeatureSubHeader = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(55 65 81);
  font-weight: 500;

  &:not(.light *) {
    color: rgb(209 213 219);
  }

  @container (min-width: ${bp.lg}) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
const FeatureHeader = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: black;

  &:not(.light *) {
    color: white;
  }

  @container (min-width: ${bp.md}) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;
const FeatureDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(75 85 99);

  &:not(.light *) {
    color: rgb(229 231 235);
  }

  @container (min-width: ${bp.lg}) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
export default function Feature({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <FeatureWrapper id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <FeatureContainer style={style} props={props}>
        <div
          style={{
            flex: "1 1 0%",
            position: "relative",
            display: "flex",
            justifyContent: props?.isReverse ? "flex-end" : "flex-start",
          }}
        >
          <FeatureBorderBlack1
            props={props}
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/feature-border-black.svg"
            alt=""
          />
          <FeatureBorderWhite1
            props={props}
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/feature-border-white.svg"
            alt=""
          />
          <FeatureBorderBlack2
            props={props}
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/feature-border2-black.svg"
            alt=""
          />
          <FeatureBorderWhite2
            props={props}
            src="https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/template-3/feature-border2-white.svg"
            alt=""
          />
          <div
            style={{
              marginTop: "1.5rem",
              marginRight: props?.isReverse ? "1.5rem" : "unset",
              marginLeft: props?.isReverse ? "unset" : "1.5rem",
            }}
          >
            <img
              src={props?.imageSrc}
              alt="features"
              style={{
                borderRadius: "0.5rem",
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
                maxWidth: "36rem",
                maxHeight: "36rem",
                aspectRatio: "1/1",
              }}
              loading="lazy"
            />
          </div>
        </div>
        <FeatureContent>
          <FeatureSubHeader>{`// ${props?.subHeaderText}`}</FeatureSubHeader>
          <FeatureHeader>{props?.headerText}</FeatureHeader>
          <FeatureDescription>{props?.description}</FeatureDescription>
        </FeatureContent>
      </FeatureContainer>
    </FeatureWrapper>
  );
}
