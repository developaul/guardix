import { projectSchema, projectSchemaForm } from "@/constants";
import { z } from "zod";

export interface IProject extends z.infer<typeof projectSchema> {
  id: string;
  slug: string;
}

export type IProjectForm = z.infer<typeof projectSchemaForm>;
