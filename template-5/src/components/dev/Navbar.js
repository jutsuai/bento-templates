import { useNode } from "@craftjs/core";
import React from "react";
import styled from "styled-components";

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
  flex-direction: ${({ style }) => style?.flexDirection || "row"};
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  padding-block: 1.5rem;
  @container (min-width: 42rem) {
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
  gap: 1.5rem;
  @container (min-width: 48rem) {
    display: flex;
  }
`;

const MenuIcon = styled.i`
  display: block;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  @container (min-width: 48rem) {
    display: none;
  }
  color: white;
`;

const NavButtomContainer = styled.div`
  display: none;

  @container (min-width: 48rem) {
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

  @container (min-width: 48rem) {
    display: flex;
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

  @container (min-width: 42rem) {
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
  gap: 1rem;
  align-items: center;
  white-space: nowrap;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: black;

  &:is(.dark *) {
    color: white;
  }
`;

export default function Navbar({ props, style, id }) {
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
    const nav = document.getElementsByTagName("nav")[0];
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 90) {
        nav.classList.add("bg-black", "bg-opacity-75"); // I used bg-opacity-75 for a slightly transparent black
        nav.classList.remove("bg-transparent", "bg-opacity-100");
      } else {
        nav.classList.add("bg-transparent", "bg-opacity-100");
        nav.classList.remove("bg-black", "bg-opacity-75");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <StyledNav
      ref={(ref) => connect(drag(ref))}
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
        <svg
          style={{ fill: "white", height: "2.25rem", width: "fit-content" }}
          width="133"
          height="166"
          viewBox="0 0 133 166"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3125_6665)">
            <path d="M2 33.8189V0H130.953V98.5159C130.953 135.278 100.911 163 66.1089 163C29.4901 163 2 132.427 2 98.5159V73.8134H35.8189V98.5159C35.8189 116.678 51.0366 129.176 66.1089 129.176C83.3579 129.176 97.134 115.628 97.134 98.5159V33.8189H2Z" />
            <circle cx="18.9094" cy="53.9631" r="11.322" fill="#FFD37C" />
          </g>
          <defs>
            <filter
              id="filter0_d_3125_6665"
              x="0.823691"
              y="0"
              width="131.305"
              height="165.353"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.17631" />
              <feGaussianBlur stdDeviation="0.588155" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3125_6665"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3125_6665"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <NavList>
          {props?.navItems?.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                style={{
                  textWrap: "nowrap",
                  color: "rgb(229 231 235)",
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

        <MobileMenu>
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

            <MobileButton className="gap-4 items-center text-nowrap px-6 py-2 text-sm font-semibold text-black dark:text-white flex">
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
