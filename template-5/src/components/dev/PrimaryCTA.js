import { useNode } from "@craftjs/core";
import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

export default function PrimaryCTA({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  const PrimaryCTAWrapper = styled.section`
    padding: ${({ style }) =>
      `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
    margin: ${({ style }) =>
      `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

    background-image: url("https://ipfs.near.social/ipfs/bafkreicgf3ripaiuwas5basym4m5wkcvtvg2lhoawcbbji6e3smkkcuwkq");
    background-position: right 20% top 0px;
    background-repeat: no-repeat;
    height: 100dvh;
    max-height: 100%;
    padding-block: 6rem;
    background-color: #28282c;
  `;
  const PrimaryCTAContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    gap: 3.5rem;

    @container (min-width: ${bp.md}) {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  `;
  const PrimaryCTAHeader = styled.h2`
    font-size: 3.75rem;
    line-height: 1;
    max-width: 48rem;
    color: white;
    word-break: break-word;

    @container (min-width: ${bp.md}) {
      font-size: 8rem;
    }
  `;
  const PrimaryCTASubHeader = styled.h6`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 28rem;

    @container (min-width: ${bp.md}) {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    @container (min-width: ${bp.lg}) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  `;

  return (
    <PrimaryCTAWrapper
      ref={(ref) => connect(drag(ref))}
      id={id}
      style={style}
      props={props}
    >
      <PrimaryCTAContent>
        <PrimaryCTAHeader>{props?.headerText}</PrimaryCTAHeader>
        <PrimaryCTASubHeader>{props?.subHeaderText}</PrimaryCTASubHeader>
        <button
          style={{
            backgroundColor: style?.accent || "#b9ff81",
            borderRadius: "9999px",
            padding: "0.75rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            fontWeight: "600",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          {props?.primaryButtonText}
          <div
            style={{
              color: style?.accent,
              height: "1.5rem",
              width: "1.5rem",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(31 41 55)",
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
      </PrimaryCTAContent>
    </PrimaryCTAWrapper>
  );
}
