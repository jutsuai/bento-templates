import React from "react";
import styled from "styled-components";

// const bp = {
//   sm: "36rem",
//   md: "42rem",
//   lg: "48rem",
//   xl: "56rem",
// };
const bp = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};
export default function Navbar({ props, style, id }) {
  const [showNav, setShowNav] = React.useState(false);
  const StyledNav = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 50;
    transition: all 0.2s;
    padding: ${({ style }) =>
      `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
        style?.paddingBottom || 0
      }px ${style?.paddingLeft || 0}px`};
    margin: ${({ style }) =>
      `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
        style?.marginBottom || 0
      }px ${style?.marginLeft || 0}px`};
  `;

  const NavContainer = styled.div`
    display: flex;
    background-color: #00000040;
    backdrop-filter: blur(8px);
    flex-direction: ${({ style }) => style?.flexDirection || "row"};
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    padding-block: 1.5rem;
    @media (min-width: ${bp.md}) {
      padding-left: 3rem /* 48px */;
      padding-right: 3rem /* 48px */;
    }
  `;

  const NavList = styled.ul`
    display: none;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    font-weight: 600;
    align-items: center;
    margin-block: auto;
    gap: 1.5rem;
    @media (min-width: ${bp.lg}) {
      display: flex;
    }
  `;

  const MenuIcon = styled.i`
    display: block;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    @media (min-width: ${bp.lg}) {
      display: none;
    }
    color: white;
  `;

  const NavButtomContainer = styled.div`
    display: none;

    @media (min-width: ${bp.lg}) {
      display: flex;
    }
    align-items: center;
    gap: 0.5rem;
  `;

  const Button = styled.button`
    white-space: nowrap;
    border-radius: 0.375rem;
    background-color: #b9ff81;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: black;
    display: flex;
    align-items: center;
    gap: 1rem;
  `;

  const NavImageLight = styled.img`
    width: 2rem;
  `;

  const MobileMenu = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid;
    background-color: white;
    padding: 1.75rem;
    transition: all 0.2s;
    display: ${({ showNav }) => (showNav ? "inline-block" : "none")};

    @media (min-width: ${bp.md}) {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    &:is(.dark *) {
      border-color: rgb(55 65 81);
      background-color: rgb(3 7 18);
    }
  `;

  const CloseIcon = styled.i`
    margin-right: 1.5rem;
    display: inline-block;
    width: 100%;
    cursor: pointer;
    text-align: right;
    font-size: 1.5rem;
    line-height: 2rem;
    color: rgb(229 231 235);
  `;

  const MobileNavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  `;

  const MobileNavListItem = styled.a`
    color: #4b5563;
    &:is(.dark *) {
      color: #d1d5db;
    }
  `;

  const MobileButton = styled.button`
    display: flex;
    white-space: nowrap;
    border-radius: 0.375rem;
    background-color: #b9ff81;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: black;

    &:is(.dark *) {
      color: white;
    }
  `;

  return (
    <StyledNav
      id={id}
      style={{
        padding: `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
          style?.paddingBottom || 0
        }px ${style?.paddingLeft || 0}px`,
        margin: `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
          style?.marginBottom || 0
        }px ${style?.marginLeft || 0}px`,
      }}
    >
      <NavContainer>
        <NavImageLight
          src="https://ipfs.near.social/ipfs/bafkreici2x5ecmfgjks6r4cd2ntz5hcxo27xu7j4ykhcrsfjbtmoeyeve4"
          alt="logo"
        />
        <NavList>
          {props?.navItems?.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                style={{
                  textWrap: "nowrap",
                  color: "white",
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </NavList>
        <MenuIcon
          className="fa-solid fa-bars-staggered"
          onClick={() => setShowNav(true)}
        />

        <NavButtomContainer>
          <Button>
            {props?.buttonText}
            <svg
              style={{ width: "0.7rem", transform: "rotate(-0.25turn)" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </Button>
        </NavButtomContainer>

        <MobileMenu showNav={showNav}>
          <CloseIcon
            className="fa-solid fa-xmark"
            onClick={() => setShowNav(false)}
          />
          <MobileNavList>
            {props?.navItems?.map((item, index) => (
              <li key={index}>
                <MobileNavListItem href={item.link}>
                  {item.name}
                </MobileNavListItem>
              </li>
            ))}

            <MobileButton>
              {props?.buttonText}
              <svg
                style={{ width: "0.7rem", transform: "rotate(-0.25turn)" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </MobileButton>
          </MobileNavList>
        </MobileMenu>
      </NavContainer>
    </StyledNav>
  );
}
