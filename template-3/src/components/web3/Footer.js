const style = props.style || {};
const props = props.props || {};

// const bp = {
//   sm: "38rem",
//   md: "44rem",
//   lg: "50rem",
//   xl: "58rem",
// };
const bp = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const socialIcons = [
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/" },
  { icon: "fa-brands fa-github", href: "" },
  { icon: "fa-brands fa-x-twitter", href: "https://twitter.com/" },
  { icon: "fa-brands fa-youtube", href: "https://www.youtube.com/" },
  { icon: "fa-brands fa-square-facebook", href: "https://www.facebook.com/" },
];

  const FooterWrapper = styled.footer`
    padding: ${({ style }) =>
      `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
    margin: ${({ style }) =>
      `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

    background-color: white;
    &:is(.dark *) {
      background-color: #080a11;
    }
  `;
  const FooterContent = styled.div`
    padding: 6rem 1rem;
    width: 100%;
    margin-inline: auto;

    @media (min-width: ${bp.md}) {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  `;
  const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    width: 100%;
    text-align: center;
    color: rgb(55 65 81);
    font-size: 0.875rem;
    line-height: 1.25rem;
    gap: 2rem;

    &:is(.dark *) {
      color: rgb(209 213 219);
    }

    @media (min-width: ${bp.sm}) {
      text-align: left;
    }
  `;

  const FooterImage = styled.svg`
    max-width: 9rem;
    height: fit-content;
    fill: black;
    margin-left: 0.5rem;

    &:is(.dark *) {
      fill: white;
    }
  `;

  const FooterIcons = styled.div`
    display: flex;
    color: black;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;

    &:is(.dark *) {
      color: white;
    }
  `;

  const FooterIconsLink = styled.a`
    padding: 0.5rem;
    border-radius: 9999px;
    aspect-ratio: 1 / 1;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(20, 22, 29, 0.07);

    &:is(.dark *) {
      background-color: #14161d;
    }
  `;

  const FooterLink = styled.a`
    color: black;

    &:is(.dark *) {
      color: rgba(255, 255, 255, 0.8);
    }
  `;

  const FooterBottom = styled.div`
    max-width: 100%;
    margin-inline: auto;
    padding: 1.5rem;
    border-top: 1px solid;
    border-color: #080a1120;

    &:is(.dark *) {
      border-color: #080a11;
    }
  `;
  const FooterBottomContent = styled.p`
    color: #4b5563; /* text-gray-600 */
    font-size: 0.75rem; /* text-xs */
    text-align: left;
    &:is(.dark *) {
      color: rgb(209 213 219);
    }
  `;
  return (
    <FooterWrapper id={id} style={style} props={props}>
      <FooterContent>
        <FooterGrid>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: 0.8,
            }}
          >
            <FooterImage
              width="517"
              height="173"
              viewBox="0 0 517 173"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M130.516 35.8742V99.9947C130.516 111.885 137.028 118.891 148.564 118.891C160.1 118.891 166.54 111.885 166.54 99.9947V35.8742H192.514V102.755C192.514 125.685 175.104 140.76 148.564 140.76C122.024 140.76 104.543 125.685 104.543 102.755V35.8742H130.516ZM266.472 138H240.569V56.7523H211.127V35.8742H295.984V56.7523H266.472V138ZM310.068 108.912H334.839C335.476 116.343 342.907 121.085 353.665 121.085C363.361 121.085 370.013 116.414 370.013 109.691C370.013 104.029 365.555 100.986 353.877 98.6501L340.43 95.9607C321.746 92.422 312.121 82.2307 312.121 66.1651C312.121 46.2071 328.115 33.114 352.745 33.114C376.666 33.114 393.227 46.0655 393.652 64.962H369.659C369.093 57.7431 362.228 52.7182 353.098 52.7182C343.969 52.7182 337.953 57.0354 337.953 63.8296C337.953 69.4207 342.482 72.6763 353.24 74.7995L366.404 77.3473C386.574 81.2398 395.633 90.3696 395.633 106.577C395.633 127.879 379.355 140.76 352.603 140.76C326.771 140.76 310.493 128.587 310.068 108.912ZM441.353 35.8742V99.9947C441.353 111.885 447.864 118.891 459.4 118.891C470.936 118.891 477.376 111.885 477.376 99.9947V35.8742H503.35V102.755C503.35 125.685 485.94 140.76 459.4 140.76C432.86 140.76 415.379 125.685 415.379 102.755V35.8742H441.353Z" />
              <path d="M0 57.627V35.8418H83.0678V99.303C83.0678 122.984 63.7154 140.842 41.2971 140.842C17.7083 140.842 0 121.148 0 99.303V83.3903H21.7852V99.303C21.7852 111.003 31.588 119.054 41.2971 119.054C52.4085 119.054 61.2827 110.326 61.2827 99.303V57.627H0Z" />
              <circle cx="10.8919" cy="70.6034" r="7.2933" fill="#FFD37C" />
            </FooterImage>
            <FooterIcons>
              {socialIcons.map((item, index) => (
                <FooterIconsLink key={index} href={item.href}>
                  <i className={`${item.icon}`} />
                </FooterIconsLink>
              ))}
            </FooterIcons>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingInline: "1rem",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            {props?.legal?.map((item, index) => (
              <FooterLink key={index} href={item.link}>
                {item.name}
              </FooterLink>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingInline: "1rem",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            {props?.service?.map((item, index) => (
              <FooterLink key={index} href={item.link}>
                {item.name}
              </FooterLink>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingInline: "1rem",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            {props?.information?.map((item, index) => (
              <FooterLink key={index} href={item.link}>
                {item.name}
              </FooterLink>
            ))}
          </div>
        </FooterGrid>
      </FooterContent>
      <FooterBottom>
        <FooterBottomContent>{props?.copyRight}</FooterBottomContent>
      </FooterBottom>
    </FooterWrapper>
  );

