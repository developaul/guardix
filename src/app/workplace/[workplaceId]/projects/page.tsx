import { ProjectToolbar, ProjectList } from "@/containers";
import { NextPage } from "next";
import { Suspense } from "react";

interface Props {
  params: { workplaceId: string };
}

const ProjectsPage: NextPage<Props> = ({ params }) => {
  const { workplaceId } = params;

  return (
    <section className="flex flex-col gap-4 px-8">
      <ProjectToolbar />

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectList workspaceId={workplaceId} />
      </Suspense>
    </section>
  );
};

export default ProjectsPage;
