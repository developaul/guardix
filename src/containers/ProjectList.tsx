import { Fragment } from "react";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "This is a project",
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is a project",
  },
];

export const ProjectList = () => {
  return (
    <ul className="flex flex-col">
      {projects.map(({ id, name, description }) => (
        <Fragment key={id}>
          <li className="px-2 py-4 hover:bg-gray-100 transition-all ease-in-out duration-300 cursor-pointer">
            <h3 className="text-blue-500 text-base font-bold">{name}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
          </li>
          <li className="border-t border-gray-300" />
        </Fragment>
      ))}
    </ul>
  );
};
