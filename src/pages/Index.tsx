import { useGameState } from "@/hooks/useGameState";
import { StartMenu } from "@/components/game/StartMenu";
import { GameBackground } from "@/components/game/GameBackground";
import { DialogueBox } from "@/components/game/DialogueBox";
import { ChoiceButtons } from "@/components/game/ChoiceButtons";
import { StatsDisplay } from "@/components/game/StatsDisplay";
import { EndingScreen } from "@/components/game/EndingScreen";

const Index = () => {
  const {
    currentScene,
    stats,
    makeChoice,
    startGame,
    restartGame,
    isTransitioning,
    hasStarted,
  } = useGameState();

  if (!hasStarted) {
    return <StartMenu onStart={startGame} />;
  }

  if (!currentScene) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-xl text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GameBackground background={currentScene.background} mood={currentScene.mood} />
      
      <StatsDisplay stats={stats} />

      <div className="relative z-10 flex flex-col min-h-screen justify-end p-4 md:p-8 pb-8 md:pb-12">
        <div className={`space-y-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {currentScene.isEnding ? (
            <EndingScreen
              text={currentScene.text}
              stats={stats}
              onRestart={restartGame}
            />
          ) : (
            <>
              <DialogueBox
                speaker={currentScene.speaker}
                text={currentScene.text}
                mood={currentScene.mood}
              />

              {currentScene.choices && currentScene.choices.length > 0 && (
                <ChoiceButtons
                  choices={currentScene.choices}
                  onChoice={makeChoice}
                  disabled={isTransitioning}
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* Audio placeholders - these would be actual audio elements in production */}
      <audio id="calm-music" loop style={{ display: 'none' }}>
        <source src="/audio/calm.mp3" type="audio/mpeg" />
      </audio>
      <audio id="tense-music" loop style={{ display: 'none' }}>
        <source src="/audio/tense.mp3" type="audio/mpeg" />
      </audio>
      <audio id="mellow-music" loop style={{ display: 'none' }}>
        <source src="/audio/mellow.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Index;
