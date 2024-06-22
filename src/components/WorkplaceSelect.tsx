"use server";

import { getWorkplaces } from "@/server/routes";

import { WorkplaceList } from "./WorkplaceList";

export const WorkplaceSelect = async () => {
  const workplaces = await getWorkplaces();

  return (
    <>
      <WorkplaceList workplaces={workplaces} />
    </>
  );
};
