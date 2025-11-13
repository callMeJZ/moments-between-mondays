import { useEffect, useState } from "react";
import bgBedroom from "@/assets/bg-bedroom.jpg";
import bgHallway from "@/assets/bg-hallway.jpg";
import bgLibrary from "@/assets/bg-library.jpg";
import bgRooftop from "@/assets/bg-rooftop.jpg";

type GameBackgroundProps = {
  background: string;
  mood: "calm" | "tense" | "neutral";
};

const backgrounds = {
  bedroom: bgBedroom,
  hallway: bgHallway,
  library: bgLibrary,
  rooftop: bgRooftop,
};

export const GameBackground = ({ background, mood }: GameBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [background]);

  const getMoodOverlay = () => {
    switch (mood) {
      case "calm":
        return "bg-[hsl(var(--mood-calm))]/20";
      case "tense":
        return "bg-[hsl(var(--mood-tense))]/20";
      default:
        return "bg-[hsl(var(--mood-neutral))]/10";
    }
  };

  const bgImage = backgrounds[background as keyof typeof backgrounds] || backgrounds.bedroom;

  return (
    <>
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      <div className={`absolute inset-0 ${getMoodOverlay()} transition-colors duration-1000`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    </>
  );
};
