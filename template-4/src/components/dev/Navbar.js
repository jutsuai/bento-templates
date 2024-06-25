import React from "react";
import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const StyledNav = styled.nav`
  width: 100%;

  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};
  background-color: white;
  &:not(.light *) {
    background-color: #121212;
  }
`;

const NavContainer = styled.div`
  display: flex;
  max-width: 75rem;
  margin: 0 auto;
  flex-direction: ${({ style }) => style?.flexDirection || "row"};
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  padding-block: 1.5rem;
`;

const NavList = styled.ul`
  display: none;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  font-weight: 600;
  align-items: center;
  margin-block: auto;
  gap: 1.5rem;
  list-style: none;
  color: black;
  @container (min-width: ${bp.lg}) {
    display: flex;
  }

  &:not(.light *) {
    color: white;
  }
`;

const NavButtomContainer = styled.div`
  display: none;

  @container (min-width: ${bp.lg}) {
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
  background-color: ${({ accent }) => accent || "#412dff"};
  border-radius: 0.375rem;

  @container (min-width: ${bp.lg}) {
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
  z-index: 40;
  right: 0;
  top: 0;
  width: 100%;
  border-bottom: 1px solid;
  background-color: white;
  padding: 1.75rem;
  transition: all 0.2s;
  display: ${({ showNav }) => (showNav ? "inline-block" : "none")};

  @container (min-width: ${bp.md}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  &:not(.light *) {
    border-color: rgb(55 65 81);
    background-color: #121212;
  }
`;

const CloseIcon = styled.svg`
  margin-left: auto;
  display: block;
  width: 100%;
  cursor: pointer;
  width: 1.5rem;
  fill: rgb(229 231 235);
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
  border: none;
  background-color: ${({ accent }) => accent || "#412dff"};
  border-radius: 0.375rem;

  &:not(.light *) {
    color: white;
  }
`;

const MenuIcon = styled.svg`
  display: block;
  height: 1.25rem;
  @container (min-width: ${bp.lg}) {
    display: none;
  }
  fill: white;
`;

const NavLinks = styled.a`
  color: black;

  &:not(.light *) {
    color: white;
  }
`;

const defaultLogoSrc =
  "https://ipfs.near.social/ipfs/bafkreidii2ec3qsi54iknwotmnnqejoe6l6nivbq2ma65v4thyp7w7dhza";
export default function Navbar({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  const [showNav, setShowNav] = React.useState(false);
  return (
    <StyledNav id={id} style={style} ref={(ref) => connect(drag(ref))}>
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
            style={{ height: "3rem" }}
            src={props?.logoSrc}
            alt="company logo"
          />
        )}
        <NavList>
          {props?.navItems?.map((item, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
              }}
            >
              <NavLinks href={item.link}>{item.name}</NavLinks>
            </li>
          ))}
        </NavList>
        <MenuIcon
          onClick={() => setShowNav(true)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </MenuIcon>

        <NavButtomContainer>
          <Button accent={style?.accent}>
            {props?.buttonText}
            <svg
              style={{
                width: "0.8rem",
                fill: "white",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
            </svg>
          </Button>
        </NavButtomContainer>

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

            <MobileButton accent={style?.accent}>
              <svg
                style={{
                  width: "0.7rem",
                  fill: "white",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
              </svg>

              {props?.buttonText}
            </MobileButton>
          </MobileNavList>
        </MobileMenu>
      </NavContainer>
    </StyledNav>
  );
}
