import { getProjects } from "@/server/routes";
import { ProjectListItem } from "@/components";
import { FC } from "react";

interface Props {
  workspaceId: string;
}

export const ProjectList: FC<Props> = async ({ workspaceId }) => {
  const projects = await getProjects(workspaceId);

  return (
    <ul className="flex flex-col">
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};
