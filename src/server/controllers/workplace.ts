import { z } from "zod";

import { TABLES } from "@/constants";
import { supabase } from "../connections";

interface CreateWorkplaceArgs {
  title: string;
  description: string;
  created_by_id: string;
}

const workplaceSchema = z.object({
  title: z.string(),
  description: z.string(),
  created_by_id: z.string(),
  created_at: z.string().datetime(),
});

class WorkplaceController {
  async getWorkplaces() {
    const { data: worksplaces } = await supabase
      .from(TABLES.WORKPLACES)
      .select();

    return worksplaces;
  }

  async createWorkplace(args: CreateWorkplaceArgs) {
    const { data, success, error } = workplaceSchema.safeParse(args);

    if (!success) throw new Error(error.message);

    const { data: workplace } = await supabase
      .from(TABLES.WORKPLACES)
      .insert(data);

    return workplace;
  }

  async deleteWorkplace(workplaceId: string) {
    await supabase.from(TABLES.WORKPLACES).delete().eq("id", workplaceId);
  }
}

export const workplaceController = new WorkplaceController();
