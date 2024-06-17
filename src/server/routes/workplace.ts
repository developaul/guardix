"use server";

import { workplaceController } from "../controllers";

export const getWorkplaces = async () => {
  // return workplaceController.getWorkplaces();
  return [];
};

export const postWorkplace = async (args: any) => {
  return workplaceController.createWorkplace(args);
};

export const deleteWorkplace = async (workplaceId: string) => {
  return workplaceController.deleteWorkplace(workplaceId);
};
