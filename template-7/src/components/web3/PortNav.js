const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const NavWrapper = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.8rem 0.6rem;
  border-radius: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  flex-wrap: wrap;

  text-align: center;
  background-color: #ffffff;
  margin-top: 0;

  &:not(.light *) {
    background-color: #1d1b2b;
  }
  @media (min-width: ${bp.sm}) {
    border-radius: 9999px;
    width: fit-content;
    padding: 0.5rem 0.875rem;
    margin-top: 2rem;
  }
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 0.875rem;
  padding: 0.2rem 0.875rem;
  font-weight: 500;
  border-radius: 9999px;

  @media (min-width: ${bp.sm}) {
    padding: 0.5rem 1rem;
  }

  color: #000000cc;
  &:not(.light *) {
    color: #ffffffcc;
  }

  &:hover {
    &:not(.light *) {
      background-color: #1f2937;
    }
    background-color: #f3f4f6;
  }
`;


  return (
    <NavWrapper style={style} id={id}>
      <NavContent>
        {props?.navItems?.map((item, index) => (
          <NavItem key={index}>
            <a href={item?.link}>{item?.name}</a>
          </NavItem>
        ))}
      </NavContent>
    </NavWrapper>
  );

