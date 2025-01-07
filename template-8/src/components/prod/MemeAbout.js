import styled from "styled-components";

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
  padding-inline: 1rem;
  flex-direction: column;
  @media (min-width: ${bp.sm}) {
    max-width: ${bp.xl};

    padding: 8rem 1rem;
  }
`;

export default function MemeAbout({ props, style, id }) {
  return (
    <AboutWrapper style={style} id={id}>
      <AboutContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              color: "#ffffff",
              fontFamily: "Sword-Art",
            }}
          >
            {props?.headerText}
          </h1>
          <p
            style={{
              color: "gray",
              fontSize: "1rem",
              fontWeight: 500,
              textAlign: "center",
              padding: "1rem",
              maxWidth: `${bp.sm}`,
            }}
          >
            {props?.subHeaderTextarea}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
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
                      objectPosition: "top",
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
