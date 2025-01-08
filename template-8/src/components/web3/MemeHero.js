const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const HeroWrapper = styled.div`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};
  background-color: #000000;
`;

const HeroContainer = styled.div`
  background-color: ${({ style }) => style?.accent || "#fbe901"};

  border-radius: 0 0 2rem 2rem;

  @media (min-width: ${bp.lg}) {
    border-radius: 0 0 6rem 6rem;
  }
`;

const HeroContent = styled.div`
  margin: 0 auto;
  display: flex;
  text-align: center;
  padding-inline: 1rem;
  padding: 8rem 1rem;
  justify-content: center;
  @media (min-width: ${bp.lg}) {
    justify-content: space-between;
    max-width: ${bp.xl};
    padding: 8rem 1rem;
    text-align: left;
  }
`;

const HeroImage = styled.img`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: block;
  }
`;

const HeroText = styled.h1`
  @media (min-width: ${bp.xl}) {
    font-size: 2rem;
  }
  line-height: 1.2;
  font-size: 1.5rem;
  color: #f533e3;
  font-family: Sword-Art;
`;

const HeroSubText = styled.h2`
  @media (min-width: ${bp.xl}) {
    font-size: 8rem;
    line-height: 1.2;
    margin: 0 0;
  }
  font-size: 6rem;
  margin-block: -0.875rem;
  font-family: Sword-Art;
  line-height: normal;
  margin: 1rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.2rem;
  align-items: center;

  justify-content: center;

  @media (min-width: ${bp.lg}) {
    justify-content: flex-start;
  }
`;


  return (
    <HeroWrapper style={style} id={id}>
      <HeroContainer style={style}>
        <HeroContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <HeroText>{props?.headerText}</HeroText>
            <HeroSubText>{props?.subHeaderText}</HeroSubText>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                paddingBlock: "0.2rem",
              }}
            >
              {props?.descriptionTextarea}
            </p>
            <ButtonWrapper>
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
                    padding: "0.5rem 2rem",
                    minWidth: "10rem",
                    borderBottom: "2px solid #ffffff",
                    borderRight: "2px solid #ffffff",
                    backgroundColor: "#000000",
                    fontSize: "0.857rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {props?.primaryButtonText}
                </div>
              </button>
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
                    padding: "0.5rem 2rem",
                    minWidth: "10rem",
                    borderBottom: "2px solid #ffffff",
                    borderRight: "2px solid #ffffff",
                    backgroundColor: "#f63fd7",
                    fontSize: "0.857rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {props?.secondaryButtonText}
                </div>
              </button>
            </ButtonWrapper>
          </div>
          <HeroImage
            src={props?.avatarSrc}
            alt="Trump Icon"
            style={{
              width: "30rem",
              height: "30rem",
              objectFit: "contain",
              objectPosition: "center",
              alignSelf: "center",
              margin: "0 0 0 2rem",
            }}
          />
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );

