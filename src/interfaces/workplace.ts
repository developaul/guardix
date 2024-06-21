import { workplaceSchema, workplaceSchemaForm } from "@/constants";
import { z } from "zod";

export interface Workplace {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

export type workplaceSchemaFormType = z.infer<typeof workplaceSchemaForm>;

export interface workplaceSchemaType extends z.infer<typeof workplaceSchema> {
  id: string;
}
