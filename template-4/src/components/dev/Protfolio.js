import styled from "styled-components";
import { useNode } from "@craftjs/core";

const ProtfolioContainer = styled.section`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  background-color: white;
  min-height: 300px;
  max-height: 100%;
  &:not(.light *) {
    background-color: #121212;
  }
`;
const ProtfolioWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);

  &:not(.light *) {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const ProtfolioHeader = styled.h2`
  font-size: 2.25rem; // text-4xl
  font-weight: 600; // font-semibold
  color: black;

  &:not(.light *) {
    color: white;
  }
`;
const ProtfolioSubHeader = styled.p`
  font-size: 0.875rem; // text-sm
  color: rgba(0, 0, 0, 0.7);
  max-width: 32rem; // max-w-lg
  text-align: center;

  &:not(.light *) {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ProtfolioTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  color: black;

  &:not(.light *) {
    color: white;
  }
`;
const ProtfolioDescription = styled.p`
  font-size: 1rem; // text-base
  color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  &:not(.light *) {
    color: rgba(255, 255, 255, 0.6);
  }
`;
const ProtfolioButtonIcon = styled.svg`
  fill: rgba(0, 0, 0, 0.8);
  width: 1rem;
  height: 1rem;

  &:not(.light *) {
    fill: rgba(255, 255, 255, 0.8);
  }
`;

export default function Protfolio({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <ProtfolioContainer id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <div
        style={{
          maxWidth: "75rem",
          margin: "0 auto",
          padding: "5rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "36rem",
            margin: "0 auto",
            gap: "1.5rem",
          }}
        >
          <h6
            style={{
              color: "#4fe173",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            {props?.subHeaderText}
          </h6>
          <ProtfolioHeader>{props?.headerText}</ProtfolioHeader>
          <ProtfolioSubHeader>{props?.descriptionTextarea}</ProtfolioSubHeader>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "1.5rem",
            placeItems: "center",
            width: "100%",
          }}
        >
          {props?.projects?.map(
            (item, index) =>
              index < 3 && (
                <ProtfolioWrapper key={index}>
                  <img
                    src={
                      props?.imageSrc[index] ||
                      "https://ipfs.near.social/ipfs/bafkreibmn35kxn3ncag2otba5jk677scbprmmkvgpdfhgffoziseu6gxhm"
                    }
                    alt=""
                    style={{
                      aspectRatio: "16 / 9",
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "66.67%",
                      border: "1px solid #e5e7eb",
                      borderBottom: "0",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      padding: "1.5rem",
                      paddingBottom: "2rem",
                    }}
                  >
                    <ProtfolioTitle>{item?.headerText}</ProtfolioTitle>
                    <ProtfolioDescription>
                      {item?.subHeaderTextarea}
                    </ProtfolioDescription>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <ProtfolioButtonIcon
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                      </ProtfolioButtonIcon>
                      <p className="text-black dark:text-white text-xs">
                        SEE MORE
                      </p>
                    </div>
                  </div>
                </ProtfolioWrapper>
              )
          )}
        </div>
      </div>
    </ProtfolioContainer>
  );
}
