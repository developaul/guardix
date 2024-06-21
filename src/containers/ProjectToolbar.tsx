"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";

import { CreateProjectForm } from "@/components";
import { TypographyH3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";

export const ProjectToolbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4">
      <TypographyH3>Projects</TypographyH3>

      <Button onClick={handleToggleDialog} size="icon">
        <PlusIcon />
      </Button>

      <CreateProjectForm isOpen={isDialogOpen} onClose={handleToggleDialog} />
    </div>
  );
};
