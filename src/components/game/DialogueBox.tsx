import { useEffect, useState } from "react";

type DialogueBoxProps = {
  speaker?: string;
  text: string;
  mood: "calm" | "tense" | "neutral";
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

  return (
    <div
      className={`dialogue-appear bg-[hsl(var(--vn-dialogue-bg))] backdrop-blur-sm border-2 ${getMoodColor()} rounded-lg p-6 md:p-8 shadow-2xl max-w-4xl mx-auto`}
    >
      {speaker && (
        <div className="mb-3">
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
  );
};
