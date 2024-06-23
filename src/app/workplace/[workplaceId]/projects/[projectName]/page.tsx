import React from "react";
import { NextPage } from "next";

import { BreadcrumbProject } from "@/containers";

interface Props {
  params: { projectName: string };
}

const ProjectPage: NextPage<Props> = ({ params }) => {
  const { projectName } = params;

  return (
    <section className="flex flex-col gap-4 px-8">
      <BreadcrumbProject />
      <h1>Project page</h1>
    </section>
  );
};

export default ProjectPage;
