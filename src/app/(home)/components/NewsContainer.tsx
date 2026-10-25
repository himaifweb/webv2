import getActivities from "@/src/services/getActivities";
import News from "./News";

export default async function NewsContainer() {
  const activities = await getActivities();

  if (!activities || activities.length === 0) {
    return null;
  }

  return <News data={activities} />;
}
