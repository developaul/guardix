"use server";

import { workplaceSchemaFormType, workplaceSchemaType } from "@/constants";
import { workplaceController } from "../controllers";

export const getWorkplaces = async () => {
  // return workplaceController.getWorkplaces();
  return [];
};

export const createWorkplace = async (
  args: workplaceSchemaFormType
): Promise<workplaceSchemaType> => {
  return workplaceController.createWorkplace(args);
};

export const deleteWorkplace = async (workplaceId: string) => {
  return workplaceController.deleteWorkplace(workplaceId);
};
