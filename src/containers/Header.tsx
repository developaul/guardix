import { Aside } from "@/components";
import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Aside />

      <div>User</div>
    </header>
  );
};
