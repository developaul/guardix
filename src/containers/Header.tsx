import { Aside } from "@/components";
import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 sm:hidden">
      <Aside />

      <div>User</div>
    </header>
  );
};
