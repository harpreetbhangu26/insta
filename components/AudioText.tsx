"use client";
import { CircleCheck, Volume1 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AudioProps {
  question: string;
  answer: string;
  voice: string;
}

function AudioText({ question, answer, voice }: AudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showText, setShowText] = useState<string>("");
  const [ticked, setTicked] = useState<boolean>(false);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setTicked(true);
      setShowText("");
    }
  };

  useEffect(() => {
    if (ticked && showText.length < answer.length) {
      const timer = setTimeout(() => {
        setShowText(answer.substring(0, showText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [ticked, showText, answer]);

  return (
    <div className="flex gap-4 bg-green-500 flex items-center p-4 text-2xl text-white">
      <h1>{question}</h1>
      <Volume1 onClick={handleClick} />
      {ticked && <CircleCheck />}
      <h2>{showText}</h2>

      <audio ref={audioRef} src={voice} />
    </div>
  );
}

export default AudioText;
