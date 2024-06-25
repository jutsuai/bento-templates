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
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  background-color: white;
  min-height: 400px;
  &:not(.light *) {
    background-color: #121212;
  }
`;
const AboutLeftContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: none;

  @container (min-width: ${bp.lg}) {
    display: flex;
  }
`;
const AboutHeader = styled.h2`
  font-size: 2.25rem; // text-4xl
  font-weight: 600; // font-semibold
  color: black;
  max-width: 42rem; // max-w-2xl

  &:not(.light *) {
    color: white;
  }
`;

const AboutSubHeader = styled.p`
  font-size: 0.875rem; // text-sm
  color: rgba(0, 0, 0, 0.7);
  max-width: 42rem; // max-w-2xl

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;

  &:not(.light *) {
    color: rgba(255, 255, 255, 0.7);
  }
`;
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem; // gap-8
  padding-top: 2rem; // py-8
  padding-bottom: 2rem; // py-8

  @container (min-width: ${bp.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AboutImage = styled.img`
  object-fit: cover;
  object-position: center;
  max-width: 5rem; // max-w-20
  max-height: 5rem; // max-h-20
  padding: 0.5rem; // p-2
  aspect-ratio: 1 / 1; // aspect-square
  background-color: rgba(0, 0, 0, 0.05); // bg-black/5
  border-radius: 0.5rem; // rounded-lg

  &:not(.light *) {
    background-color: rgba(255, 255, 255, 0.05); // dark:bg-white/5
  }
`;
const AboutProjectHeader = styled.h3`
  font-size: 1.125rem; // text-lg
  color: black;

  &:not(.light *) {
    color: white;
  }
`;
const AboutProjectDescription = styled.p`
  font-size: 0.75rem; // text-xs
  color: rgba(0, 0, 0, 0.7);

  &:not(.light *) {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default function About({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <AboutWrapper id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <div
        style={{
          maxWidth: "75rem",
          margin: "0 auto",
          padding: "5rem 1rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "3rem",
          height: "100%",
          width: "100%",
        }}
      >
        <AboutLeftContainer>
          <div
            style={{
              backgroundColor: style?.accent || "#412dff",
              width: "100%",
              height: "100%",
              maxWidth: "600px",
              borderRadius: "9999px",
              aspectRatio: "1/1",
              margin: "0 auto",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "8%",
              height: "100%",
              left: 0,
              width: "100%",
            }}
          >
            <div
              style={{
                background: "linear-gradient(to right, #847dc9, white)",
                display: "flex",
                padding: "1rem",
                paddingRight: "1.5rem",
                gap: "1rem",
                borderRadius: "1rem", // rounded-2xl
                width: "fit-content",
                position: "absolute",
                top: "33.33%", // top-1/3
                border: "1px solid #ccc",
              }}
            >
              <img
                src="https://ipfs.near.social/ipfs/bafkreiasl4rqon4ol4ue2u3qwmagkplt3o2rc3dbxoy236tebwtk7ofzam"
                alt="tick"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.25rem",
                }}
              >
                <h6
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  99%
                </h6>
                <p
                  style={{
                    fontSize: "0.875rem",
                  }}
                >
                  Satisfied User
                </p>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(to left, rgb(55 65 81), white)",
                display: "flex",
                padding: "1rem",
                paddingRight: "1.5rem",
                gap: "1rem",
                borderRadius: "1rem", // rounded-2xl
                width: "fit-content",
                position: "absolute",
                bottom: "15%", // top-1/3
                right: 0,
                border: "1px solid #ccc",
              }}
            >
              <img
                src="https://ipfs.near.social/ipfs/bafkreifzbt23gmod3nuyd2xg2ce6ej3lce6gt32pyowlphwomvrlznp744"
                alt="work"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.25rem",
                }}
              >
                <h6
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  100%
                </h6>
                <p
                  style={{
                    fontSize: "0.875rem",
                  }}
                >
                  Top Rated
                </p>
              </div>
            </div>
            <img
              src={props?.imageSrc}
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "0.125rem",
                width: "100%",
                height: "100%",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            />
          </div>
        </AboutLeftContainer>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <h6
            style={{
              color: "#4fe173",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            {props?.subHeaderText}
          </h6>
          <AboutHeader>{props?.headerText}</AboutHeader>
          <AboutSubHeader>{props?.descriptionTextarea}</AboutSubHeader>
          <AboutContainer>
            {props?.projects?.map((project, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <AboutImage src={project?.imageSrc} alt={project?.headerText} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <AboutProjectHeader>{project?.headerText}</AboutProjectHeader>
                  <AboutProjectDescription>
                    {project?.subHeaderTextarea}
                  </AboutProjectDescription>
                </div>
              </div>
            ))}
          </AboutContainer>
          <button
            style={{
              border: "none",
              backgroundColor: style?.accent || "#412dff",
              whiteSpace: "nowrap",
              borderRadius: "0.375rem", // equivalent to rounded-md
              padding: "1rem 2rem", // equivalent to py-4 px-8
              fontSize: "0.875rem", // equivalent to text-sm
              fontWeight: "500", // equivalent to font-medium
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {props?.buttonText}
            <svg
              style={{
                width: "0.875rem",
                fill: "white",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </div>
    </AboutWrapper>
  );
}
