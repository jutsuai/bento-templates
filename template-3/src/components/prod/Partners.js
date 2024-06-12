import styled from "styled-components";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

export default function Partners({ props, style, id }) {
  const logos = [
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/spikeball-color.svg",
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/shapeshift-color.svg",
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/goody-color.svg",
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/codecademy-color.svg",
    "https://cdn.jsdelivr.net/gh/adnansid99/theDeployer@master/Jutsu/companyLogos/facepunch-color.svg",
  ];

  const PartnersContainer = styled.section`
    padding: ${({ style }) =>
      `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
        style?.paddingBottom || 0
      }px ${style?.paddingLeft || 0}px`};
    margin: ${({ style }) =>
      `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
        style?.marginBottom || 0
      }px ${style?.marginLeft || 0}px`};
    background-color: white;
    &:is(.dark *) {
      background-color: #080a11;
    }
  `;
  const PartnersWrapper = styled.div`
    max-width: 96rem;
    margin-inline: auto;
    padding: 5rem 1rem;
    padding-bottom: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  `;

  const PartnersLogoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    place-items: center;
    padding-inline: 0;
    align-items: center;
    width: 100%;

    @media (min-width: ${bp.sm}) {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }
  `;

  const PartnersLogo = styled.img`
    filter: grayscale(100%);
    pointer-events: none;
    transform: translate3d(0);
    user-select: none;
    border-radius: 0px !important;

    &:is(.dark *) {
      filter: brightness(0.35) grayscale(100%) invert(100%) saturate(0.15)
        sepia(0.01);
    }
  `;

  return (
    <PartnersContainer id={id} style={style} props={props}>
      <PartnersWrapper>
        <PartnersLogoContainer>
          {(logos || props?.logos)?.map((logo, index) => (
            <PartnersLogo key={index} src={logo} alt="logos" />
          ))}
        </PartnersLogoContainer>
      </PartnersWrapper>
    </PartnersContainer>
  );
}
