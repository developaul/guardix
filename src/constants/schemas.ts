import { z } from "zod";

export const workplaceSchemaForm = z.object({
  name: z.string().min(2).max(25),
});

export const workplaceSchema = z
  .object({
    created_at: z.string().datetime().default(new Date().toISOString()),
  })
  .extend(workplaceSchemaForm.shape);

export type workplaceSchemaFormType = z.infer<typeof workplaceSchemaForm>;

export interface workplaceSchemaType extends z.infer<typeof workplaceSchema> {
  id: string;
}
