import React, { FC } from "react";

import { StageListItem } from "@/components/StageListItem";
import { getStages } from "@/server/routes";

interface Props {
  projectSlug: string;
}

export const StageList: FC<Props> = async ({ projectSlug }) => {
  const stages = await getStages(projectSlug);

  return (
    <ul className="flex flex-col">
      {stages.map((stage) => (
        <StageListItem key={stage.id} stage={stage} />
      ))}
    </ul>
  );
};
