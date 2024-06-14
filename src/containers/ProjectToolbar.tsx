import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ProjectToolbar = () => {
  return (
    <div className="flex items-center gap-4">
      <h1>Projects Page</h1>

      <Button size="icon">
        <PlusIcon />
      </Button>
    </div>
  );
};
