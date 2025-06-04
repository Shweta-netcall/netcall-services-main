"use client";

import { useEffect, useState } from "react";

const words = [
  "Technology Begins Here",
  "Connecting the World",
  "Innovative Solutions",
  "Technology Begins Here",
];

export default function TypewriterText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const updatedText = isDeleting
      ? currentWord.substring(0, charIndex - 1)
      : currentWord.substring(0, charIndex + 1);

    setText(updatedText);

    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && updatedText === currentWord) {
      speed = 1000; // Pause before deleting
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setFadeIn(true); // Trigger fade-in on new word
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, charIndex]);

  // Small fade-in effect reset
  useEffect(() => {
    if (fadeIn) {
      const timer = setTimeout(() => setFadeIn(false), 300); // fade effect duration
      return () => clearTimeout(timer);
    }
  }, [fadeIn]);

  return (
    <div
      className={`text-3xl font-bold text-center transition-opacity duration-500 ${
        fadeIn ? "opacity-0" : "opacity-100"
      }`}
    >
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
}
