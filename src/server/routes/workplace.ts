"use server";

import { workplaceSchemaFormType, workplaceSchemaType } from "@/interfaces";
import { workplaceController } from "../controllers";

export const getWorkplaces = async (): Promise<workplaceSchemaType[]> => {
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
