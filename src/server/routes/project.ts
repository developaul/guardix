"use server";

import { IProject, IProjectForm } from "@/interfaces";
import { projectController } from "../controllers/project";
import { redirect } from "next/navigation";

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

export const createProject = async (args: IProjectForm): Promise<void> => {
  const { id, workplace_id } = await projectController.createProject(args);

  redirect(`/workplace/${workplace_id}/projects/${id}`);
};
