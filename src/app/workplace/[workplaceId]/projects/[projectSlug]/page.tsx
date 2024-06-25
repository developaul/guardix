import React from "react";
import { NextPage } from "next";

import { BreadcrumbProject } from "@/containers";
import { TypographySmall } from "@/components/ui/Typography";
import { ArrowRightIcon } from "lucide-react";
import { StageList } from "@/containers/StageList";

interface Props {
  params: { projectSlug: string };
}

const ProjectPage: NextPage<Props> = ({ params }) => {
  const { projectSlug } = params;

  return (
    <section className="flex flex-col gap-4 px-8">
      <BreadcrumbProject />
      <TypographySmall>
        Put your secrets to work with the{" "}
        <a
          className="hover:underline text-blue-500"
          href="https://www.npmjs.com/package/guardix"
          target="_blank"
          rel="noreferrer"
        >
          Guardix CLI
          <ArrowRightIcon className="inline-block w-4 h-4 ml-1" />
        </a>
      </TypographySmall>

      <StageList projectSlug={projectSlug} />
    </section>
  );
};

export default ProjectPage;
