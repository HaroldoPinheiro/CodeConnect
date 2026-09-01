export const Container = ({ children, gap }) => {
  return <div className={`flex flex-col items-center ${gap}`}>{children}</div>;
};
