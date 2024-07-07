import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const NavWrapper = styled.section`
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

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${bp.md}) {
    justify-content: space-between;
  }
`;

const NavHeader = styled.div`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
`;

const NavLinks = styled.a`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
`;

const NavItems = styled.div`
  display: none;
  @media (min-width: ${bp.md}) {
    display: block;
  }
`;

export default function ProtfolioNav({ props, style, id }) {
  return (
    <NavWrapper style={style} id={id}>
      <div
        style={{
          maxWidth: bp.xl,
          marginInline: "auto",
          paddingInline: "2rem",
          paddingBlock: "3rem",
        }}
      >
        <NavContent>
          <NavHeader
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              {props?.nameText}
            </h1>
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: "400",
                color: "inherit",
                opacity: "0.5",
              }}
            >
              , {props?.titleText}
            </h2>
          </NavHeader>
          <NavItems>
            <ul
              style={{
                display: "flex",
                gap: "1rem",
                listStyle: "none",
              }}
            >
              {props?.navItems?.map((item, index) => (
                <li key={index}>
                  <NavLinks href={item?.link}>{item?.name}</NavLinks>
                </li>
              ))}
            </ul>
          </NavItems>
        </NavContent>
      </div>
    </NavWrapper>
  );
}
