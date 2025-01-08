import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const MemeHowToGetWrapper = styled.nav`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};

  background-color: #5b8bee;
  position: relative;
  overflow-x: hidden;
`;

const MemeHowToGetContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 8rem 1rem;
  @container (min-width: ${bp.lg}) {
    max-width: ${bp.xl};

    padding: 8rem 1rem;
  }
`;

const Image1 = styled.img`
  position: absolute;
  top: 10;
  right: 0;
  transform: translateX(30px) translateY(40px);

  width: 7rem;
  @container (min-width: ${bp.lg}) {
    width: auto;
    transform: translateX(40px) translateY(40px);
  }
`;

const Image2 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(50%) translateY(30px);
  left: 0;

  width: 6rem;
  @container (min-width: ${bp.lg}) {
    width: auto;
  }
`;

const HeaderText = styled.h1`
  @container (min-width: ${bp.lg}) {
    font-size: 4rem;
    text-align: left;
    line-height: normal;
  }
  font-size: 2rem;
  text-align: center;
  color: #ffffff;
  font-family: Sword-Art;
  text-transform: uppercase;
  max-width: ${bp?.sm};
`;

const SubheaderText = styled.p`
  color: #ffffffcc;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  max-width: ${bp?.sm};
  margin-left: auto;
  text-align: center;

  @container (min-width: ${bp.lg}) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

export default function MemeHowToGet({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <MemeHowToGetWrapper style={style} id={id} ref={(ref) => connect(drag(ref))}>
      <Image1
        src="https://ipfs.near.social/ipfs/bafkreigphy57rzcp45rhgi7va3rbpp5phcgrhfi3lswsrfxfnk7qd46ddy"
        alt="headerImage"
      />
      <Image2
        src="https://ipfs.near.social/ipfs/bafkreia6r47lw5bioff2yaswnkjaenre33w33npjg5ddpbmcfiailtomfq"
        alt="headersdImage"
      />
      <MemeHowToGetContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <HeaderText>{props?.headerText}</HeaderText>

          <SubheaderText>{props?.subHeaderTextarea}</SubheaderText>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              width: "100%",
              gap: "2rem",
              maxWidth: `${bp.lg}`,
              marginTop: "6rem",
              marginInline: "auto",
              paddingInline: "1rem",
            }}
          >
            {props?.cards &&
              props?.cards?.length > 0 &&
              props?.cards?.map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ffffff",
                    padding: "2rem",
                    gap: "0.5rem",
                    borderRadius: "3rem",
                    borderTopLeftRadius: "2.4rem",
                    borderBottomRightRadius: "2.4rem",
                    boxShadow: "8px 8px 0px 0px #000000",
                  }}
                >
                  <p
                    style={{
                      padding: "0.875rem",
                      borderRadius: "100%",
                      backgroundColor: "#feef32",
                      width: "4rem",
                      height: "4rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "2rem",
                      fontFamily: "Sword-Art",
                      position: "absolute",
                      top: "-1rem",
                      left: "-1rem",
                      border: "2px solid #000000",
                      boxShadow: "3px 3px 0px 0px #000000",
                    }}
                  >
                    {index + 1}
                  </p>
                  <h2
                    style={{
                      marginTop: "1.7rem",
                      fontSize: "1.8rem",
                      color: "#000000",
                      fontFamily: "Sword-Art",
                      textTransform: "uppercase",
                      maxWidth: bp?.sm,
                    }}
                  >
                    {item?.titleText}
                  </h2>
                  <p
                    style={{
                      color: "gray",
                      fontSize: "0.875rem",

                      fontWeight: 500,
                    }}
                  >
                    {item?.descriptionTextarea}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </MemeHowToGetContent>
    </MemeHowToGetWrapper>
  );
}
