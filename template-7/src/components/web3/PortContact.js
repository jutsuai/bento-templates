const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const ContactWrapper = styled.div`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};

  background-color: #f9fafb;
  &:not(.light *) {
    background-color: #111827;
  }
`;

const ContactHeader = styled.h1`
  color: #000;
  &:not(.light *) {
    color: #fff;
  }

  font-weight: 500;
  font-size: 2.2rem;
`;

const ContactSubHeader = styled.p`
  color: #000000cc;
  &:not(.light *) {
    color: #ffffffcc;
  }
  font-weight: 400;
  text-align: center;
  font-size: 0.875rem;

  @media (min-width: ${bp.sm}) {
    font-size: 1rem;
  }
`;

const ContactFormInput = styled.input`
  padding: 0.7rem 1rem;
  outline: none;
  border-radius: 0.5rem;
  border: 1px solid #29303d20;
  &:not(.light *) {
    background-color: #29303d;
    border: none;
  }
  font-size: 1rem;
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
`;

const ContactFormTextArea = styled.textarea`
  padding: 0.7rem 1rem;
  resize: none;
  outline: none;
  border-radius: 0.5rem;
  border: 1px solid #29303d20;
  &:not(.light *) {
    background-color: #29303d;
    border: none;
  }
  font-size: 1rem;
  color: #000;
  &:not(.light *) {
    color: #fff;
  }
`;

const ContactButton = styled.button`
  border: none;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  border-radius: 9999px;
  color: #fff;
  background-color: #29303dcc;

  &:not(.light *) {
    background-color: #29303dcc;
  }
`;


  return (
    <ContactWrapper style={style} id={id}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          maxWidth: bp.sm,
          margin: "0 auto",
          padding: "4rem 1rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <ContactHeader>{props?.headerText}</ContactHeader>
          <ContactSubHeader>{props?.subHeaderTextarea}</ContactSubHeader>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <ContactFormInput type="email" placeholder="Your email.." />
          <ContactFormTextArea
            rows={8}
            type="text"
            placeholder="Your message.."
          />
          <ContactButton>
            {props?.buttonText}
            <svg
              style={{
                fill: "currentColor",
                width: "1rem",
                height: "1rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          </ContactButton>
        </div>
      </div>
    </ContactWrapper>
  );

