export type Choice = {
  text: string;
  relationshipDelta?: number;
  stressDelta?: number;
  honestyDelta?: number;
  nextScene?: string;
};

export type Scene = {
  id: string;
  background: string;
  mood: "calm" | "tense" | "neutral";
  speaker?: string;
  text: string;
  choices?: Choice[];
  isEnding?: boolean;
};

export const scenes: Scene[] = [
  // Scene 1: Morning Rush
  {
    id: "morning-1",
    background: "bedroom",
    mood: "calm",
    speaker: "Narrator",
    text: "Your alarm goes off. It's 7:30 AM on a Tuesday. The morning light filters through your dorm room window, painting everything in soft gold.",
    choices: [
      {
        text: "Hit snooze one more time",
        stressDelta: 5,
        honestyDelta: -5,
        nextScene: "morning-2a",
      },
      {
        text: "Get up immediately and start the day",
        relationshipDelta: 5,
        stressDelta: -5,
        nextScene: "morning-2b",
      },
    ],
  },
  {
    id: "morning-2a",
    background: "bedroom",
    mood: "tense",
    speaker: "Jean",
    text: "Just five more minutes... Wait, what time is it? 7:55?! I have Data Structures at 8:15!",
    choices: [
      {
        text: "Rush out without breakfast",
        stressDelta: 10,
        nextScene: "campus-1",
      },
      {
        text: "Take a moment to grab a quick snack",
        stressDelta: 5,
        honestyDelta: 5,
        nextScene: "campus-1",
      },
    ],
  },
  {
    id: "morning-2b",
    background: "bedroom",
    mood: "calm",
    speaker: "Jean",
    text: "A good start to the day. I have time for breakfast and maybe review those algorithm notes... even though I'm not sure I fully understand them.",
    choices: [
      {
        text: "Take your time and enjoy the morning",
        relationshipDelta: 5,
        stressDelta: -5,
        nextScene: "campus-1",
      },
    ],
  },

  // Scene 2: Campus Encounter
  {
    id: "campus-1",
    background: "hallway",
    mood: "neutral",
    speaker: "Narrator",
    text: "The hallway is buzzing with students rushing to their morning classes. You spot Jordan, your lab partner, looking stressed near the bulletin board.",
    choices: [
      {
        text: "Stop to ask if Jordan is okay",
        relationshipDelta: 10,
        stressDelta: 5,
        nextScene: "campus-2a",
      },
      {
        text: "Wave and keep walking to class",
        stressDelta: -5,
        nextScene: "campus-2b",
      },
      {
        text: "Pretend you didn't notice",
        honestyDelta: -10,
        stressDelta: -5,
        nextScene: "campus-2b",
      },
    ],
  },
  {
    id: "campus-2a",
    background: "hallway",
    mood: "calm",
    speaker: "Jordan",
    text: "Oh, hey Jean... Yeah, I'm just worried about the presentation today. I didn't finish my part. Thanks for asking though.",
    choices: [
      {
        text: "Offer to help during lunch",
        relationshipDelta: 15,
        stressDelta: 10,
        honestyDelta: 10,
        nextScene: "library-1",
      },
      {
        text: "Give encouraging words but mention your own workload",
        relationshipDelta: 5,
        honestyDelta: 10,
        nextScene: "library-1",
      },
    ],
  },
  {
    id: "campus-2b",
    background: "hallway",
    mood: "neutral",
    speaker: "Narrator",
    text: "You make it to class on time. The lecture blurs by in a haze of PowerPoint slides and note-taking. Before you know it, it's already lunchtime.",
    choices: [
      {
        text: "Continue to the library",
        nextScene: "library-1",
      },
    ],
  },

  // Scene 3: Group Project
  {
    id: "library-1",
    background: "library",
    mood: "tense",
    speaker: "Narrator",
    text: "The library is quiet except for the soft clicking of keyboards. Your group project team is gathered around a table. The deadline is in two days, and tensions are high.",
    choices: [
      {
        text: "Suggest taking on extra work yourself",
        stressDelta: 15,
        honestyDelta: -5,
        relationshipDelta: 10,
        nextScene: "library-2a",
      },
      {
        text: "Propose dividing tasks equally and honestly",
        honestyDelta: 15,
        relationshipDelta: 5,
        stressDelta: 5,
        nextScene: "library-2b",
      },
      {
        text: "Stay quiet and let others decide",
        relationshipDelta: -10,
        honestyDelta: -10,
        nextScene: "library-2c",
      },
    ],
  },
  {
    id: "library-2a",
    background: "library",
    mood: "tense",
    speaker: "Sam",
    text: "Are you sure? That's a lot to take on. I appreciate it, but I don't want you to burn out...",
    choices: [
      {
        text: "Insist you can handle it",
        stressDelta: 15,
        honestyDelta: -10,
        nextScene: "rooftop-1",
      },
      {
        text: "Reconsider and ask for help",
        honestyDelta: 10,
        relationshipDelta: 10,
        stressDelta: 5,
        nextScene: "rooftop-1",
      },
    ],
  },
  {
    id: "library-2b",
    background: "library",
    mood: "calm",
    speaker: "Everyone",
    text: "The team nods in agreement. It feels good to address things directly. Everyone seems more relaxed knowing what's expected.",
    choices: [
      {
        text: "Head to the rooftop to clear your mind",
        stressDelta: -5,
        nextScene: "rooftop-1",
      },
    ],
  },
  {
    id: "library-2c",
    background: "library",
    mood: "tense",
    speaker: "Narrator",
    text: "The discussion continues without your input. You feel invisible, like your opinion doesn't matter. The weight of silence settles on your shoulders.",
    choices: [
      {
        text: "Leave and go to the rooftop",
        stressDelta: 10,
        relationshipDelta: -5,
        nextScene: "rooftop-1",
      },
    ],
  },

  // Scene 4: Rooftop Reflection
  {
    id: "rooftop-1",
    background: "rooftop",
    mood: "calm",
    speaker: "Narrator",
    text: "The rooftop is your secret escape. The sunset paints the sky in shades of purple and orange. You take a deep breath and let the day wash over you.",
    choices: [
      {
        text: "Reflect on your relationships",
        nextScene: "rooftop-reflect-relationships",
      },
      {
        text: "Think about your stress and choices",
        nextScene: "rooftop-reflect-stress",
      },
      {
        text: "Question if you were honest with yourself today",
        nextScene: "rooftop-reflect-honesty",
      },
    ],
  },
  {
    id: "rooftop-reflect-relationships",
    background: "rooftop",
    mood: "calm",
    speaker: "Jean",
    text: "Did I do enough for the people around me? Jordan seemed so worried... I wanted to help but I wasn't sure how. It's always hard for me to reach out, even when I care.",
    choices: [
      {
        text: "Feel at peace with your decisions",
        nextScene: "ending-decision",
      },
    ],
  },
  {
    id: "rooftop-reflect-stress",
    background: "rooftop",
    mood: "tense",
    speaker: "Jean",
    text: "Everything feels like too much sometimes. The programming assignments, the exams I barely pass... I get high scores sometimes but I still feel like I don't understand anything. Am I really cut out for Computer Science?",
    choices: [
      {
        text: "Accept that tomorrow is a new day",
        nextScene: "ending-decision",
      },
    ],
  },
  {
    id: "rooftop-reflect-honesty",
    background: "rooftop",
    mood: "calm",
    speaker: "Jean",
    text: "Was I true to myself today? Or did I just avoid things like I always do? I want to be more open with people, to let them in... but it's so hard when you're scared of getting hurt.",
    choices: [
      {
        text: "Commit to being more honest going forward",
        nextScene: "ending-decision",
      },
    ],
  },

  // Endings
  {
    id: "ending-empathy",
    background: "rooftop",
    mood: "calm",
    speaker: "Narrator",
    text: "As the sun sets, you realize that today wasn't about grand gestures—it was about small moments of connection. You chose empathy, you listened, you cared. These ordinary decisions defined you more than you know. Tomorrow is another chance to be present for others, and yourself.",
    isEnding: true,
  },
  {
    id: "ending-isolation",
    background: "rooftop",
    mood: "tense",
    speaker: "Narrator",
    text: "The weight of the day lingers. Every rushed decision, every half-truth, every moment you prioritized convenience over connection. You feel distant—from others, from yourself. But awareness is the first step. Tomorrow, you can choose differently. Small changes matter.",
    isEnding: true,
  },
  {
    id: "ending-reflection",
    background: "rooftop",
    mood: "neutral",
    speaker: "Narrator",
    text: "Today was... ordinary. And yet, within that ordinary day, you made choices. Some easy, some hard. You were human—imperfect, trying. That's what life is: a series of Mondays, and the moments between them. Each choice shapes who you're becoming. Keep reflecting. Keep choosing.",
    isEnding: true,
  },
];
