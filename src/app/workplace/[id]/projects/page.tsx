import { ProjectToolbar, ProjectList } from "@/containers";
import { NextPage } from "next";
import { Suspense } from "react";

interface Props {
  params: { id: string };
}

const ProjectsPage: NextPage<Props> = ({ params }) => {
  const { id } = params;

  return (
    <section className="flex flex-col gap-4 px-8">
      <ProjectToolbar />

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectList workspaceId={id} />
      </Suspense>
    </section>
  );
};

export default ProjectsPage;
