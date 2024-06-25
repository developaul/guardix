"use server";
import { redirect } from "next/navigation";

import { IStage, IStageForm } from "@/interfaces";
import { stageController } from "../controllers";

export const getStages = (projectSlug: string): Promise<IStage[]> => {
  return stageController.getStages(projectSlug);
};

export const createStage = async (args: IStageForm): Promise<void> => {
  const { workplace_id, slug } = await stageController.createStage(args);

  redirect(
    `/workplace/${workplace_id}/projects/${args.project_slug}/stages/${slug}`
  );
};
