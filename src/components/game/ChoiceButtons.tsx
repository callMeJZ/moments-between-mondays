import { Button } from "@/components/ui/button";
import { Choice } from "@/data/scenes";

type ChoiceButtonsProps = {
  choices: Choice[];
  onChoice: (index: number) => void;
  disabled: boolean;
};

export const ChoiceButtons = ({
  choices,
  onChoice,
  disabled,
}: ChoiceButtonsProps) => {
  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto animate-fade-in">
      {choices.map((choice, index) => (
        <Button
          key={index}
          onClick={() => onChoice(index)}
          disabled={disabled}
          className="h-auto py-4 px-6 text-left justify-start bg-[hsl(var(--vn-choice-bg))] hover:bg-[hsl(var(--vn-choice-hover))] text-white border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          variant="ghost"
        >
          <span className="text-base md:text-lg font-medium">
            {choice.text}
          </span>
        </Button>
      ))}
    </div>
  );
};
