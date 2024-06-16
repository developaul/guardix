"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Shield } from "lucide-react";
import clsx from "clsx";

import { resources } from "@/lib";

export const Aside = () => {
  const params = useParams();

  return (
    <aside className="w-56 bg-gray-200 p-4">
      <nav className="grid gap-6 text-lg font-medium">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Shield className="h-6 w-6" />
          <span className="sr-only">Guardix</span>
        </Link>
        {resources.map(({ pathname, name, Icon }) => {
          const isActive = pathname === "activeResourcePathname";

          return (
            <Link
              key={name}
              href={`/workplace/${params.id}/${pathname}`}
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
