const style = props.style || {};
const props = props.props || {};
import React from "react";


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};


  const [showNav, setShowNav] = React.useState(false);
  const StyledNav = styled.nav`
    position: relative;
    width: 100%;
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
    background-color: white;
    flex-direction: ${({ style }) => style?.flexDirection || "row"};
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    padding-block: 1.5rem;
    @media (min-width: ${bp.md}) {
      padding-left: 3rem /* 48px */;
      padding-right: 3rem /* 48px */;
    }

    &:is(.dark *) {
      background-color: rgb(3 7 18);
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
    @media (min-width: ${bp.lg}) {
      display: flex;
    }
    &:is(.dark *) {
      color: white;
    }
  `;

  const MenuIcon = styled.svg`
    display: block;
    height: 1.25rem;
    @media (min-width: ${bp.lg}) {
      display: none;
    }
    fill: black;
    &:is(.dark *) {
      fill: white;
    }
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
    display: none;
    &:is(.dark *) {
      display: inline-block;
    }
  `;

  const NavImageDark = styled.img`
    width: 2rem;
    display: inline-block;
    &:is(.dark *) {
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

    &:is(.dark *) {
      border-color: rgb(55 65 81);
      background-color: rgb(3 7 18);
    }
  `;

  const CloseIcon = styled.svg`
    margin-left: auto;
    display: block;
    width: 100%;
    cursor: pointer;
    width: 1.5rem;
    fill: rgb(229 231 235);
    &:is(.dark *) {
      fill: rgb(229 231 235 / 0.5);
    }
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
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    border-radius: 0.375rem;
    background-color: #b9ff81;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: black;
  `;

  return (
    <StyledNav id={id} style={style} props={props}>
      <NavContainer>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <NavImageLight
            src="https://ipfs.near.social/ipfs/bafkreici2x5ecmfgjks6r4cd2ntz5hcxo27xu7j4ykhcrsfjbtmoeyeve4"
            alt="logo"
          />
          <NavImageDark
            src="https://ipfs.near.social/ipfs/bafkreidii2ec3qsi54iknwotmnnqejoe6l6nivbq2ma65v4thyp7w7dhza"
            alt="logo"
          />
          <NavList>
            {props?.navItems?.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  style={{
                    textWrap: "nowrap",
                  }}
                >
                  {item.name}
                </a>
              </li>
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

