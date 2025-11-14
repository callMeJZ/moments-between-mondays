import { Button } from "@/components/ui/button";
import bgStartMenu from "@/assets/bg-start-menu.jpg";

type StartMenuProps = {
  onStart: () => void;
};

export const StartMenu = ({ onStart }: StartMenuProps) => {
  return (
    <div 
      className="flex min-h-screen items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgStartMenu})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="animate-fade-in text-center space-y-8 px-4 sm:px-6 relative z-10 max-w-2xl mx-auto">
        <div className="bg-background/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-2xl border border-border/50">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight drop-shadow-lg">
              Moments Between
              <br />
              <span className="text-primary">Mondays</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto">
              A story about the small decisions that define who we are
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center pt-8">
            <Button
              onClick={onStart}
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Game
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
              onClick={() => {
                alert(
                  "Created with Lovable\n\nA short interactive visual novel about everyday choices.\n\nPlay time: 10-12 minutes"
                );
              }}
            >
              Credits
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground space-y-2">
            <p>🎮 Use choices to shape your story</p>
            <p>Made by Jessa Coronado</p>
          </div>
        </div>
      </div>
    </div>
  );
};
