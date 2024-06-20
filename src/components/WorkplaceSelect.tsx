import { FC } from "react";

import { CreateWorkplaceForm } from "./CreateWorkplaceForm";
import { workplaceSchemaFormType } from "@/constants";
import { getWorkplaces } from "@/server/routes";
import { WorkplaceList } from "./WorkplaceList";

interface Props {
  workplaceIdSelected: string;
  resourcePathname: string;
}

const WorkplaceSelect: FC<Props> = ({
  resourcePathname,
  workplaceIdSelected,
}) => {
  const workplaces: any[] = [];

  // const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const handleToggleDialog = () => {
    // setDialogIsOpen((prev) => !prev);
  };

  const handleAddWorkplace = async ({ name }: workplaceSchemaFormType) => {
    console.log("🚀 ~ handleAddWorkplace ~ name:", name);
    // try {
    //   const workplace = await createWorkplace({ name });
    //   router.push(`/workplace/${workplace.id}/${activeResourcePathname}`);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   handleToggleDialog();
    // }
  };

  return (
    <>
      <WorkplaceList
        workplaces={workplaces}
        handleToggleDialog={handleToggleDialog}
        workplaceIdSelected={workplaceIdSelected}
        resourcePathname={resourcePathname}
      />

      <CreateWorkplaceForm
        isOpen={false}
        handleToggleDialog={handleToggleDialog}
        onSubmit={handleAddWorkplace}
      />
    </>
  );
};

export default WorkplaceSelect;
