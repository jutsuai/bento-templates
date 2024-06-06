import styled from "styled-components";

// const bp = {
//   sm: "36rem",
//   md: "42rem",
//   lg: "48rem",
//   xl: "56rem",
// };
const bp = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};
export default function HeroSection({ props, style, id }) {
  const HeroSectionWrapper = styled.section`
    padding: ${({ style }) =>
      `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
    margin: ${({ style }) =>
      `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};
    background-image: ${({ props }) => `url(${props?.backgroundImageUrl})`};
    background-size: cover;
    background-position: center;
  `;

  const SectionContent = styled.div`
    position: relative;
    padding: 1rem;
    min-height: 100dvh;
    max-height: 100%;
    padding-block: 6rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: ${bp.md}) {
      padding-inline: 3rem;
    }
    @media (min-width: ${bp.lg}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `;

  const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    gap: 4rem;
    grid-column: span 1 / span 1;

    @media (min-width: ${bp.lg}) {
      text-align: left;
    }
    @media (min-width: ${bp.lg}) {
      align-items: flex-start;
    }
  `;

  const HeaderText = styled.h1`
    font-size: 3rem;
    line-height: 1;
    color: rgb(255 255 255);
    filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
      drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));

    @media (min-width: ${bp.sm}) {
      font-size: 4.5rem;
    }
    @media (min-width: ${bp.md}) {
      font-size: 8rem;
    }
  `;

  const SubHeaderText = styled.h6`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(229 231 235);
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
      drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    max-width: 36rem;

    @media (min-width: ${bp.md}) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    @media (min-width: ${bp.lg}) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  `;

  const ScrollDownButton = styled.button`
    background-color: ${({ style }) => style?.accent || "#b9ff81"};
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 0.875rem;
    font-weight: 600;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    position: absolute;
    bottom: 2.5rem;
  `;

  return (
    <HeroSectionWrapper id={id} style={style} props={props}>
      <SectionContent>
        <ContentColumn>
          <HeaderText>{props?.headerText}</HeaderText>
          <SubHeaderText>{props?.subHeaderText}</SubHeaderText>
          <ScrollDownButton style={style}>
            <i className="fa-solid fa-arrow-down"></i>
          </ScrollDownButton>
        </ContentColumn>
      </SectionContent>
    </HeroSectionWrapper>
  );
}
