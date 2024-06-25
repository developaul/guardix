"use client";

import { FC } from "react";

import { IProject } from "@/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  project: IProject;
}

export const ProjectListItem: FC<Props> = ({ project }) => {
  const { name, description } = project;

  const pathname = usePathname();

  return (
    <>
      <Link href={`${pathname}/${name}`}>
        <li className="h-16 px-2 py-2 flex flex-col justify-center hover:bg-gray-100 transition-all ease-in-out duration-300 cursor-pointer">
          <h3 className="text-blue-500 text-base font-bold">{name}</h3>
          {description && (
            <p className="text-gray-500 text-xs">{description}</p>
          )}
        </li>
      </Link>
      <li className="border-t border-gray-300" />
    </>
  );
};
