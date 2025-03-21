import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { DATA } from "@/data/resume";

export const HackathonTimeline = () => {
  return (
    <InfiniteMovingCards
      items={DATA.hackathons.map((hackathon) => ({
        title: hackathon.title,
        dates: hackathon.dates,
        location: hackathon.location,
        description: hackathon.description,
        image: hackathon.image,
        mlh: hackathon.mlh,
        links: hackathon.links,
      }))}
    />
  );
};
