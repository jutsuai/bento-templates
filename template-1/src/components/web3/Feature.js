const style = props.style || {};
const props = props.props || {};


const bp = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const FeatureWrapper = styled.div`
  padding: ${({ style }) =>
    `${style?.paddingTop || 0}px ${style?.paddingRight || 0}px ${
      style?.paddingBottom || 0
    }px ${style?.paddingLeft || 0}px`};
  margin: ${({ style }) =>
    `${style?.marginTop || 0}px ${style?.marginRight || 0}px ${
      style?.marginBottom || 0
    }px ${style?.marginLeft || 0}px`};

  background-color: white;
  &:not(.light *) {
    background-color: #080a11;
  }
`;

const FeatureContainer = styled.div`
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  max-width: 96rem;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;

  @media (max-width: ${bp.lg}) {
    flex-direction: column !important;
  }
`;

const FeatureImage = styled.img`
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
  object-fit: cover;
  object-position: center;

  @media (min-width: ${bp.lg}) {
    width: 50%;
  }
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // gap-4
  margin: 1rem;

  @media (min-width: ${bp.lg}) {
    width: 50%; // lg:w-1/2
    gap: 2rem; // lg:gap-8
    padding: 3.5rem; // lg:p-14
  }
`;

const FeatureSubHeader = styled.p`
  margin-bottom: -1rem; // -mb-4
  font-size: 0.875rem; // text-sm
  color: #4b5563; // text-gray-700

  &:not(.light *) {
    color: #d1d5db; // dark:text-gray-300
  }

  @media (min-width: ${bp.xl}) {
    font-size: 1rem; // xl:text-base
  }
`;
const FeatureHeader = styled.h2`
  font-size: 1.5rem; // text-2xl
  font-weight: bold;
  color: black;

  &:not(.light *) {
    color: white;
  }

  @media (min-width: ${bp.xl}) {
    font-size: 2.5rem; // xl:text-4xl
  }
`;
const FeatureDescription = styled.p`
  font-size: 0.875rem; // text-sm
  color: #4b5563; // text-gray-700

  &:not(.light *) {
    color: #d1d5db; // dark:text-gray-300
  }

  @media (min-width: ${bp.xl}) {
    font-size: 1rem; // xl:text-base
  }
`;

  return (
    <FeatureWrapper id={id} style={style}>
      <FeatureContainer flexDirection={style?.flexDirection}>
        <FeatureImage src={props?.imageSrc} alt="features" loading="lazy" />
        <FeatureContent>
          <FeatureSubHeader>{props?.subHeaderTextarea}</FeatureSubHeader>
          <FeatureHeader>{props?.headerText}</FeatureHeader>
          <FeatureDescription>{props?.descriptionTextarea}</FeatureDescription>
        </FeatureContent>
      </FeatureContainer>
    </FeatureWrapper>
  );

