import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const ExperienceWrapper = styled.section`
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

const ExperienceHeader = styled.h1`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }

  font-weight: 500;
  font-size: 2.2rem;
`;

const ExperienceTitle = styled.h3`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }

  font-weight: 600;
  font-size: 1rem;
`;
const ExperienceLocation = styled.p`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }

  font-weight: 600;
  font-size: 1rem;
`;
const ExperienceDescription = styled.p`
  color: #000000cc;
  &:not(.light *) {
    color: #ffffffcc;
  }
  margin-top: 0.5rem;
  font-size: 1rem;
`;

const ExperienceDateBox = styled.div`
  flex: 1;
  padding: 0 33px;
  margin: 1rem 0;
  position: relative;
  display: none;

  @container (min-width: ${bp.md}) {
    display: inline-block;
  }
`;

const ExperienceDate = styled.p`
  color: #000000cc;
  &:not(.light *) {
    color: #ffffffcc;
  }
  top: 0.3rem;
  position: absolute;
  font-size: 1rem;
  font-weight: 500;

  ${({ index }) =>
    index % 2 === 0
      ? `
  left: 0;
  `
      : `
  right: 0;
  `}
`;

const MobileExperienceDate = styled.p`
  color: #00000080;
  &:not(.light *) {
    color: #ffffff80;
  }
  margin-top: 0.875rem;
  font-size: 0.875rem;

  display: inline-block;
  @container (min-width: ${bp.md}) {
    display: none;
  }
`;

const ExperiencContent = styled.div`
  background-color: #f3f4f6;
  flex: 1;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #29303d10;

  &:not(.light *) {
    background-color: #1d2432;
    border: 1px solid #29303d00;
  }

  @container (min-width: ${bp.md}) {
    padding: 2rem;
  }
`;

const ExperienceTimeline = styled.div`
  position: relative;
  flex: 1;
  max-width: 5px;
  background-color: #e5e7eb;

  &:not(.light *) {
    background-color: #1d2432;
  }

  display: none;
  @container (min-width: ${bp.md}) {
    display: inline-block;
  }
`;

const ExperienceLineCircle = styled.div`
  border: 4px solid;

  width: 1.8rem;
  height: 1.8rem;
  border-radius: 100%;
  position: absolute;
  top: 2rem;
  left: 55%;
  transform: translate(-50%, -50%);

  border-color: #1d243280;
  background-color: #f9fafb;
  &:not(.light *) {
    border-color: #e5e7eb80;
    background-color: #111827;
  }
`;

const ExperienceBox = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: row-reverse;
  @container (min-width: ${bp.md}) {
    flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};
  }
`;

export default function PortExperience({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <ExperienceWrapper style={style} id={id} ref={(ref) => connect(drag(ref))}>
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
        <ExperienceHeader>My Experience</ExperienceHeader>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {props?.timeline &&
            props?.timeline?.map((item, index) => (
              <ExperienceBox key={index} index={index}>
                <ExperiencContent>
                  <ExperienceTitle>{item?.titleText}</ExperienceTitle>
                  <ExperienceLocation>{item?.locationText}</ExperienceLocation>
                  <ExperienceDescription>
                    {item?.descriptionTextarea}
                  </ExperienceDescription>
                  <MobileExperienceDate>
                    {item?.durationText}
                  </MobileExperienceDate>
                </ExperiencContent>
                <ExperienceTimeline>
                  <ExperienceLineCircle />
                </ExperienceTimeline>
                <ExperienceDateBox>
                  <ExperienceDate index={index}>
                    {item?.durationText}
                  </ExperienceDate>
                </ExperienceDateBox>
              </ExperienceBox>
            ))}
        </div>
      </div>
    </ExperienceWrapper>
  );
}
