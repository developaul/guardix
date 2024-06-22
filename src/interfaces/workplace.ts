import { workplaceSchema, workplaceSchemaForm } from "@/constants";
import { z } from "zod";

export interface IWorkplace extends z.infer<typeof workplaceSchema> {
  id: string;
}

export type IWorkplaceForm = z.infer<typeof workplaceSchemaForm>;
