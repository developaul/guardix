import { stageSchema, stageSchemaForm } from "@/constants";
import { z } from "zod";

export interface IStage extends z.infer<typeof stageSchema> {
  id: string;
  slug: string;
  project_id: string;
}

export type IStageForm = z.infer<typeof stageSchemaForm>;
