import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/ui/Typography";

export const ProjectToolbar = () => {
  return (
    <div className="flex items-center gap-4">
      <TypographyH3>Projects</TypographyH3>

      <Button size="icon">
        <PlusIcon />
      </Button>
    </div>
  );
};
