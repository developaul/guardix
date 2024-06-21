"use server";

import { IProject } from "@/interfaces";
import { projectController } from "../controllers/project";

const projects = [
  {
    id: "1",
    name: "Project 1",
    description: "This is a project",
  },
  {
    id: "2",
    name: "Project 2",
    description: "This is a project",
  },
  {
    id: "3",
    name: "Project 3",
    description: "This is a project",
  },
  {
    id: "4",
    name: "Project 4",
    description: "This is a project",
  },
  {
    id: "5",
    name: "Project 5",
    description: "This is a project",
  },
  {
    id: "6",
    name: "Project 6",
    description: "This is a project",
  },
];

export const getProjects = (workplaceId: string): Promise<IProject[]> => {
  return projectController.getProjects(workplaceId);
};
