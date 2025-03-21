import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

export const reviews = [
  {
    name: "Rahul",
    username: "@rahul",
    body: "This portfolio is absolutely stunning! The design and animations are top-notch.",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Sneha",
    username: "@sneha",
    body: "I love the smooth experience on this website. The UI is so clean and professional.",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Amit",
    username: "@amit",
    body: "Great job on the responsiveness! It works flawlessly on all my devices.",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "The animations and effects are so well-crafted. Super impressive!",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "This is one of the best portfolios I’ve seen! The attention to detail is fantastic.",
    img: "https://avatar.vercel.sh/vikram",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden border-x-cyan-950">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
