"use client";

import Link from "next/link";
import { useParams, useSelectedLayoutSegments } from "next/navigation";
import { FC, useState } from "react";
import { PlusIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { IWorkplace } from "@/interfaces";
import { CreateWorkplaceForm } from "./CreateWorkplaceForm";

interface Props {
  workplaces: IWorkplace[];
}

export const WorkplaceList: FC<Props> = ({ workplaces }) => {
  const { id: workplaceIdSelected } = useParams();

  const [resourcePathname] = useSelectedLayoutSegments();

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const handleToggleDialog = () => {
    setDialogIsOpen((prev) => !prev);
  };

  const currentWorkplace = workplaces.find(
    (workplace) => workplace.id === workplaceIdSelected
  );

  const restWorkplaces = workplaces.filter(
    (workplace) => workplace.id !== workplaceIdSelected
  );

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-[200px]">
              {currentWorkplace?.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col min-w-[200px]">
              {restWorkplaces.map(({ id, name }) => (
                <Link
                  key={id}
                  href={`/workplace/${id}/${resourcePathname}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className="p-4 border border-gray-200 hover:bg-gray-100 hover:text-gray-900 text-sm">
                    {name}
                  </NavigationMenuLink>
                </Link>
              ))}
              <NavigationMenuLink
                onClick={handleToggleDialog}
                className="p-4 border border-gray-200 hover:bg-gray-100 hover:text-gray-900 text-sm flex items-center gap-1 cursor-pointer"
              >
                <PlusIcon className="h-6 w-6" />
                Create Workplace
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <CreateWorkplaceForm isOpen={dialogIsOpen} onClose={handleToggleDialog} />
    </>
  );
};
