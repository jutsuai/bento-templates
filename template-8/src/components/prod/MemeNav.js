import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const NavWrapper = styled.nav`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  background-color: #fbe901;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.8rem 0.6rem;

  width: 100%;
  flex-wrap: wrap;

  text-align: center;

  margin-top: 0;

  @media (min-width: ${bp.sm}) {
    border-radius: 9999px;
    max-width: ${bp.xl};
    padding: 1rem 0.875rem;
    /* margin-top: 2rem; */
  }
`;

const NavHead = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: #f533e3;
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 0.875rem;
  padding: 0.2rem 0.875rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: uppercase;

  @media (min-width: ${bp.sm}) {
    padding: 0.5rem 1rem;
  }

  color: #000000cc;
`;

const NavDot = styled.span`
  font-size: 0.8rem;

  &:last-child {
    display: none;
  }
`;

export default function PortNav({ props, style, id }) {
  return (
    <NavWrapper style={style} id={id}>
      <NavContent>
        <NavHead>{props?.headerText}</NavHead>
        <div
          style={{
            display: "flex",
            gap: "0.875rem",
            alignItems: "center",
          }}
        >
          {props?.navItems?.map((item, index) => (
            <>
              <NavItem key={index}>
                <a href={item?.link}>{item?.name}</a>
              </NavItem>
              <NavDot>●</NavDot>
            </>
          ))}
        </div>
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
              padding: "0.5rem 1rem",
              borderBottom: "2px solid #ffffff",
              borderRight: "2px solid #ffffff",
              backgroundColor: "#000000",
              fontSize: "0.857rem",
            }}
          >
            {props?.buttonText}
          </div>
        </button>
      </NavContent>
    </NavWrapper>
  );
}
