const style = props.style || {};
const props = props.props || {};



const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const HeroSectionWrapper = styled.div`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};
  background-color: white;

  height: calc(100vh - 84px);
  position: relative;

  &:not(.light *) {
    background-color: #121212;
  }
`;

const SectionContent = styled.div`
  display: flex;
  max-width: 96rem;
  margin-inline: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  gap: 4rem;
  z-index: 20;

  @media (min-width: ${bp.lg}) {
    justify-content: space-between;
  }
`;
const LeftContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem; // gap-8
  z-index: 10;

  @media (min-width: ${bp.lg}) {
    align-items: flex-start;
    text-align: left;
  }
`;
const HeaderText = styled.h1`
  font-size: 2.5rem; // text-4xl
  line-height: 2.5rem;
  max-width: 36rem; // max-w-xl
  line-height: 1.5;
  font-weight: bold;
  color: black;

  &:not(.light *) {
    color: white;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 3rem; // lg:text-5xl
  }

  @media (min-width: ${bp.xl}) {
    font-size: 3.5rem; // xl:text-6xl
  }
`;
const SubHeaderText = styled.p`
  font-size: 1rem; // text-base
  max-width: 36rem; // max-w-xl
  color: #4b5563; // text-gray-600

  &:not(.light *) {
    color: #d1d5db; // dark:text-gray-300
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.125rem; // lg:text-lg
  }
`;
const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; // gap-4

  @media (min-width: ${bp.sm}) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  white-space: nowrap;
  border: none;
  color: black;
  background-color: transparent;
  padding: 0.75rem 2.5rem; // py-3 px-10
  font-size: 0.875rem; // text-sm
  font-weight: 500; // font-medium
  display: flex;
  align-items: center;
  gap: 0.5rem; // gap-2
  border-radius: 0.375rem; // rounded-md

  &:not(.light *) {
    color: white;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: none;
  flex: 1;
  z-index: 10;

  @media (min-width: ${bp.lg}) {
    display: block;
  }
`;
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;

  &:not(.light *) {
    opacity: 1;
  }
`;


  return (
    <HeroSectionWrapper id={id} style={style}>
      <SectionContent>
        <LeftContent>
          <HeaderText>{props?.headerText}</HeaderText>
          <SubHeaderText>{props?.subHeaderTextarea}</SubHeaderText>
          <ButtonContainer>
            <button
              style={{
                backgroundColor: style?.accent || "#412dff",
                whiteSpace: "nowrap",
                borderRadius: "0.375rem", // equivalent to rounded-md
                border: "none",
                padding: "0.75rem 2.5rem", // equivalent to py-3 px-10
                fontSize: "0.875rem", // equivalent to text-sm
                fontWeight: "500", // equivalent to font-medium
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem", // equivalent to gap-2
              }}
            >
              <svg
                style={{
                  height: "1.25rem",
                  marginLeft: "-0.25rem",
                  fill: "white",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              {props?.primaryButtonText}
            </button>
            <Button>
              <svg
                style={{
                  height: "1.25rem",
                  marginLeft: "-0.25rem",
                  fill: "currentColor",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
              </svg>
              {props?.secondaryButtonText}
            </Button>
          </ButtonContainer>
        </LeftContent>

        <ImageContainer>
          <img
            src={props?.imageSrc}
            alt="hero"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            loading="lazy"
          />
        </ImageContainer>
      </SectionContent>
      <BackgroundImage
        src="https://ipfs.near.social/ipfs/bafkreihg6j6lusj3qwekfnquxdz2tatgofurhsaivviu37ozvnvj7wwjxq"
        alt=""
      />
    </HeroSectionWrapper>
  );

