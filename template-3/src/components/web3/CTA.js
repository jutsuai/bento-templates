const style = props.style || {};
const props = props.props || {};

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const CTAWrapper = styled.div`
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
const CTAContainer = styled.div`
  max-width: 96rem;
  margin-inline: auto;
  gap: 2.5rem;
  padding: 5rem 1rem;
`;
const CTAContent = styled.div`
  background-image: url("https://ipfs.near.social/ipfs/bafkreiazq6pkk3d7vzlkvdae2gfrz2coaj32xxj7g7nycdx2fqhjeonsnu");
  background-color: #14161d;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  border-radius: 0.125rem;
  max-width: 76rem;
  border: 1px solid;
  margin-inline: auto;
  overflow: hidden;
  height: 100%;
  padding: 2.5rem;
  border-radius: 0.5rem;
  &:is(.dark *) {
    background-color: #ebe9e2;
    background-image: url("https://ipfs.near.social/ipfs/bafkreicblnj4gy73vkd4i6ikejwgfb6n2uekq6tnugdynykdrt46szi5nq");
  }

  @media (min-width: ${bp.md}) {
    padding: 8rem;
  }
`;
const CTATitle = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: white;
  font-weight: 600;

  @media (min-width: ${bp.md}) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  &:is(.dark *) {
    color: black;
  }
`;
const CTASubtitle = styled.p`
  line-height: 2.25rem;
  color: rgb(209 213 219);
  font-size: 0.8rem;

  @media (min-width: ${bp.md}) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &:is(.dark *) {
    color: #000000b3;
  }
`;
const CTAInput = styled.input`
  width: 100%;
  height: 100%;
  min-height: 3rem;
  background: transparent;
  border: 1px solid #4b5563;
  border-right: none;
  padding: 0 1rem;
  outline: none;
  color: white;
  font-size: 0.875rem;
  border-radius: 0.125rem 0 0 0.125rem;
  &::placeholder {
    color: #6b7280;
    font-size: 0.875rem;
  }

  @media (min-width: ${bp.sm}) {
    &::placeholder {
      font-size: 1rem;
    }
  }
`;
const CTABtnButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  justify-content: center;
  border: "1px solid";
  border-color: ${({ style }) => style?.accent || "#b9ff81"};
  background-color: ${({ style }) => style?.accent || "#b9ff81"};
  width: 100%;
  height: 100%;
  max-width: 10rem;
  color: black;
  border-radius: 0.125rem;
  border-start-start-radius: 0px;
  border-end-start-radius: 0px;
  padding-inline: 0.25rem;
  font-weight: 600;
  padding-block: 0.5rem;
  @media (min-width: ${bp.sm}) {
    font-size: 0.875rem;
  }
`;

  return (
    <CTAWrapper id={id} style={style}>
      <CTAContainer>
        <CTAContent>
          <CTATitle>{props?.headerText}</CTATitle>
          <CTASubtitle>{props?.subHeaderText}</CTASubtitle>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "3rem",
              maxWidth: "28rem",
              alignItems: "center",
            }}
          >
            <CTAInput placeholder="Enter your email address" />
            <CTABtnButton style={style}>
              {props?.primaryButtonText}
              <svg
                style={{
                  width: "0.7rem",
                  transform: "rotate(-0.25turn)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </CTABtnButton>
          </div>
        </CTAContent>
      </CTAContainer>
    </CTAWrapper>
  );

