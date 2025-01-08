import React from "react";
import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const StyledNav = styled.nav`
  z-index: 100;
  position: relative;
  width: 100%;

  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};

  background-color: #fbe901;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: ${({ style }) => style?.flexDirection || "row"};
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  max-width: ${bp?.xl};
  margin-inline: auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);

  @media (min-width: ${bp.lg}) {
    box-shadow: none;
  }
`;

const NavList = styled.ul`
  display: none;
  color: black;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  font-weight: 600;
  align-items: center;
  margin-block: auto;
  gap: 1.5rem;
  list-style: none;
  @media (min-width: ${bp.lg}) {
    display: flex;
  }
`;

const MenuIcon = styled.svg`
  display: block;
  height: 1.25rem;
  @media (min-width: ${bp.lg}) {
    display: none;
  }
  fill: black;
`;

const NavButtomContainer = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
  }
  align-items: center;
  gap: 0.5rem;
`;

const MobileMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  border-bottom: 1px solid;
  background-color: #fbe901;
  padding: 1.75rem;
  transition: all 0.2s;
  border-bottom: 1px solid #000000;
  display: ${({ showNav }) => (showNav ? "inline-block" : "none")};

  @media (min-width: ${bp.md}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const CloseIcon = styled.svg`
  margin-left: auto;
  display: block;
  width: 100%;
  cursor: pointer;
  width: 1.5rem;
  fill: black;
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  list-style: none;
`;

const MobileNavListItem = styled.a`
  color: #4b5563;
`;

const NavHead = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: #f533e3;
`;

const NavDot = styled.span`
  font-size: 0.8rem;

  &:last-child {
    display: none;
  }
`;

export default function Navbar({ props, style, id }) {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <StyledNav id={id} style={style}>
      <NavContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            width: "100%",
          }}
        >
          <NavHead>{props?.headerText}</NavHead>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            <NavList>
              {props?.navItems?.map((item, index) => (
                <>
                  <li key={index}>
                    <a
                      href={item.link}
                      style={{
                        textWrap: "nowrap",
                        color: "inherit",
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                  <NavDot>●</NavDot>
                </>
              ))}
            </NavList>
          </div>

          <MenuIcon
            onClick={() => setShowNav(true)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </MenuIcon>
          <NavButtomContainer>
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
          </NavButtomContainer>
        </div>

        <MobileMenu showNav={showNav}>
          <CloseIcon
            onClick={() => setShowNav(false)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </CloseIcon>
          <MobileNavList>
            {props?.navItems?.map((item, index) => (
              <li key={index}>
                <MobileNavListItem href={item.link}>
                  {item.name}
                </MobileNavListItem>
              </li>
            ))}

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
          </MobileNavList>
        </MobileMenu>
      </NavContainer>
    </StyledNav>
  );
}
