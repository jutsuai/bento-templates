const style = props.style || {};
const props = props.props || {};

// const bp = {
//   sm: "38rem",
//   md: "44rem",
//   lg: "50rem",
//   xl: "58rem",
// };
const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};


  const SecondaryCTAWrapper = styled.div`
    padding: ${({ style }) =>
      `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
    margin: ${({ style }) =>
      `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

    background-color: ${({ style }) => `${style?.accent || "#b9ff81"}`};
    width: 100%;
    height: 100dvh;
    max-height: 100%;
  `;
  const SecondaryCTAContent = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem;
    gap: 5rem;
    height: 100%;

    @media (min-width: ${bp.md}) {
      grid-template-columns: repeat(2, 1fr);
      padding-left: 3rem;
      padding-right: 3rem;
    }
  `;
  const SecondaryCTAData = styled.div`
    grid-column: span 1;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${bp.md}) {
      grid-column-start: 2;
    }
  `;
  const SecondaryCTAHeader = styled.h2`
    font-size: 2.5rem;
    line-height: 1;
    max-width: 36rem;

    @media (min-width: ${bp.sm}) {
      font-size: 3rem;
    }

    @media (min-width: ${bp.lg}) {
      font-size: 4.5rem;
    }
  `;
  const SecondaryCTASubHeader = styled.p``;
  const SecondaryCTADesign = styled.div`
    position: absolute;
    opacity: 0.5;
    display: grid;
    grid-template-columns: repeat(10, minmax(10%, 1fr));
    grid-template-rows: repeat(10, minmax(10%, 1fr));
    width: 100%;
    height: 100%;
    place-items: center;

    @media (min-width: ${bp.md}) {
      position: relative;
      opacity: 1;
    }
  `;

  return (
    <SecondaryCTAWrapper id={id} style={style} props={props}>
      <SecondaryCTAContent>
        <SecondaryCTADesign>
          {[...new Array(100)].map((_, index) => (
            <i
              class="fa-solid fa-plus"
              style={{
                fontSize: "0.75rem",
                opacity: "0.6",
              }}
              key={index}
            />
          ))}
        </SecondaryCTADesign>
        <SecondaryCTAData>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            <SecondaryCTAHeader>{props?.headerText}</SecondaryCTAHeader>
            <SecondaryCTASubHeader className="text-sm sm:text-base lg:text-lg max-w-lg">
              {props?.subHeaderText}
            </SecondaryCTASubHeader>
            <button
              style={{
                backgroundColor: "#28282c",
                color: "white",
                borderRadius: "9999px",
                padding: "0.75rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                fontWeight: "600",
                width: "fit-content",
                height: "fit-content",
              }}
            >
              {props?.primaryButtonText}
              <div
                style={{
                  backgroundColor: style?.accent || "#b9ff81",
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#28282c",
                }}
              >
                <i
                  className="fa-solid fa-arrow-right"
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                  }}
                ></i>
              </div>
            </button>
          </div>
        </SecondaryCTAData>
      </SecondaryCTAContent>
    </SecondaryCTAWrapper>
  );

