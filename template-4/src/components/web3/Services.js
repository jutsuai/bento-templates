const style = props.style || {};
const props = props.props || {};


const ServicesWrapper = styled.div`
  padding: ${({ style }) =>
    `${style?.paddingTop}px ${style?.paddingRight}px ${style?.paddingBottom}px ${style?.paddingLeft}px`};
  margin: ${({ style }) =>
    `${style?.marginTop}px ${style?.marginRight}px ${style?.marginBottom}px ${style?.marginLeft}px`};

  background-color: white;

  &:not(.light *) {
    background-color: #121212;
  }
`;
const ServicesHeader = styled.h2`
  font-size: 2.25rem; // text-4xl
  font-weight: 600; // font-semibold
  color: black;

  &:not(.light *) {
    color: white;
  }
`;
const ServicesSubHeader = styled.p`
  font-size: 0.875rem; // text-sm
  color: rgba(0, 0, 0, 0.7);
  max-width: 32rem; // max-w-lg
  text-align: center;

  &:not(.light *) {
    color: rgba(255, 255, 255, 0.7);
  }
`;
const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; // gap-6
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 3.5rem; // p-14
  border-radius: 1rem; // rounded-2xl
  text-align: center;
  border: 2px solid transparent;

  &:not(.light *) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:hover {
    border-color: #4fe173;
  }

  transition: all 0.2s ease-in-out;
`;
const ServiceHeader = styled.h3`
  font-size: 1.5rem; // text-2xl
  font-weight: 600; // font-semibold
  color: black;

  &:not(.light *) {
    color: white;
  }
`;
const ServiceDescription = styled.p`
  font-size: 1rem; // text-base
  color: rgba(0, 0, 0, 0.7);
  text-align: center;

  &:not(.light *) {
    color: rgba(255, 255, 255, 0.7);
  }
`;


  return (
    <ServicesWrapper id={id} style={style}>
      <div
        style={{
          maxWidth: "96rem",
          margin: "0 auto",
          padding: "6rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
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
        <ServicesHeader>{props?.headerText}</ServicesHeader>
        <ServicesSubHeader>{props?.descriptionTextarea}</ServicesSubHeader>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "1rem",
            width: "100%",
          }}
        >
          {props?.dataList.map((service, index) => (
            <ServicesContent key={index}>
              <img
                src={service.imageSrc}
                alt={service.headerText}
                style={{
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <ServiceHeader>{service.headerText}</ServiceHeader>
              <ServiceDescription>
                {service.subHeaderTextarea}
              </ServiceDescription>
            </ServicesContent>
          ))}
        </div>
      </div>
    </ServicesWrapper>
  );

