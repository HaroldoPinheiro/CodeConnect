export const Container = ({ children, className }) => {
  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {children}
    </div>
  );
};
