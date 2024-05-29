import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-700 to-blue-800">{children}</div>;
};

export default layout;
