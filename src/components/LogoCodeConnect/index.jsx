export const LogoCodeConnect = ({ variant }) => {
  const logoType = {
    logo: "./Logo.png",
    logoText: "./Logo-text.svg",
  };
  const logoStyle = {
    logo: "h-[87px]",
    logoText: "h-10",
  };
  return (
    <img
      src={logoType[variant]}
      alt="Logo do CodeConnect"
      className={logoStyle[variant]}
    />
  );
};
