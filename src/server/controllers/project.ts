import { IProject } from "@/interfaces";
import { supabase } from "../connections";
import { TABLES } from "@/constants";

class ProjectController {
  async getProjects(workplaceId: string): Promise<IProject[]> {
    const { data: projects, ...rest } = await supabase
      .from(TABLES.PROJECTS)
      .select("*")
      .eq("workplace_id", workplaceId);

    console.log("🚀 ~ ProjectController ~ getProjects ~ rest:", rest);

    return [];
  }
}

export const projectController = new ProjectController();
