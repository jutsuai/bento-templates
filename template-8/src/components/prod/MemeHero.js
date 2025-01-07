import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const HeroWrapper = styled.nav`
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

const HeroContent = styled.div`
  margin: 0 auto;
  display: flex;
  padding-inline: 1rem;
  justify-content: space-between;
  @media (min-width: ${bp.sm}) {
    max-width: ${bp.xl};
    padding: 8rem 1rem;
  }
`;

export default function MemeHero({ props, style, id }) {
  return (
    <HeroWrapper style={style} id={id}>
      <div
        style={{
          backgroundColor: "#fbe901",
          borderRadius: " 0 0 6rem 6rem",
        }}
      >
        <HeroContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                color: "#f533e3",
                fontFamily: "Sword-Art",
                lineHeight: "1.2",
              }}
            >
              {props?.headerText}
            </h1>
            <h2
              style={{
                fontSize: "8rem",
                marginBlock: "-0.875rem",

                fontFamily: "Sword-Art",
              }}
            >
              {props?.subHeaderText}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                paddingBlock: "0.2rem",
              }}
            >
              {props?.descriptionTextarea}
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginTop: "1.2rem",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  borderBottom: "2px solid #000000",
                  borderRight: "2px solid #000000",
                  borderRadius: "0.3rem",
                  color: "#ffffff",

                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "0.3rem",
                    padding: "0.5rem 2rem",
                    minWidth: "10rem",
                    borderBottom: "2px solid #ffffff",
                    borderRight: "2px solid #ffffff",
                    backgroundColor: "#000000",
                    fontSize: "0.857rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {props?.primaryButtonText}
                </div>
              </button>
              <button
                style={{
                  borderBottom: "2px solid #000000",
                  borderRight: "2px solid #000000",
                  borderRadius: "0.3rem",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "0.3rem",
                    padding: "0.5rem 2rem",
                    minWidth: "10rem",
                    borderBottom: "2px solid #ffffff",
                    borderRight: "2px solid #ffffff",
                    backgroundColor: "#f63fd7",
                    fontSize: "0.857rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {props?.secondaryButtonText}
                </div>
              </button>
            </div>
          </div>
          <img
            src={props?.avatarSrc}
            alt="Trump Icon"
            style={{
              width: "30rem",
              height: "30rem",
              objectFit: "contain",
              objectPosition: "center",
              alignSelf: "center",
              margin: "0 0 0 2rem",
            }}
          />
        </HeroContent>
      </div>
    </HeroWrapper>
  );
}
