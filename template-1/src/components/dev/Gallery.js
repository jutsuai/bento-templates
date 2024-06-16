import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const GalleryWrapper = styled.section`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};
  background-color: white;
  &:not(.light *) {
    background-color: #080a11;
  }
`;

const GalleryContainer = styled.div`
  max-width: 75rem;
  width: 100%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 5rem 1rem;
  text-align: center;
  flex-direction: ${({ style }) => style?.flexDirection || "column"};

  @container (max-width: ${bp.lg}) {
    flex-direction: column !important;
  }
`;

const GalleryHeader = styled.h2`
  font-size: 1.875rem;
  color: black;
  font-weight: bold;
  margin-bottom: 1.5rem;

  &:not(.light *) {
    color: white;
  }

  @container (min-width: ${bp.xl}) {
    font-size: 3rem;
  }
`;

const GallerySubHeader = styled.p`
  font-size: 0.875rem;
  color: #4b5563;

  &:not(.light *) {
    color: #d1d5db;
  }

  @container (min-width: ${bp.lg}) {
    font-size: 1.125rem;
  }
`;

const GalleryImageContainer = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  gap: 1.5rem;

  grid-template-columns: 1fr 1fr;

  @container (min-width: ${bp.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export default function Gallery({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <GalleryWrapper id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <GalleryContainer>
        <div
          style={{
            width: "100%",
            maxWidth: "48rem",
          }}
        >
          <GalleryHeader>{props?.headerText}</GalleryHeader>
          <GallerySubHeader>{props?.subHeaderTextarea}</GallerySubHeader>
        </div>

        <GalleryImageContainer>
          {props?.imageSrc?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="bike"
              style={{
                aspectRatio: "16 / 9",
                width: "100%",
                borderRadius: "0.375rem",
                objectFit: "cover",
                objectPosition: "center",
              }}
              loading="lazy"
            />
          ))}
        </GalleryImageContainer>
      </GalleryContainer>
    </GalleryWrapper>
  );
}
