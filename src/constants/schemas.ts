import { z } from "zod";

// Workplace
export const workplaceSchemaForm = z.object({
  name: z.string().min(2).max(25),
});

export const workplaceSchema = z
  .object({
    created_at: z.string().datetime().default(new Date().toISOString()),
  })
  .extend(workplaceSchemaForm.shape);

// Project
export const projectSchemaForm = z.object({
  name: z.string().min(2).max(25),
  description: z.string().max(150).optional(),
  workplace_id: z.string().uuid(),
});

export const projectSchema = z
  .object({
    created_at: z.string().datetime().default(new Date().toISOString()),
  })
  .extend(projectSchemaForm.shape);
