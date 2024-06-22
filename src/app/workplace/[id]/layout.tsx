import { FC, PropsWithChildren, Suspense } from "react";

import { Header, Aside } from "@/containers";
import { WorkplaceSelect } from "@/components";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <Header />
      <div className="flex flex-1">
        <Aside>
          <Suspense fallback={<div>Loading...</div>}>
            <WorkplaceSelect />
          </Suspense>
        </Aside>
        <main className="flex-1 min-h-0">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
