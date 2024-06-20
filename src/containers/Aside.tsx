import { Suspense } from "react";
import Link from "next/link";
import clsx from "clsx";

import { resources } from "@/lib";
import WorkplaceSelect from "@/components/WorkplaceSelect";

export const Aside = ({ activeResourcePathname, workplaceIdSelected }: any) => {
  return (
    <aside className="w-56 bg-gray-200 p-4">
      <nav className="grid gap-6 text-lg font-medium">
        <Suspense fallback={<div>Loading...</div>}>
          <WorkplaceSelect
            resourcePathname={activeResourcePathname}
            workplaceIdSelected={workplaceIdSelected}
          />
        </Suspense>

        {resources.map(({ pathname, name, Icon }) => {
          const isActive = pathname === activeResourcePathname;

          return (
            <Link
              key={name}
              href={`/workplace/${workplaceIdSelected}/${pathname}`}
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
