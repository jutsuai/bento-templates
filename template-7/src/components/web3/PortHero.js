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

  background-color: #f9fafb;
  &:not(.light *) {
    background-color: #111827;
  }
  overflow: hidden;
`;

const BackgroundDiv1 = styled.div`
  background-color: #fbe2e3;
  position: absolute;
  top: -10rem;
  right: 11rem;
  height: 31.25rem;
  width: 31.25rem;
  border-radius: 9999px;
  filter: blur(10rem);

  @media (min-width: ${bp.sm}) {
    width: 68.75rem;
  }

  &:not(.light *) {
    background-color: #946263;
  }
`;

const BackgroundDiv2 = styled.div`
  background-color: #dbd7fb;
  position: absolute;
  top: -6rem;
  left: -35rem;
  height: 31.25rem;
  width: 50rem;
  border-radius: 9999px;
  filter: blur(10rem);

  @media (min-width: ${bp.sm}) {
    width: 68.75rem;
  }

  @media (min-width: ${bp.md}) {
    left: -33rem;
  }

  @media (min-width: ${bp.lg}) {
    left: -28rem;
  }

  @media (min-width: ${bp.xl}) {
    left: -15rem;
  }

  &:not(.light *) {
    background-color: #676394;
  }
`;

const HeroContent = styled.div`
  padding-inline: 1rem;
  padding-top: 10rem;
  padding-bottom: 8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const HeroHeader = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  max-width: ${bp.md};
  color: #000;
  &:not(.light *) {
    color: #fff;
  }

  @media (min-width: ${bp.sm}) {
    font-size: 2.4rem;
  }
`;

const HeroButton = styled.button`
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.5rem;
  border-radius: 9999px;
  background-color: #111827;
  color: #fff;
  fill: #ffffff80;

  border: 1px solid #29303dcc;
`;

const HeroIconButton = styled.a`
  border: none;
  border: 1px solid #11182720;
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  fill: #111827;

  &:not(.light *) {
    background-color: #464252;
    fill: #b7b5bd;
    border: none;
  }
`;

const Separator = styled.div`
  width: 5px;
  height: 70px;
  border-radius: 1rem;
  margin-top: 5rem;
  display: none;

  background-color: #e5e7eb;
  &:not(.light *) {
    background-color: #434555;
  }

  @media (min-width: ${bp.sm}) {
    display: inline-block;
  }
`;


  return (
    <HeroWrapper style={style} id={id}>
      <BackgroundDiv1 />
      <BackgroundDiv2 />
      <HeroContent>
        <div
          style={{
            position: "relative",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <img
            src={props?.avatarSrc}
            style={{
              border: "5px solid white",
              width: "100px",
              height: "100px",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "100%",
            }}
            alt="hero"
          />
          <span
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              fontSize: "2rem",
            }}
          >
            👋
          </span>
        </div>
        <HeroHeader>{props?.headerText}</HeroHeader>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <HeroButton accent={style?.accent}>
            {props?.buttonText}
            <svg
              style={{
                width: "1rem",
                fill: "inherit",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </HeroButton>
          <HeroIconButton href={props?.linkedinUrlText}>
            <svg
              style={{
                width: "1.2rem",
                height: "1.2rem",
                fill: "inherit",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </HeroIconButton>
          <HeroIconButton href={props?.twitterUrlText}>
            <svg
              style={{
                width: "1.2rem",
                height: "1.2rem",
                fill: "inherit",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </HeroIconButton>
        </div>
        <Separator />
      </HeroContent>
    </HeroWrapper>
  );

