import React from "react";
import { Header } from "./index";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
