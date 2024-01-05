import React, { ReactNode } from "react";
type PaddingProps = {
  children: ReactNode;
};
const PaddingXContainer: React.FC<PaddingProps> = ({ children }) => {
  return (
    <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-20  max-w-screen-2xl">
      {children}
    </div>
  );
};

export default PaddingXContainer;
