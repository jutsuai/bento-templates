import styled from "styled-components";
const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const socialIcons = [
  {
    icon: "https://ipfs.near.social/ipfs/bafkreibyvzdqfnvsy7laykskljbyiscrr5egcygczroc5lvs3jeniz7ope",
    href: "https://www.linkedin.com/tryjutsu",
  },
  {
    icon: "https://ipfs.near.social/ipfs/bafkreiccsolmo2epnwlzjqufn4w2hy4pr7fg7blfldcyhyebwujidqzsz4",
    href: "https://github.com/tryjutsu",
  },
  {
    icon: "https://ipfs.near.social/ipfs/bafkreie3unrm66pdzno3peuuahfcpk6ot37gahby2larq5vkqmwaswg6ry",
    href: "https://twitter.com/tryjutsu",
  },
  {
    icon: "https://ipfs.near.social/ipfs/bafkreigiw3z7tf2szzuegrmvuybmamun5a6arg7lzsiqwaektvgp7osarq",
    href: "https://www.youtube.com/tryjutsu",
  },
  {
    icon: "https://ipfs.near.social/ipfs/bafkreig44t4oajrwl6deaurchsincm7zhjr6tgwoo23vfmm2phkrvja6hy",
    href: "https://www.facebook.com/tryjutsu",
  },
];

const MemeFooterWrapper = styled.footer`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  background-color: #f63fd7 !important;
`;
const MemeFooterContent = styled.div`
  padding: 6rem 1rem;
  width: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: right;
  max-width: ${bp.xl};

  @media (min-width: ${bp.md}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
const MemeFooterGrid = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  width: 100%;
  text-align: center;
  color: rgb(55 65 81);
  font-size: 0.875rem;
  line-height: 1.25rem;
  gap: 2.6rem;

  @media (min-width: ${bp.lg}) {
    text-align: left;

    gap: 2rem;
  }
`;

const MemeFooterIcons = styled.div`
  display: flex;
  color: black;
  align-items: center;
  gap: 1rem;
`;

const MemeFooterIconsLink = styled.a`
  padding: 0.5rem;
  border-radius: 9999px;
  aspect-ratio: 1 / 1;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #feef32;
  box-shadow: 2px 2px 0px 0px #000000;
`;

const MemeFooterLink = styled.a`
  color: black;
`;

const MemeFooterBottom = styled.div`
  max-width: 100%;
  margin-inline: auto;
  padding: 1.5rem;
  background-color: #0edc7e;
  border-top: 1px solid;
  border-color: #080a1120;
`;
const MemeFooterBottomContent = styled.p`
  color: #000000; /* text-gray-600 */
  font-size: 0.75rem; /* text-xs */
  text-align: center;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  opacity: 0.8;
  align-items: center;

  @media (min-width: ${bp.lg}) {
    align-items: flex-start;
    gap: 1rem;
  }
`;

export default function MemeFooter({ props, style, id }) {
  return (
    <MemeFooterWrapper id={id} style={style}>
      <MemeFooterContent>
        <MemeFooterGrid>
          <InfoSection>
            <h2
              style={{
                fontSize: "2rem",
                color: "black",
                fontWeight: 800,
              }}
            >
              {props?.headerText}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "black",
                fontWeight: 400,
                maxWidth: "24rem",
              }}
            >
              {props?.subHeaderText}
            </p>
            <button
              style={{
                borderBottom: "2px solid #000000",
                borderRight: "2px solid #000000",
                borderRadius: "0.3rem",
                color: "#ffffff",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "0.3rem",
                  padding: "0.5rem 1rem",
                  borderBottom: "2px solid #ffffff",
                  borderRight: "2px solid #ffffff",
                  backgroundColor: "#000000",
                  fontSize: "0.857rem",
                }}
              >
                {props?.buttonText}
              </div>
            </button>
          </InfoSection>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h3
              style={{
                fontSize: "1rem",
                color: "black",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {props?.legal?.titleText}
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                gap: "1rem",
                textAlign: "center",
              }}
            >
              {props?.legal?.data?.map((item, index) => (
                <MemeFooterLink key={index} href={item.link}>
                  {item.name}
                </MemeFooterLink>
              ))}
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h3
              style={{
                fontSize: "1rem",
                color: "black",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {props?.service?.titleText}
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                textAlign: "center",
              }}
            >
              {props?.service?.data?.map((item, index) => (
                <MemeFooterLink key={index} href={item.link}>
                  {item.name}
                </MemeFooterLink>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                color: "black",
                fontWeight: 700,
              }}
            >
              Social Media
            </h3>
            <MemeFooterIcons>
              {socialIcons?.map((item, index) => (
                <MemeFooterIconsLink key={index} href={item.href}>
                  <img src={item.icon} alt="logo" />
                </MemeFooterIconsLink>
              ))}
            </MemeFooterIcons>
          </div>
        </MemeFooterGrid>
      </MemeFooterContent>
      <MemeFooterBottom>
        <MemeFooterBottomContent>{props?.copyRight}</MemeFooterBottomContent>
      </MemeFooterBottom>
    </MemeFooterWrapper>
  );
}
