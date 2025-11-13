import { useState, useCallback } from "react";
import { scenes } from "@/data/scenes";

export type GameStats = {
  relationshipPoints: number;
  stressLevel: number;
  honestyPoints: number;
};

export const useGameState = () => {
  const [currentSceneId, setCurrentSceneId] = useState<string | null>(null);
  const [stats, setStats] = useState<GameStats>({
    relationshipPoints: 0,
    stressLevel: 0,
    honestyPoints: 0,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startGame = useCallback(() => {
    setHasStarted(true);
    setCurrentSceneId("morning-1");
    setStats({
      relationshipPoints: 0,
      stressLevel: 0,
      honestyPoints: 0,
    });
  }, []);

  const makeChoice = useCallback(
    (choiceIndex: number) => {
      const currentScene = scenes.find((s) => s.id === currentSceneId);
      if (!currentScene || !currentScene.choices) return;

      const choice = currentScene.choices[choiceIndex];
      
      // Update stats
      setStats((prev) => ({
        relationshipPoints: prev.relationshipPoints + (choice.relationshipDelta || 0),
        stressLevel: prev.stressLevel + (choice.stressDelta || 0),
        honestyPoints: prev.honestyPoints + (choice.honestyDelta || 0),
      }));

      // Transition to next scene
      setIsTransitioning(true);
      setTimeout(() => {
        if (choice.nextScene === "ending-decision") {
          // Determine ending based on stats
          const endingId = determineEnding(
            stats.relationshipPoints + (choice.relationshipDelta || 0),
            stats.stressLevel + (choice.stressDelta || 0),
            stats.honestyPoints + (choice.honestyDelta || 0)
          );
          setCurrentSceneId(endingId);
        } else {
          setCurrentSceneId(choice.nextScene || null);
        }
        setIsTransitioning(false);
      }, 500);
    },
    [currentSceneId, stats]
  );

  const determineEnding = (
    relationship: number,
    stress: number,
    honesty: number
  ): string => {
    // High relationship + low stress → Empathy Ending
    if (relationship >= 20 && stress <= 20) {
      return "ending-empathy";
    }
    // High stress + low honesty → Isolation Ending
    if (stress >= 30 || honesty <= -10) {
      return "ending-isolation";
    }
    // Balanced stats → Reflection Ending
    return "ending-reflection";
  };

  const restartGame = useCallback(() => {
    setCurrentSceneId(null);
    setHasStarted(false);
    setStats({
      relationshipPoints: 0,
      stressLevel: 0,
      honestyPoints: 0,
    });
  }, []);

  const currentScene = currentSceneId
    ? scenes.find((s) => s.id === currentSceneId)
    : null;

  return {
    currentScene,
    stats,
    makeChoice,
    startGame,
    restartGame,
    isTransitioning,
    hasStarted,
  };
};
