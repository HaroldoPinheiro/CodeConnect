export const Main = ({ children }) => {
  return (
    <main
      className="flex flex-col items-center pt-14 px-4 gap-14 
                    md:pt-10 md:px-15 
                    lg:flex-row-reverse lg:justify-center lg:gap-[10px] lg:items-stretch"
    >
      {children}
    </main>
  );
};
