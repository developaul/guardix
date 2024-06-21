import { projectSchema } from "@/constants";
import { z } from "zod";

export interface IProject extends z.infer<typeof projectSchema> {
  id: string;
}
