import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const FeaturedWrapper = styled.section`
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

const FeaturedHeader = styled.h1`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }

  font-weight: 500;
  font-size: 2.2rem;
`;

const FeaturedContent = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;

  max-height: 100%;
  border-radius: 0.5rem;
  background-color: #f3f4f6;
  border: 1px solid #29303d10;

  &:not(.light *) {
    background-color: #29303d;
    border: none;
  }

  flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};

  @container (min-width: ${bp.sm}) {
    min-height: 20rem;
  }
`;

const FeaturedContentHeader = styled.h3`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
  font-size: 1.5rem;
  font-weight: 600;
`;
const FeaturedContentSubHeader = styled.p`
  color: #000;
  &:not(.light *) {
    color: #ffffffcc;
  }
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const FeatureImageContainer = styled.div`
  flex: 1;
  display: none;
  flex-direction: column;
  gap: 1rem;

  @container (min-width: ${bp.sm}) {
    display: flex;
  }
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 2rem;
  width: 28.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  ${({ index }) =>
    index % 2 === 0
      ? `
   right: -10rem;
  `
      : `
  left: -10rem;
  `};
`;

export default function PortFeatured({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <FeaturedWrapper style={style} id={id} ref={(ref) => connect(drag(ref))}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          maxWidth: bp.sm,
          margin: "0 auto",
          padding: "4rem 1rem",
        }}
      >
        <FeaturedHeader>Projects</FeaturedHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {props?.projects &&
            props?.projects?.map((project, index) => (
              <FeaturedContent key={index} index={index}>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.8rem",
                    padding: "2.5rem",
                  }}
                >
                  <FeaturedContentHeader>
                    {project?.headerText}
                  </FeaturedContentHeader>
                  <FeaturedContentSubHeader>
                    {project?.subHeaderTextarea}
                  </FeaturedContentSubHeader>
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "0.5rem",
                      display: "flex",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    {project?.tags &&
                      project?.tags?.map(
                        (item, index) =>
                          index <= 3 && (
                            <p
                              key={index}
                              style={{
                                color: "#fff",
                                backgroundColor: "#545657",
                                width: "fit-content",
                                borderRadius: "9999px",
                                padding: "0.2rem 0.875rem",
                                fontSize: "0.8rem",
                                fontWeight: 300,
                                opacity: 0.8,
                              }}
                            >
                              {item}
                            </p>
                          )
                      )}
                  </div>
                </div>
                <FeatureImageContainer>
                  <ProjectImage index={index} alt="" src={project?.imageSrc} />
                </FeatureImageContainer>
              </FeaturedContent>
            ))}
        </div>
      </div>
    </FeaturedWrapper>
  );
}
