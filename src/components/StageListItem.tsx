"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IStage } from "@/interfaces";

interface Props {
  stage: IStage;
}

export const StageListItem: FC<Props> = ({ stage }) => {
  const { name } = stage;

  const pathname = usePathname();

  return (
    <>
      <Link href={`${pathname}/stages/${name}`}>
        <li className="h-16 px-2 py-2 flex flex-col justify-center hover:bg-gray-100 transition-all ease-in-out duration-300 cursor-pointer">
          <h3 className="text-blue-500 text-base font-bold">{name}</h3>
        </li>
      </Link>
      <li className="border-t border-gray-300" />
    </>
  );
};
