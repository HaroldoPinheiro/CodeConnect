export const Typography = ({ children, variant = "p", color = "white" }) => {
  const textType = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
  };
  const textColor = {
    green: "text-highlight-green",
    white: "text-offwhite",
    gray: "text-light-gray",
    mediumGray: "text-medium-gray",
  };
  const textStyle = {
    h1: "text-[44px] leading-[120%] font-medium text-center w-full",
    h2: "text-[37px] leading-[120%] font-medium text-center w-full",
    h3: "text-[22px] leading-[150%] font-semibold text-left w-full",
    p: "text-[18px] leading-[150%] font-regular w-full",
  };
  const TextComponent = textType[variant];
  return (
    <TextComponent className={`${textColor[color]} ${textStyle[variant]}`}>
      {children}
    </TextComponent>
  );
};
