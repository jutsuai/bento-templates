import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const ContactWrapper = styled.section`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};
  background-color: #fff;
  &:not(.light *) {
    background-color: #09050f;
  }
`;

const ContactContent = styled.div`
  max-width: ${bp.xl};
  margin-inline: auto;
  padding-inline: 2rem;
  padding-block: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 9fr 3fr;

  @container (max-width: ${bp.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactContentCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  overflow: hidden;
  gap: 0.875rem;
  border-radius: 2rem;
  padding: 2rem;
  @container (min-width: ${bp.lg}) {
    gap: 1rem;
    border-radius: 3rem;
    padding: 4rem;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: ${({ accent }) =>
      `linear-gradient(to left bottom, ${
        accent + "B3"
      } -110%, transparent 50%)`};
  }

  border-color: #00000020;
  &:not(.light *) {
    border-color: #ffffff20;
  }
`;

const ContactLabel = styled.p`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
`;

const ContactHeading = styled.h1`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
  max-width: 400px;
  line-height: 1.2;
  font-size: 1.5rem;
  @container (min-width: ${bp.sm}) {
    font-size: 2rem;
  }
  @container (min-width: ${bp.lg}) {
    font-size: 2rem;
  }
`;

const ContactSubHeading = styled.h3`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
  opacity: 0.6;
  font-size: 0.875rem;
  max-width: 438px;

  @container (min-width: ${bp.sm}) {
    font-size: 1rem;
  }
  @container (min-width: ${bp.lg}) {
    font-size: 1.25rem;
  }
`;

const ContactLinks = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ accent }) =>
    `linear-gradient(to right bottom, ${accent}, transparent)`};
  border-radius: 1rem;

  padding: 2rem;
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  @container (min-width: ${bp.sm}) {
    border-radius: 2rem;
  }
`;
const ContactImage = styled.img`
  position: absolute;
  bottom: -30px;
  right: -10px;
  /* display: none; */
  width: 200px;
  height: 200px;
`;

export default function PortfolioContact({ style, props, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <ContactWrapper style={style} id={id} ref={(ref) => connect(drag(ref))}>
      <ContactContent>
        <ContactContentCard accent={style?.accent}>
          <ContactLabel>I constantly try to improve myself</ContactLabel>
          <ContactHeading>
            {props?.headerText || "Currently, I am learning GoLang."}
          </ContactHeading>
          <ContactSubHeading>
            {props?.subHeaderTextarea ||
              "I am also learning TypeScript via my open source repos. Other than that, I also constantly practice web design."}
          </ContactSubHeading>
        </ContactContentCard>

        <ContactLinks accent={style?.accent}>
          <h3
            style={{
              color: "#fff",
              fontSize: "1.7rem",
              textShadow: "0 0 20px #00000040",
            }}
          >
            Contact me
          </h3>
          <p
            style={{
              color: "#ffffffcc",
              fontSize: "1rem",
              textShadow: "0 0 20px #00000040",
            }}
          >
            Make a contact via email or twitter DMs.
          </p>
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "fit-content",
                padding: "1rem",
                border: "1px solid #ffffff40",
                borderRadius: "0.5rem",
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              <a href={`mailto:${props?.emailUrlText || ""}`}>
                <svg
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    fill: "#fff",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                </svg>
              </a>
            </div>

            <div
              style={{
                width: "fit-content",
                padding: "1rem",
                border: "1px solid #ffffff40",
                borderRadius: "0.5rem",
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
              }}
            >
              <a href={`${props?.twitterUrlText || ""}`}>
                <svg
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    fill: "#fff",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </div>
          </div>
          <ContactImage
            alt="contact me"
            src="https://ipfs.near.social/ipfs/bafkreihsqpylowayfhzhvwfypsakpbuvjvsinsimmmhtd3gsc4rgqwqzt4"
          />
        </ContactLinks>
      </ContactContent>
    </ContactWrapper>
  );
}
