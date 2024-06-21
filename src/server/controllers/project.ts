import { IProject, IProjectForm } from "@/interfaces";
import { supabase } from "../connections";
import { TABLES, projectSchema } from "@/constants";

class ProjectController {
  async getProjects(workplaceId: string): Promise<IProject[]> {
    const { data: projects, ...rest } = await supabase
      .from(TABLES.PROJECTS)
      .select()
      .in("workplace_id", [workplaceId])
      .returns<IProject[]>();

    if (!projects) throw new Error("Failed to get projects");

    return projects;
  }

  async createProject(args: IProjectForm): Promise<IProject> {
    const { data: fields, success, error } = projectSchema.safeParse(args);

    if (!success) throw new Error(error.message);

    const { data: projects } = await supabase
      .from(TABLES.PROJECTS)
      .insert(fields)
      .select()
      .returns<IProject[]>();

    if (!projects) throw new Error("Failed to create project");

    const [project] = projects;

    return project;
  }
}

export const projectController = new ProjectController();
