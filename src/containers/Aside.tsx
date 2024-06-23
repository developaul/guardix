"use client";

import { FC, PropsWithChildren } from "react";
import { useParams, useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { resources } from "@/lib";

export const Aside: FC<PropsWithChildren> = ({ children }) => {
  const { workplaceId } = useParams();
  const [activeResourcePathname] = useSelectedLayoutSegments();

  return (
    <aside className="w-56 bg-gray-200 p-4">
      <nav className="grid gap-6 text-lg font-medium">
        {children}

        {resources.map(({ pathname, name, Icon }) => {
          const isActive = pathname === activeResourcePathname;

          return (
            <Link
              key={name}
              href={`/workplace/${workplaceId}/${pathname}`}
              className={clsx("flex gap-2 text-gray-500 hover:text-gray-900", {
                ["text-gray-900"]: isActive,
              })}
            >
              {Icon && <Icon className="h-6 w-6" />}
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
