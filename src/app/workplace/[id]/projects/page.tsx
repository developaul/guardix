import { ProjectToolbar, ProjectList } from "@/containers";

const ProjectsPage = () => {
  return (
    <section className="flex flex-col gap-4 px-8">
      <ProjectToolbar />

      <ProjectList />
    </section>
  );
};

export default ProjectsPage;
