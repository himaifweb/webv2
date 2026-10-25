import { createClient } from "@supabase/supabase-js";

const supabaseProjectUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(
  supabaseProjectUrl,
  supabasePublishableKey,
);
