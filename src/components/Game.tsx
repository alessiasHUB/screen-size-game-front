import { useState, useEffect } from "react";
import React from "react";

export default function Game(): JSX.Element {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(30);

  const maxWidth = 1744;
  const minWidth = 455;
  const maxHeight = 812;
  const generateRandomWidth = () => {
    return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  };
  const generateRandomHeight = () => {
    return Math.floor(Math.random() * (maxHeight - 0 + 1)) + 0;
  };
  const [targetWidth, setTargetWidth] = useState<number>(generateRandomWidth);
  const [targetHeight, setTargetHeight] =
    useState<number>(generateRandomHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (targetWidth === width && targetHeight === height) {
      setScore(score + 1);
      setTargetHeight(generateRandomHeight);
      setTargetWidth(generateRandomWidth);
    }
    if (timer < 0) {
      setGameOver(true);
      setTimer(0);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [width, height, score, targetHeight, targetWidth, timer, gameOver]);

  const play = () => {
    setScore(0);
    setGameOver(false);
    setTimer(30);
    setTargetHeight(generateRandomHeight);
    setTargetWidth(generateRandomWidth);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <div className="game-data">
        <p className="timer">time left: {timer}</p>
        <p className="p-target">
          target: {targetWidth} x {targetHeight}
        </p>
        <p className="p-real">
          real: {width} x {height}
        </p>
        <p>score: {score}</p>
        <button className="play-btn" onClick={play}>
          Play
        </button>
      </div>
    </>
  );
}
