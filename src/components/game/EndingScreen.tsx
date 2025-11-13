import { Button } from "@/components/ui/button";
import { GameStats } from "@/hooks/useGameState";

type EndingScreenProps = {
  text: string;
  stats: GameStats;
  onRestart: () => void;
};

export const EndingScreen = ({ text, stats, onRestart }: EndingScreenProps) => {
  const getEndingTitle = () => {
    if (stats.relationshipPoints >= 20 && stats.stressLevel <= 20) {
      return "The Empathy Ending";
    }
    if (stats.stressLevel >= 30 || stats.honestyPoints <= -10) {
      return "The Isolation Ending";
    }
    return "The Reflection Ending";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-fade-in px-4">
      <div className="text-center space-y-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {getEndingTitle()}
        </h2>
        
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            {text}
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">Your Journey</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">💙</div>
              <div className="text-white/70 text-sm">Relationships</div>
              <div className="text-2xl font-bold text-primary">
                {stats.relationshipPoints}
              </div>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white/70 text-sm">Stress</div>
              <div className="text-2xl font-bold text-secondary">
                {stats.stressLevel}
              </div>
            </div>
            <div>
              <div className="text-3xl mb-2">✨</div>
              <div className="text-white/70 text-sm">Honesty</div>
              <div className="text-2xl font-bold text-accent">
                {stats.honestyPoints}
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={onRestart}
          size="lg"
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Play Again
        </Button>
      </div>
    </div>
  );
};
