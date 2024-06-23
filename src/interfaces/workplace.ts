import { z } from "zod";
import { workplaceSchema, workplaceSchemaForm } from "@/constants";

export interface IWorkplace extends z.infer<typeof workplaceSchema> {
  id: string;
}

export type IWorkplaceForm = z.infer<typeof workplaceSchemaForm>;
