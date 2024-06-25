"use server";
import { redirect } from "next/navigation";

import { IProject, IProjectForm } from "@/interfaces";
import { projectController } from "../controllers/project";

export const getProjects = (workplaceId: string): Promise<IProject[]> => {
  return projectController.getProjects(workplaceId);
};

export const createProject = async (args: IProjectForm): Promise<void> => {
  const { workplace_id, slug } = await projectController.createProject(args);

  redirect(`/workplace/${workplace_id}/projects/${slug}`);
};
