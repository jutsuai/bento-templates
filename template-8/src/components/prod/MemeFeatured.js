import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const MemeFeaturedWrapper = styled.nav`
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

const MemeFeaturedContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: ${bp.sm}) {
    max-width: ${bp.xl};

    padding: 8rem 1rem;
  }
`;

export default function MemeFeatured({ props, style, id }) {
  return (
    <MemeFeaturedWrapper style={style} id={id}>
      <MemeFeaturedContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              color: "#ffffff",
              fontFamily: "Sword-Art",

              textTransform: "uppercase",
              maxWidth: bp?.sm,
            }}
          >
            {props?.headerText}
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "gray",

              maxWidth: bp?.sm,
            }}
          >
            {props?.subHeaderTextarea}
          </p>
          <div
            style={{
              display: "grid",
              marginTop: "3rem",
              gap: "3rem",

              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              paddingBottom: "2rem",
            }}
          >
            {props?.featuredImages &&
              props?.featuredImages?.length > 0 &&
              props?.featuredImages?.map((item, intex) => (
                <div
                  key={intex}
                  style={{
                    backgroundColor: "#0edc7e",
                    boxShadow: "5px 5px 0px 0 #ffffff",
                    borderRadius: "1rem",
                    minWidth: "300px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "1rem",
                    }}
                    alt=""
                    src={item}
                  />
                </div>
              ))}
          </div>
        </div>
      </MemeFeaturedContent>
    </MemeFeaturedWrapper>
  );
}
