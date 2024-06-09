import { useNode } from "@craftjs/core";
import styled from "styled-components";

const bp = {
  sm: "42rem",
  md: "48rem",
  lg: "56rem",
  xl: "64rem",
};

export default function Article({ props, style, id }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  const ArticleWrapper = styled.section`
    padding: ${({ style }) =>
      `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
        style?.paddingBottom || 0
      }px ${style?.paddingLeft || 0}px`};
    margin: ${({ style }) =>
      `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
        style?.marginBottom || 0
      }px ${style?.marginLeft || 0}px`};

    background-image: ${({ bgImg }) => `url(${bgImg})`};
    background-size: cover;
    background-position: center;
  `;

  const ArticleContent = styled.div`
    padding: 1rem;
    height: 100dvh;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @container (min-width: ${bp.md}) {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    @container (min-width: ${bp.xl}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const ArticleColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 4rem;

    @container (min-width: ${bp.md}) {
      padding: 4rem;
    }

    @container (min-width: ${bp.lg}) {
      grid-column-start: 2;
      padding: 4rem;
    }

    @container (min-width: ${bp.xl}) {
      padding: 8rem;
    }
  `;
  const ArticleHeaderText = styled.h4`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;

    @container (min-width: ${bp.md}) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  `;
  const ArticleSubHeaderText = styled.p`
    line-height: 1.25rem;
    font-size: 0.875rem;

    @container (min-width: ${bp.md}) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  `;

  const ArticleMetadataTitle = styled.h6`
    line-height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;

    @container (min-width: ${bp.md}) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  `;
  const ArticleMetadataDate = styled.p`
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.75rem;
    line-height: 1.2rem;

    @container (min-width: ${bp.md}) {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  `;

  return (
    <ArticleWrapper
      ref={(ref) => connect(drag(ref))}
      id={id}
      style={style}
      props={props}
    >
      <ArticleContent>
        <ArticleColumn>
          <div
            style={{
              backgroundColor: style?.accent || "#b9ff81",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: "2rem",
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "0.375rem",
              boxShadow: "0 0.5rem 1rem 0 rgb(0 0 0 / 15%)",
            }}
          >
            <ArticleHeaderText>{props?.headerText}</ArticleHeaderText>
            <ArticleSubHeaderText>{props?.subHeaderText}</ArticleSubHeaderText>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <ArticleMetadataTitle>ARTICLES</ArticleMetadataTitle>
                <ArticleMetadataDate>2024-02-05</ArticleMetadataDate>
              </div>
              <div
                style={{
                  color: style?.accent || "#b9ff81",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "2.5rem",
                  width: "2.5rem",
                  backgroundColor: "#333",
                  borderRadius: "100%",
                }}
              >
                <i
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                  }}
                  className="fa-solid fa-arrow-right"
                ></i>
              </div>
            </div>
          </div>
        </ArticleColumn>
      </ArticleContent>
    </ArticleWrapper>
  );
}
