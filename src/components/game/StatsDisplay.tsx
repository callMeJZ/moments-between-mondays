import { GameStats } from "@/hooks/useGameState";

type StatsDisplayProps = {
  stats: GameStats;
};

export const StatsDisplay = ({ stats }: StatsDisplayProps) => {
  return (
    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white text-sm space-y-2 border border-white/10">
      <div className="flex items-center gap-2">
        <span className="text-primary">💙</span>
        <span>Relationships: {stats.relationshipPoints}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-secondary">⚡</span>
        <span>Stress: {stats.stressLevel}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-accent">✨</span>
        <span>Honesty: {stats.honestyPoints}</span>
      </div>
    </div>
  );
};
