const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const NumbersWrapper = styled.div`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  background-color: white;

  &:not(.light *) {
    background-color: #121212;
  }
`;
const NumbersContainer = styled.div`
  background-color: ${({ accent }) => accent || "#412dff"};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 0.75rem; // rounded-xl
  position: relative;

  @media (min-width: ${bp.md}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${bp.lg}) {
    border-top-right-radius: 0; // lg:rounded-tr-none
  }
`;


  return (
    <NumbersWrapper id={id} style={style}>
      <div
        style={{
          maxWidth: "96rem",
          marginInline: "auto",
          paddingInline: "1rem",
        }}
      >
        <NumbersContainer accent={style?.accent}>
          <img
            src="https://ipfs.near.social/ipfs/bafkreiest2ftnmktmisw64zkin2zcctdsjf7lxxlaiqgqajonjmyocaftm"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {props?.data?.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingBlock: "3.5rem",
                gap: "0.75rem",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: "700",
                  lineHeight: "1",
                  textAlign: "center",
                }}
              >
                {item.numberText}+
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {item.categoryText}
              </p>
            </div>
          ))}
        </NumbersContainer>
      </div>
    </NumbersWrapper>
  );

