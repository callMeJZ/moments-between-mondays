import { useEffect, useState } from "react";
import charJean from "@/assets/char-jean.png";
import charRiley from "@/assets/char-riley.png";
import charJamie from "@/assets/char-jamie.png";
import charCasey from "@/assets/char-casey.png";

type DialogueBoxProps = {
  speaker?: string;
  text: string;
  mood: "calm" | "tense" | "neutral";
};

const characterPortraits: Record<string, string> = {
  "Jean": charJean,
  "Riley": charRiley,
  "Jamie": charJamie,
  "Casey": charCasey,
};

export const DialogueBox = ({ speaker, text, mood }: DialogueBoxProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTypingComplete(false);
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [text]);

  const getMoodColor = () => {
    switch (mood) {
      case "calm":
        return "border-primary/30";
      case "tense":
        return "border-secondary/30";
      default:
        return "border-muted-foreground/30";
    }
  };

  const characterImage = speaker ? characterPortraits[speaker] : null;

  return (
    <div className="flex items-end gap-4 md:gap-6 max-w-5xl mx-auto">
      {characterImage && (
        <div className="hidden md:block flex-shrink-0 animate-fade-in">
          <img 
            src={characterImage} 
            alt={speaker}
            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-primary/30 shadow-2xl object-cover bg-background/80"
          />
        </div>
      )}
      
      <div
        className={`dialogue-appear bg-[hsl(var(--vn-dialogue-bg))] backdrop-blur-sm border-2 ${getMoodColor()} rounded-lg p-6 md:p-8 shadow-2xl flex-1`}
      >
        {speaker && (
          <div className="mb-3 flex items-center gap-3">
            {characterImage && (
              <img 
                src={characterImage} 
                alt={speaker}
                className="md:hidden w-12 h-12 rounded-full border-2 border-primary/30 object-cover"
              />
            )}
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {speaker}
            </span>
          </div>
        )}
        <div className="text-white/95 text-lg md:text-xl leading-relaxed min-h-[3rem]">
          {displayedText}
          {!isTypingComplete && (
            <span className="inline-block w-2 h-5 ml-1 bg-white/70 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
};
