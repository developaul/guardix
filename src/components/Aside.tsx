"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Menu, Shield } from "lucide-react";
import clsx from "clsx";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { resources } from "@/lib";

export const Aside = () => {
  const params = useParams();
  const pathname = usePathname();

  const activeResourcePathname = useMemo(() => {
    const resourcePathname = pathname.split("/").pop();

    return resourcePathname;
  }, [pathname]);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Shield className="h-6 w-6" />
            <span className="sr-only">Guardix</span>
          </Link>
          {resources.map(({ pathname, name }) => {
            const isActive = pathname === activeResourcePathname;

            return (
              <Link
                key={name}
                href={`/workplace/${params.id}/${pathname}`}
                className={clsx("text-gray-500 hover:text-gray-900", {
                  ["text-gray-900"]: isActive,
                })}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
