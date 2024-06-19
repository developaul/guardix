import {
  HTTP_STATUS,
  TABLES,
  workplaceSchema,
  workplaceSchemaFormType,
  workplaceSchemaType,
} from "@/constants";
import { supabase } from "../connections";

class WorkplaceController {
  async getWorkplaces() {
    const { data: worksplaces } = await supabase
      .from(TABLES.WORKPLACES)
      .select();

    return worksplaces;
  }

  async createWorkplace(
    args: workplaceSchemaFormType
  ): Promise<workplaceSchemaType> {
    const { data: fields, success, error } = workplaceSchema.safeParse(args);

    if (!success) throw new Error(error.message);

    const { data, status } = await supabase
      .from(TABLES.WORKPLACES)
      .insert(fields)
      .select();

    if (status !== HTTP_STATUS.CREATED)
      throw new Error("Failed to create workplace");

    const [workplace] = data!;

    return workplace;
  }

  async deleteWorkplace(workplaceId: string) {
    await supabase.from(TABLES.WORKPLACES).delete().eq("id", workplaceId);
  }
}

export const workplaceController = new WorkplaceController();
