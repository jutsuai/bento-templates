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

  background-color: ${({ style }) => style?.accent || "#000000"};
`;

const MemeFeaturedContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 8rem 1rem;
  @media (min-width: ${bp.sm}) {
    max-width: ${bp.xl};
  }
`;

const HeaderText = styled.h1`
  @media (min-width: ${bp.lg}) {
    font-size: 4rem;
    text-align: left;
  }
  font-size: 2rem;
  text-align: center;
  color: #ffffff;
  font-family: Sword-Art;
  text-transform: uppercase;
  max-width: ${bp?.sm};
`;

const SubheaderText = styled.p`
  color: gray;
  font-size: 0.875rem;

  line-height: 1.7;
  max-width: ${bp?.sm};

  text-align: center;

  @media (min-width: ${bp.lg}) {
    font-size: 1.1rem;
    text-align: left;
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
          <HeaderText>{props?.headerText}</HeaderText>
          <SubheaderText>{props?.subHeaderTextarea}</SubheaderText>
          <div
            style={{
              display: "grid",
              marginTop: "3rem",
              gap: "2rem",

              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
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
                    // minWidth: "300px",
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
