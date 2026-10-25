import { ActivityNewsItem } from "@/src/app/(home)/types/news";
import { supabase } from "@/src/lib/supabase";

export default async function getActivities(): Promise<ActivityNewsItem[]> {
  const { data: fetchResult, error } = await supabase
    .from("activities")
    .select(
      `
          title,
          description,
        thumbnail_url,
        location_type,
        location_detail,
        registration_link,
        news (
          description,
          cta_url
        )
      `,
    )
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch activities:", error);
    return [];
  }

  return (fetchResult ?? []).map((activity) => ({
    ...activity,
    news: Array.isArray(activity.news)
      ? (activity.news[0] ?? null)
      : activity.news,
  })) as ActivityNewsItem[];
}
