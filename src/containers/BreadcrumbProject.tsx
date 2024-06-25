"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const BreadcrumbProject = () => {
  const { workplaceId, projectSlug } = useParams();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              className="text-blue-500 hover:text-blue-500 hover:underline text-xl font-semibold"
              href={`/workplace/${workplaceId}/projects`}
            >
              Projects
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              className="text-xl font-medium"
              href={`/workplace/${workplaceId}/projects/${projectSlug}`}
            >
              {projectSlug}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
