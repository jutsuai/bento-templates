import React from "react";
import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

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
  display: none;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: white;
  border: none;
  background: transparent;

  @media (min-width: ${bp.lg}) {
    display: flex;
  }
`;

const NavImageLight = styled.img`
  width: 2rem;
  display: none;
  &:not(.light *) {
    display: inline-block;
  }
`;

const NavImageDark = styled.img`
  width: 2rem;
  display: inline-block;
  &:not(.light *) {
    display: none;
  }
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

  &:not(.light *) {
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
  &:not(.light *) {
    color: #d1d5db;
  }
`;

const MobileButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: black;

  &:not(.light *) {
    color: white;
  }
`;
const defaultLogoSrc =
  "https://ipfs.near.social/ipfs/bafkreidii2ec3qsi54iknwotmnnqejoe6l6nivbq2ma65v4thyp7w7dhza";
export default function Navbar({ props, style, id }) {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <StyledNav id={id} style={style}>
      <NavContainer>
        {props?.logoSrc === defaultLogoSrc ? (
          <>
            <NavImageLight
              src="https://ipfs.near.social/ipfs/bafkreici2x5ecmfgjks6r4cd2ntz5hcxo27xu7j4ykhcrsfjbtmoeyeve4"
              alt="logo"
            />
            <NavImageDark
              src="https://ipfs.near.social/ipfs/bafkreidii2ec3qsi54iknwotmnnqejoe6l6nivbq2ma65v4thyp7w7dhza"
              alt="logo"
            />
          </>
        ) : (
          <img
            style={{ height: "2rem" }}
            src={props?.logoSrc}
            alt="company logo"
          />
        )}
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
            <div
              style={{
                backgroundColor: style?.accent || "#b9ff81",
                color: "black",
                height: "2rem",
                width: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100%",
              }}
            >
              <i className="fa-solid fa-arrow-right" />
            </div>
            {props?.buttonText}
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
              <div
                style={{
                  backgroundColor: style?.accent || "#b9ff81",
                  color: "black",
                  height: "2rem",
                  width: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100%",
                }}
              >
                <i className="fa-solid fa-arrow-right" />
              </div>
              {props?.buttonText}
            </MobileButton>
          </MobileNavList>
        </MobileMenu>
      </NavContainer>
    </StyledNav>
  );
}
