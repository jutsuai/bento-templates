import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  position: relative;
  overflow: hidden;
  background-color: #f2f2f2;

  &:not(.light *) {
    background-color: #1e1e1e;
  }
`;

const FooterHeader = styled.h2`
  font-size: 1.875rem; // text-3xl
  z-index: 10;
  font-weight: 500; // font-medium
  color: black;

  &:not(.light *) {
    color: white;
  }
`;

const FooterMoreInfo = styled.p`
  color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  &:not(.light *) {
    color: rgba(255, 255, 255, 0.8);
  }
`;
const FooterAccentImage = styled.img`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  z-index: 0;
  height: 100%;
  margin-inline: auto; // mx-auto
  object-fit: cover;
  object-position: center;
  opacity: 0.1;

  &:not(.light *) {
    opacity: 1;
  }
`;

export default function ProtoneFooter({ props, style, id }) {
  return (
    <FooterWrapper id={id} style={style}>
      <div
        style={{
          maxWidth: "96rem",
          margin: "0 auto",
          padding: "5rem 1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            zIndex: "10",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1.5rem",
          }}
        >
          <FooterHeader>{props?.headerText}</FooterHeader>
          <div
            style={{
              width: "100%",
              zIndex: "10",
              maxWidth: "150px",
              height: "2px",
              backgroundColor: "#6fff93",
            }}
          />
          <div
            style={{
              zIndex: "10",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <FooterMoreInfo>{props?.emailText}</FooterMoreInfo>
            <FooterMoreInfo>{props?.phoneText}</FooterMoreInfo>
            <FooterMoreInfo>{props?.addressText}</FooterMoreInfo>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <svg
              style={{
                fill: "#6fff93",
                height: "25px",
                width: "25px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>

            <svg
              style={{
                fill: "#6fff93",
                height: "25px",
                width: "25px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>

            <svg
              style={{
                fill: "#6fff93",
                height: "25px",
                width: "25px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
            </svg>
          </div>
          <FooterMoreInfo>{props?.subHeaderTextarea}</FooterMoreInfo>
        </div>
      </div>
      <FooterAccentImage
        src="https://ipfs.near.social/ipfs/bafkreihxnynyx5buylxythhytug5w57stzf3ufwwhyz3cmmc2ongvhrdwm"
        alt="footer"
      />
    </FooterWrapper>
  );
}
