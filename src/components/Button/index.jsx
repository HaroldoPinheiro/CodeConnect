export const Button = ({ children, color }) => {
  const buttonTheme = {
    green: "border-highlight-green text-highlight-green text-[22px]",
    gray: "border-medium-gray text-medium-gray text-[18px]",
  };
  return (
    <button
      className={`bg-transparent py-3 px-4 w-[117px] border-solid border ${buttonTheme[color]} rounded-lg `}
    >
      {children}
    </button>
  );
};
