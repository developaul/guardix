import { FC } from "react";

import { IProject } from "@/interfaces";

interface Props {
  project: IProject;
}

export const ProjectListItem: FC<Props> = ({ project }) => {
  const { name, description } = project;

  return (
    <>
      <li className="px-2 py-4 hover:bg-gray-100 transition-all ease-in-out duration-300 cursor-pointer">
        <h3 className="text-blue-500 text-base font-bold">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </li>
      <li className="border-t border-gray-300" />
    </>
  );
};
