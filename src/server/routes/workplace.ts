"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { IWorkplace, IWorkplaceForm } from "@/interfaces";
import { workplaceController } from "../controllers";

export const getWorkplaces = async (): Promise<IWorkplace[]> => {
  return workplaceController.getWorkplaces();
};

export const createWorkplace = async (
  args: IWorkplaceForm,
  resourcePathname: string
): Promise<IWorkplace> => {
  const workplace = await workplaceController.createWorkplace(args);

  const pathname = `/workplace/${workplace.id}/${resourcePathname}`;

  revalidatePath(pathname);
  redirect(pathname);
};

export const deleteWorkplace = async (workplaceId: string) => {
  return workplaceController.deleteWorkplace(workplaceId);
};
