import { FC, PropsWithChildren } from "react";

import { Header } from "@/containers";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
