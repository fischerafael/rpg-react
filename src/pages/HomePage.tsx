import { useEffect, useState } from "react";
import { Char } from "../components/Char";
import { mapPoints } from "../data/mapPoints";
import { IChar } from "../interfaces/IChar";

export const HomePage = () => {
  const [char, setChar] = useState({
    x: 1,
    y: 2,
    direction: "bottom",
    name: "Antedeguemon",
  } as IChar);

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress);
  }, []);

  const [isAllowed, setAllowed] = useState(true);

  console.log("char pos", char.x, char.y, isAllowed);

  useEffect(() => {
    const mapValue = canGo(char);
    if (!mapValue) {
      setAllowed(false);
      return;
    }
    setAllowed(true);
  }, [char]);

  const onKeyPress = (e: KeyboardEvent) => {
    const { code } = e;

    if (code === "ArrowUp") {
      if (!isPossible(char.x, char.y)) return;
      moveTop();
      return;
    }

    if (code === "ArrowDown") {
      moveBottom();
      return;
    }

    if (code === "ArrowRight") {
      moveRight();
      return;
    }

    if (code === "ArrowLeft") {
      moveLeft();
      return;
    }
  };

  // const moveUp = (y: number, x: number) => {
  //   isPossible(y, x) ? ;
  // };

  const moveTop = () => {
    setChar((prev) => ({
      ...prev,
      y: prev.y - 1,
      direction: "top",
    }));
  };
  const moveBottom = () => {
    setChar((prev) => ({
      ...prev,
      y: canGo(prev) ? prev.y + 1 : prev.y,
      direction: "bottom",
    }));
  };
  const moveRight = () => {
    setChar((prev) => ({
      ...prev,
      x: canGo(prev) ? prev.x + 1 : prev.x,
      direction: "right",
    }));
  };
  const moveLeft = () => {
    setChar((prev) => ({
      ...prev,
      x: canGo(prev) ? prev.x - 1 : prev.x,
      direction: "left",
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#333",
      }}
    >
      <div
        style={{
          display: "flex",
          background: "url('/map.png')",
          width: "100%",
          maxWidth: "480px",
          height: "100%",
          maxHeight: "480px",
          position: "relative",
        }}
      >
        <Char char={char} />
      </div>
    </div>
  );
};

const checkIfCanGo = (char: IChar) => {
  if (canGo(char)) return char.y - 1;
  return char.y;
};

const canGo = (char: IChar) => {
  if (char.x < 0) return false;
  if (char.y < 0) return false;
  if (!mapPoints[char.y][char.x]) return false;
  return true;
};

const isPossible = (x: number, y: number) => {
  if (x < 0) return false;
  if (y < 0) return false;
  if (!mapPoints[y][x]) return false;
  return true;
};
