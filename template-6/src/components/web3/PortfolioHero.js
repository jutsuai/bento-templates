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
  background-color: #fff;
  &:not(.light *) {
    background-color: #09050f;
  }
`;

const HeroContent = styled.div`
  max-width: ${bp.xl};
  margin-inline: auto;
  padding-inline: 2rem;
  padding-block: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 8fr 4fr;

  @media (max-width: ${bp.md}) {
    grid-template-columns: 1fr;
  }
`;

const HeroContentCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  overflow: hidden;
  gap: 1rem;
  border-radius: 2rem;
  padding: 2rem;
  @media (min-width: ${bp.lg}) {
    gap: 2rem;
    border-radius: 3rem;
    padding: 4rem;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: ${({ accent }) =>
      `linear-gradient(to left bottom, ${accent} -90%, transparent 40%),
      linear-gradient(to left top, #03284f -80%, transparent 50%),
      linear-gradient(to right,#39404f10 , transparent)`};
  }

  border-color: #00000010;
  &:not(.light *) {
    border-color: #ffffff20;
  }
`;

const HeroHeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  color: #000;
  &:not(.light *) {
    color: #fff;
  }
`;

const HeroHeading = styled.h1`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
  max-width: 600px;
  line-height: 1.2;
  font-size: 1.5rem;
  @media (min-width: ${bp.sm}) {
    font-size: 2rem;
  }
  @media (min-width: ${bp.lg}) {
    font-size: 3.5rem;
  }
`;

const HeroSubHeading = styled.h3`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
  opacity: 0.6;
  font-size: 0.875rem;
  max-width: 438px;

  @media (min-width: ${bp.sm}) {
    font-size: 1rem;
  }
  @media (min-width: ${bp.lg}) {
    font-size: 1.25rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 2rem;
  aspect-ratio: 1/1;

  @media (min-width: ${bp.lg}) {
    border-radius: 3rem;
  }
`;


  return (
    <HeroWrapper style={style} id={id}>
      <HeroContent>
        <HeroContentCard accent={style?.accent}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <img
              src={props?.user?.avatarSrc}
              alt="Portfolio"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <HeroHeaderContent>
              <h4
                style={{
                  color: "inherit",
                  fontSize: "1.25rem",
                }}
              >
                {props?.user?.nameText}
              </h4>
              <p
                style={{
                  color: "inherit",
                  opacity: 0.5,
                  fontSize: "0.875rem",
                }}
              >
                {props?.user?.titleText}
              </p>
            </HeroHeaderContent>
          </div>
          <HeroHeading>{props?.headerText}</HeroHeading>
          <HeroSubHeading>{props?.subHeaderTextarea}</HeroSubHeading>
        </HeroContentCard>

        <HeroImage src={props?.imageSrc} alt="Portfolio" />
      </HeroContent>
    </HeroWrapper>
  );

