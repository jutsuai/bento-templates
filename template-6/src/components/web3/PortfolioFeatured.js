const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const FeaturedWrapper = styled.div`
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

const FeaturedContent = styled.div`
  max-width: ${bp.xl};
  margin-inline: auto;
  display: grid;
  padding-inline: 2rem;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  border: 1px solid #ffffff30;
  aspect-ratio: 1/1;

  @media (min-width: ${bp.sm}) {
    border-radius: 3rem;
  }
`;

const FeaturedBoxContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, #00000050 50%, #ffffff00);
  backdrop-filter: blur(2px);
  padding: 2rem;

  @media (min-width: ${bp.sm}) {
    padding: 3rem;
  }
`;

const FeaturedBoxHeader = styled.h1`
  color: #fff;
  font-size: 1.357rem;
  font-weight: 500;
  text-shadow: 0 0 20px #00000040;

  @media (min-width: ${bp.sm}) {
    font-size: 2rem;
  }
`;

const FeaturedBoxSubHeader = styled.p`
  color: #fff;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  text-shadow: 0 0 20px #00000020;

  @media (min-width: ${bp.sm}) {
    font-size: 1rem;
  }
`;


  return (
    <FeaturedWrapper style={style} id={id}>
      <FeaturedContent>
        {props?.projects?.map((item, index) => (
          <FeaturedBox key={index}>
            <img
              src={item?.imageSrc || "https://via.placeholder.com/500"}
              alt="placeholder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <FeaturedBoxContent>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <FeaturedBoxHeader>{item?.headerText}</FeaturedBoxHeader>
                <a
                  href={item?.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#21212180",
                    padding: "0.8rem",
                    borderRadius: "100%",
                    zIndex: "10",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    style={{
                      transform: "rotate(320deg)",
                      width: "1rem",
                      height: "1rem",
                      fill: style?.accent + 80,
                      opacity: "0.8",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </a>
              </div>
              <FeaturedBoxSubHeader>{item?.subHeaderText}</FeaturedBoxSubHeader>
            </FeaturedBoxContent>
          </FeaturedBox>
        ))}
      </FeaturedContent>
    </FeaturedWrapper>
  );

