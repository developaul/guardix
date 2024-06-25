import { IStage, IStageForm } from "@/interfaces";
import { supabase } from "../connections";
import { TABLES, projectSchema, stageSchema } from "@/constants";
import { getSlug } from "@/lib/utils";
import { projectController } from "./project";

class StageController {
  async getStages(projectSlug: string): Promise<IStage[]> {
    const project = await projectController.getProjectBySlug(projectSlug);

    const { data: stages } = await supabase
      .from(TABLES.STAGES)
      .select()
      .in("project_id", [project.id])
      .returns<IStage[]>();

    if (!stages) throw new Error("Failed to get stages");

    return stages;
  }

  async createStage(args: IStageForm): Promise<IStage> {
    const { data: fields, success, error } = stageSchema.safeParse(args);

    if (!success) throw new Error(error.message);

    const project = await projectController.getProjectBySlug(args.project_slug);

    const slug = getSlug(fields.name);

    const { data: stages } = await supabase
      .from(TABLES.STAGES)
      .insert({ ...fields, slug, project_id: project.id })
      .select()
      .returns<IStage[]>();

    if (!stages) throw new Error("Failed to create stages");

    const [stage] = stages;

    return stage;
  }
}

export const stageController = new StageController();
