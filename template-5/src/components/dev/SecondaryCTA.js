import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const SecondaryCTAWrapper = styled.section`
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

  @container (min-width: ${bp.md}) {
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

  @container (min-width: ${bp.md}) {
    grid-column-start: 2;
  }
`;
const SecondaryCTAHeader = styled.h2`
  font-size: 2.5rem;
  line-height: 1;
  max-width: 36rem;

  @container (min-width: ${bp.sm}) {
    font-size: 3rem;
  }

  @container (min-width: ${bp.lg}) {
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

  @container (min-width: ${bp.md}) {
    position: relative;
    opacity: 1;
  }
`;
export default function SecondaryCTA({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <SecondaryCTAWrapper id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <SecondaryCTAContent>
        <SecondaryCTADesign>
          {[...new Array(100)].map((_, index) => (
            <div key={index} style={{ fontSize: "0.75rem" }}>
              +
            </div>
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
              {props?.subHeaderTextarea}
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
                <svg
                  style={{
                    width: "0.7rem",
                    transform: "rotate(-0.25turn)",
                    fill: "black",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </button>
          </div>
        </SecondaryCTAData>
      </SecondaryCTAContent>
    </SecondaryCTAWrapper>
  );
}
