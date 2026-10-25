import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

const supabaseProjectUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient<Database>(
  supabaseProjectUrl,
  supabasePublishableKey,
);
