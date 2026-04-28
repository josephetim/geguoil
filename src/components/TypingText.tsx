"use client";

import { useEffect, useMemo, useState } from "react";
  

const phrases = [
  "We Deliver Energy",
  "We Deliver Reliability",
  "We Deliver Convenience",
];

const finalText = "Your Trusted Petroleum Partner";

const typingSpeed = 45;
const deletingSpeed = 30;
const pauseBeforeDelete = 650;
const pauseBeforeNextPhrase = 200;
const fadeDuration = 300;

type PhraseParts = {
  prefix: string;
  lastWord: string;
};

function splitPhrase(phrase: string): PhraseParts {
  const words = phrase.trim().split(/\s+/);
  const lastWord = words[words.length - 1] ?? "";
  const prefixWords = words.slice(0, -1).join(" ");
  return {
    prefix: prefixWords.length > 0 ? `${prefixWords} ` : "",
    lastWord,
  };
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type TypingTextProps = {
  className?: string;
};

export default function TypingText({ className = "" }: TypingTextProps) {
  const parts = useMemo(() => phrases.map(splitPhrase), []);
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (parts.length === 0) {
        setShowCursor(false);
        setText(finalText);
        return;
      }

      const firstFullPhrase = `${parts[0].prefix}${parts[0].lastWord}`;

      for (let i = 1; i <= firstFullPhrase.length; i += 1) {
        if (cancelled) return;
        setText(firstFullPhrase.slice(0, i));
        await wait(typingSpeed);
      }

      let currentPrefix = parts[0].prefix;
      let currentLastWord = parts[0].lastWord;

      await wait(pauseBeforeDelete);

      for (let phraseIndex = 1; phraseIndex < parts.length; phraseIndex += 1) {
        for (let chars = currentLastWord.length - 1; chars >= 0; chars -= 1) {
          if (cancelled) return;
          currentLastWord = currentLastWord.slice(0, chars);
          setText(`${currentPrefix}${currentLastWord}`);
          await wait(deletingSpeed);
        }

        await wait(pauseBeforeNextPhrase);

        const nextPhrase = parts[phraseIndex];
        currentPrefix = nextPhrase.prefix;
        currentLastWord = "";
        setText(currentPrefix);

        for (let chars = 1; chars <= nextPhrase.lastWord.length; chars += 1) {
          if (cancelled) return;
          currentLastWord = nextPhrase.lastWord.slice(0, chars);
          setText(`${currentPrefix}${currentLastWord}`);
          await wait(typingSpeed);
        }

        await wait(pauseBeforeDelete);
      }

      if (cancelled) return;
      setShowCursor(false);
      setOpacity(0);
      await wait(fadeDuration);
      if (cancelled) return;
      setText(finalText);
      setOpacity(1);
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [parts]);

  return (
    <span className={`inline-block max-w-full text-center ${className}`.trim()}>
      <span className="transition-opacity duration-300" style={{ opacity }}>
        {text}
        {showCursor ? <span className="animate-pulse">|</span> : null}
      </span>
    </span>
  );
}
