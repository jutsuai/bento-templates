import styled from "styled-components";
import { useNode } from "@craftjs/core";

const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const TestimonialWrapper = styled.section`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  background-color: white;
  min-height: 400px;
  max-height: 100%;

  &:not(.light *) {
    background-color: #121212;
  }
`;
const TestimonialMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: black;

  &:not(.light *) {
    color: white;
  }
`;
const TestimonialUserImage = styled.img`
  width: 5rem; // w-20
  height: 5rem; // h-20
  aspect-ratio: 1 / 1; // aspect-square
  object-fit: cover;
  object-position: center;
  border-radius: 9999px; // rounded-full
  border: 1px solid #9ca3af; // border-gray-400

  &:not(.light *) {
    border-color: rgba(255, 255, 255, 0.1); // dark:border-white/10
  }
`;
const TestimonialUserName = styled.h4`
  font-size: 1.125rem; // text-lg
  font-weight: 500; // font-medium
  color: black;

  &:not(.light *) {
    color: white;
  }
`;
const TestimonialContainer = styled.div`
  flex: 1;
  position: relative;
  display: none;

  @container (min-width: ${bp.lg}) {
    display: block;
  }
`;
const TestimonialAccentImage = styled.svg`
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.2;

  &:not(.light *) {
    opacity: 1;
  }
`;

export default function Testimonial({ props, style, id }) {
 const {
		connectors: { connect, drag },
	} = useNode();
  return (
    <TestimonialWrapper id={id} style={style} ref={(ref) => connect(drag(ref))}>
      <div
        style={{
          maxWidth: "75rem",
          marginInline: "auto",
          padding: "5rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <h6
            style={{
              color: "#4fe173",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            {props?.headerText}
          </h6>
          <TestimonialMessage>{props?.messageTextarea}</TestimonialMessage>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {[...new Array(4)].map((_, index) => (
              <svg
                key={index}
                style={{
                  fill: "#FFD700",
                  width: "1rem",
                  height: "1rem",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <TestimonialUserImage
              src={props?.createdBy?.avatarSrc}
              alt="user"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <TestimonialUserName>
                {props?.createdBy?.nameText}
              </TestimonialUserName>
              <p
                style={{
                  color: "#4fe173",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                }}
              >
                {props?.createdBy?.designationText}
              </p>
            </div>
          </div>
        </div>
        <TestimonialContainer>
          <TestimonialAccentImage
            width="625"
            height="313"
            viewBox="0 0 625 313"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M573.284 312.264C573.284 168.495 456.582 51.9473 312.623 51.9473C168.664 51.9473 51.9619 168.495 51.9619 312.264"
              stroke="#363636"
            />
            <path
              d="M624.246 312.264C624.246 140.35 484.728 0.98584 312.623 0.98584C140.519 0.98584 1.00037 140.35 1.00037 312.264"
              stroke="#363636"
            />
            <path
              d="M526.455 311.92C526.455 193.824 430.719 98.0881 312.623 98.0881C194.527 98.0881 98.7914 193.824 98.7914 311.92"
              stroke="#363636"
            />
          </TestimonialAccentImage>

          <svg
            style={{
              position: "absolute",
              bottom: 0,
              left: "25%",
            }}
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.5077 0H36.5084C36.6037 20.12 52.8959 36.4121 73.0159 36.5073V36.5082C52.8957 36.6034 36.6034 52.8957 36.5084 73.0159H36.5077C36.4126 52.8957 20.1202 36.6033 0 36.5082V36.5073C20.1201 36.4122 36.4123 20.12 36.5077 0Z"
              fill="#6FFF93"
            />
          </svg>

          <svg
            style={{
              position: "absolute",
              top: 0,
              right: "30%",
            }}
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.3495 0C19.3999 10.6636 28.0348 19.2984 38.6984 19.3489V19.3493C28.0348 19.3998 19.3999 28.0347 19.3495 38.6984H19.3491C19.2987 28.0347 10.6637 19.3997 0 19.3493V19.3489C10.6636 19.2984 19.2985 10.6636 19.3491 0H19.3495Z"
              fill="white"
            />
          </svg>

          {Array.isArray(props?.imageSrc) && (
            <>
              <img
                src={props?.imageSrc[0]}
                alt=""
                className="absolute top-[20%] left-[5%] w-40 h-48 object-cover object-center rounded-md"
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "5%",
                  width: "10rem",
                  height: "12rem",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "0.375rem",
                }}
              />
              <img
                src={props?.imageSrc[1]}
                alt=""
                style={{
                  position: "absolute",
                  bottom: "20%",
                  right: "5%",
                  width: "13rem",
                  height: "15rem",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "0.375rem",
                }}
              />
              <img
                src={props?.imageSrc[2]}
                alt=""
                style={{
                  position: "absolute",
                  top: "-10%",
                  right: "40%",
                  width: "8rem",
                  height: "10rem",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "0.375rem",
                }}
              />
            </>
          )}
        </TestimonialContainer>
      </div>
    </TestimonialWrapper>
  );
}
