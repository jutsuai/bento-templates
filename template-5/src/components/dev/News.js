import styled from "styled-components";
import { useNode } from "@craftjs/core";

// const bp = {
//   sm: "36rem",
//   md: "42rem",
//   lg: "48rem",
//   xl: "56rem",
// };
const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

export default function News({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  const NewsWrapper = styled.section`
    padding: ${({ style }) =>
      `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
    margin: ${({ style }) =>
      `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};
    background-color: white;

    &:is(.dark) {
      background-color: #1f2937;
    }
  `;
  const NewsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 6rem 1rem;
    gap: 3.5rem;

    @container (min-width: ${bp.md}) {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    @container (min-width: ${bp.lg}) {
      gap: 0;
      grid-template-columns: repeat(2, 1fr);
    }
  `;
  const NewsColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @container (min-width: ${bp.md}) {
      gap: 3.5rem;
    }
  `;
  const NewsHeader = styled.h2`
    font-size: 2.5rem;
    color: black;
    line-height: 1.375;
    max-width: 28rem;

    &:is(.dark) {
      color: white;
    }

    @container (min-width: ${bp.md}) {
      font-size: 3rem;
      line-height: 1;
    }
  `;
  const NewsButton = styled.button`
    color: black;
    border: 2px solid;
    border-radius: 9999px;
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
  const NewsArticle = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    @container (min-width: ${bp.md}) {
      grid-template-columns: repeat(6, 1fr);
      gap: 0;
    }
  `;
  const NewsArticleIndex = styled.h3`
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: black;
    grid-column: span 1;

    &:is(.dark) {
      color: white;
    }

    @container (min-width: ${bp.md}) {
      font-size: 3.75rem;
      line-height: 1;
    }
  `;
  const NewsArticleContent = styled.div`
    grid-column: span 5;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    border-bottom: 2px solid;
    padding-bottom: 1rem;

    @container (min-width: ${bp.md}) {
      gap: 3.5rem;
    }
  `;
  const NewsArticleTitle = styled.h4`
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: black;

    &:is(.dark) {
      color: white;
    }
  `;
  const NewsArticleMetadataTitle = styled.h6`
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    color: black;

    &:is(.dark) {
      color: white;
    }
  `;
  const NewsArticleMetadataDate = styled.p`
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(0, 0, 0, 0.7);

    &:is(.dark) {
      color: rgba(255, 255, 255, 0.7);
    }
  `;

  return (
    <NewsWrapper id={id} style={style} props={props} ref={(ref) => connect(drag(ref))}>
      <NewsContent>
        <NewsColumn>
          <NewsHeader>{props?.headerText}</NewsHeader>
          <NewsButton>
            {props?.buttonText}
            <div
              style={{
                color: style?.accent || "#b9ff81",
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
                style={{
                  fontSize: "0.75rem" /* 12px */,
                  lineHeight: "1rem" /* 16px */,
                }}
                className="fa-solid fa-arrow-right"
              ></i>
            </div>
          </NewsButton>
        </NewsColumn>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          {props?.news?.map((item, index) => (
            <NewsArticle key={index}>
              <NewsArticleIndex>
                {index < 9 ? `0${index + 1}` : index + 1}
              </NewsArticleIndex>
              <NewsArticleContent>
                <NewsArticleTitle>{item?.article}</NewsArticleTitle>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <NewsArticleMetadataTitle>ARTICLES</NewsArticleMetadataTitle>
                  <NewsArticleMetadataDate>2024-02-05</NewsArticleMetadataDate>
                </div>
              </NewsArticleContent>
            </NewsArticle>
          ))}
        </div>
      </NewsContent>
    </NewsWrapper>
  );
}
