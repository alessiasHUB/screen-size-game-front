import { useState, useEffect } from "react";
import React from "react";

const maxWidth = 1744;
const minWidth = 455;
const maxHeight = 812;
const minHeight = 200;
const scale = 50;

export default function Game(): JSX.Element {
  const [width, setWidth] = useState<number>(Math.floor(window.innerWidth / scale));
  const [height, setHeight] = useState<number>(Math.floor(window.innerHeight / scale));
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(30);
  const [playState, setPlayState] = useState<boolean>(false);

  const generateRandomWidth = () => {
    return Math.floor(((Math.random() * (maxWidth - minWidth + 1)) + minWidth)/scale);
  };
  const generateRandomHeight = () => {
    return Math.floor(((Math.random() * (maxHeight - minHeight + 1)) + minHeight)/scale);
  };

  const [targetWidth, setTargetWidth] = useState<number>(generateRandomWidth);
  const [targetHeight, setTargetHeight] = useState<number>(generateRandomHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (targetWidth === width && targetHeight === height) {
      setScore(score + 1);
      setTargetHeight(generateRandomHeight);
      setTargetWidth(generateRandomWidth);
    }
    if (timer === 0) {
      setGameOver(true);
      setPlayState(false);
    }
    if (playState) {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);}
  }, [width, height, score, targetHeight, targetWidth, timer, gameOver, playState]);

  const play = () => {
    setScore(0);
    setPlayState(true);
    setGameOver(false);
    setTimer(30);
    setTargetHeight(generateRandomHeight);
    setTargetWidth(generateRandomWidth);
  };

  const handleResize = () => {
    setWidth(Math.floor(window.innerWidth/scale));
    setHeight(Math.floor(window.innerHeight/scale));
  };

  return (
    <>
      <div className="game-data">
        {!playState && <p className="start-txt">Press play to start</p>}
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
        {gameOver && <p>Game Over!</p>}
      </div>
    </>
  );
}
