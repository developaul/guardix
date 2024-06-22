"use server";

import { IWorkplace, IWorkplaceForm } from "@/interfaces";
import { workplaceController } from "../controllers";

export const getWorkplaces = async (): Promise<IWorkplace[]> => {
  return workplaceController.getWorkplaces();
};

export const createWorkplace = async (
  args: IWorkplaceForm
): Promise<IWorkplace> => {
  return workplaceController.createWorkplace(args);
};

export const deleteWorkplace = async (workplaceId: string) => {
  return workplaceController.deleteWorkplace(workplaceId);
};
