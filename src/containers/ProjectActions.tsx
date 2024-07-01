"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  BarChart2Icon,
  Edit2Icon,
  EllipsisVerticalIcon,
  Loader2,
  Trash2Icon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { deleteProject } from "@/server/routes";

export const ProjectActions = () => {
  const { projectSlug, workplaceId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteProject = () => {
    setIsLoading(true);
    deleteProject({
      workplaceId: workplaceId.toString(),
      projectSlug: projectSlug.toString(),
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center justify-center"
          disabled={isLoading}
          size="icon"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <EllipsisVerticalIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer">
          <Edit2Icon className="mr-2 w-4 h-4" />
          Rename
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <BarChart2Icon className="mr-2 w-4 h-4" />
          Create Environment
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDeleteProject}
          className="text-red-500 focus:text-red-500 cursor-pointer"
        >
          <Trash2Icon className="mr-2 w-4 h-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
