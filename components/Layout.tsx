import React, { ReactNode } from "react";
import { Header } from "../layouts";

export const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};
