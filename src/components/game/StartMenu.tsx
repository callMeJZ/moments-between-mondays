import { Button } from "@/components/ui/button";

type StartMenuProps = {
  onStart: () => void;
};

export const StartMenu = ({ onStart }: StartMenuProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/20">
      <div className="animate-fade-in text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-tight">
            Moments Between
            <br />
            <span className="text-primary">Mondays</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
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
            className="text-muted-foreground hover:text-foreground"
            onClick={() => {
              alert(
                "Created with Lovable\n\nA short interactive visual novel about everyday choices.\n\nPlay time: 10-12 minutes"
              );
            }}
          >
            Credits
          </Button>
        </div>

        <div className="pt-12 text-sm text-muted-foreground">
          <p>🎮 Use choices to shape your story</p>
          <p className="mt-2">⏱️ ~10 minutes playtime</p>
        </div>
      </div>
    </div>
  );
};
