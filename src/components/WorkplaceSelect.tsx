import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { FC } from "react";

const workplaces = [
  {
    id: "1",
    title: "Workplace One",
    description: "This is a description of Workplace One",
    created_at: "2023-01-01T00:00:00.000Z",
    created_by_id: "123123123",
  },
  {
    id: "2",
    title: "Workplace Two",
    description: "This is a description of Workplace Two",
    created_at: "2023-01-02T00:00:00.000Z",
    created_by_id: "123123123",
  },
  {
    id: "3",
    title: "Workplace Three",
    description: "This is a description of Workplace Three",
    created_at: "2023-01-03T00:00:00.000Z",
    created_by_id: "123123123",
  },
  {
    id: "4",
    title: "Workplace Four",
    description: "This is a description of Workplace Four",
    created_at: "2023-01-04T00:00:00.000Z",
    created_by_id: "123123123",
  },
];

interface WorkplaceSelectProps {
  workplaceIdSelected: string;
  resourcePathname: string;
}

export const WorkplaceSelect: FC<WorkplaceSelectProps> = ({
  workplaceIdSelected,
  resourcePathname,
}) => {
  console.log("🚀 ~ WorkplaceSelect ~ workplaces:", workplaces);

  const currentWorkplace = workplaces.find(
    (workplace) => workplace.id === workplaceIdSelected
  );

  const restWorkplaces = workplaces.filter(
    (workplace) => workplace.id !== workplaceIdSelected
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {currentWorkplace?.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col min-w-[150px]">
            {restWorkplaces.map(({ id, title }) => (
              <Link
                key={id}
                href={`/workplace/${id}/${resourcePathname}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="p-4 border border-gray-200 hover:bg-gray-100 hover:text-gray-900 text-sm">
                  {title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
