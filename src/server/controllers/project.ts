import { IProject, IProjectForm } from "@/interfaces";
import { supabase } from "../connections";
import { TABLES, projectSchema } from "@/constants";
import { getSlug } from "@/lib/utils";

class ProjectController {
  async getProjects(workplaceId: string): Promise<IProject[]> {
    const { data: projects } = await supabase
      .from(TABLES.PROJECTS)
      .select()
      .in("workplace_id", [workplaceId])
      .returns<IProject[]>();

    if (!projects) throw new Error("Failed to get projects");

    return projects;
  }

  async createProject(args: IProjectForm): Promise<IProject> {
    // Validate args
    const { data: fields, success, error } = projectSchema.safeParse(args);

    if (!success) throw new Error(error.message);

    // Check if project slug already exists
    const slug = getSlug(fields.name);
    const foundProject = await this.getProjectBySlug(slug);
    if (foundProject) throw new Error("Project already exists");

    // Create project
    const { data: projects } = await supabase
      .from(TABLES.PROJECTS)
      .insert({ ...fields, slug })
      .select()
      .returns<IProject[]>();

    if (!projects) throw new Error("Failed to create project");

    const [project] = projects;

    return project;
  }

  async getProjectBySlug(slug: string): Promise<IProject> {
    const { data: projects } = await supabase
      .from(TABLES.PROJECTS)
      .select()
      .eq("slug", slug)
      .returns<IProject[]>();

    if (!projects) throw new Error("Failed to get project");

    const [project] = projects;

    return project;
  }
}

export const projectController = new ProjectController();
