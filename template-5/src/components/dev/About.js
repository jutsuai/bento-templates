import styled from "styled-components";
import { useNode } from "@craftjs/core";

export default function About({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  const AboutWrapper = styled.section`
    padding: ${({ style }) =>
      `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
    margin: ${({ style }) =>
      `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};
    background-color: white;

    &:is(.dark) {
      background-color: #1f2937;
    }
  `;

  const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6rem 1rem;
    gap: 1.5rem;
    width: 100%;

    @container (min-width: ${bp.md}) {
      padding-inline: 3rem;
    }
  `;

  const AboutLeft = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @container (min-width: ${bp.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const AboutHeader = styled.h2`
    font-size: 1.25rem;
    line-height: 1.5;
    color: black;
    grid-column: span 1;

    &:is(.dark) {
      color: white;
    }

    @container (min-width: ${bp.md}) {
      font-size: 2.5rem;
      line-height: 1.5;
    }
  `;

  const AboutRight = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @container (min-width: ${bp.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const AboutRightContainer = styled.div`
    grid-column-start: 2;
  `;

  const MoreInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    padding-block: 3.5rem;
    border-top: 1px solid;

    @container (min-width: ${bp.md}) {
      grid-template-columns: repeat(6, 1fr);
    }
  `;

  const MoreInfoHeader = styled.h3`
    grid-column: span 2;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500; /* font-medium */
    color: black;

    &:is(.dark) {
      color: white;
    }

    @container (min-width: ${bp.md}) {
      font-size: 1.5rem;
      line-height: 2rem;
      width: min-content;
    }
  `;

  const MoreInfoDescription = styled.p`
    grid-column: span 4;
    font-size: 0.875rem;
    line-height: 1.25rem /* 20px */;
    color: rgba(0, 0, 0, 0.8);

    &:is(.dark) {
      color: rgba(255, 255, 255, 0.8);
    }

    @container (min-width: ${bp.md}) {
      font-size: 1.125rem; /* text-lg */
      line-height: 1.75rem /* 28px */;
    }
  `;

  const Button = styled.button`
    border: 2px solid;
    border-radius: 4rem;
    color: black;
    padding: 0.75rem 1.5rem;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-weight: 600;

    &:is(.dark) {
      color: white;
    }
  `;

  return (
    <AboutWrapper id={id} ref={(ref) => connect(drag(ref))}>
      <AboutContent>
        <AboutLeft>
          <AboutHeader>{props?.headerText}</AboutHeader>
        </AboutLeft>
        <AboutRight>
          <AboutRightContainer>
            {props?.moreInfo?.map((item, index) => (
              <MoreInfoWrapper key={index}>
                <MoreInfoHeader>{item?.title}</MoreInfoHeader>
                <MoreInfoDescription>{item?.description}</MoreInfoDescription>
              </MoreInfoWrapper>
            ))}
            <Button>
              {props?.buttonText}
              <div
                style={{
                  color: style?.accent || "#b9ff81",
                  height: 24,
                  width: 24,
                  backgroundColor: "rgb(31 41 55)",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
                  className="fa-solid fa-arrow-right"
                />
              </div>
            </Button>
          </AboutRightContainer>
        </AboutRight>
      </AboutContent>
    </AboutWrapper>
  );
}
