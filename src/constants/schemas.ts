import { z } from "zod";

export const workplaceSchemaForm = z.object({
  name: z.string().min(2).max(25),
});

export const workplaceSchema = z
  .object({
    created_at: z.string().datetime().default(new Date().toISOString()),
  })
  .extend(workplaceSchemaForm.shape);

export const projectSchemaForm = z.object({
  name: z.string().min(2).max(25),
  description: z.string().min(2).max(150).optional(),
});

export const projectSchema = z
  .object({
    created_at: z.string().datetime().default(new Date().toISOString()),
  })
  .extend(projectSchemaForm.shape);
