import { useEffect, useState } from "react";
import { Char } from "../components/Char";
import { mapPoints } from "../data/mapPoints";
import { IChar } from "../interfaces/IChar";

export const HomePage = () => {
  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
  }, []);

  const [char, setChar] = useState({
    x: 1,
    y: 2,
    direction: "bottom",
    name: "Antedeguemon",
  } as IChar);

  const [isAllowed, setAllowed] = useState(false);

  console.log("char pos", char.x, char.y);
  console.log("is allowed", isAllowed);

  const moveTop = () => {
    setChar((prev) => ({ ...prev, y: prev.y - 1, direction: "top" }));
  };
  const moveBottom = () => {
    setChar((prev) => ({ ...prev, y: prev.y + 1, direction: "bottom" }));
  };
  const moveRight = () => {
    setChar((prev) => ({ ...prev, x: prev.x + 1, direction: "right" }));
  };
  const moveLeft = () => {
    setChar((prev) => ({ ...prev, x: prev.x - 1, direction: "left" }));
  };

  useEffect(() => {
    const mapValue = getMapValue(char);
    if (!mapValue) {
      setAllowed(false);
      return;
    }
    setAllowed(true);
  }, [char]);

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.code === "ArrowUp") {
      moveTop();
      return;
    }

    if (e.code === "ArrowDown") {
      moveBottom();
      return;
    }

    if (e.code === "ArrowRight") {
      moveRight();
      return;
    }

    if (e.code === "ArrowLeft") {
      moveLeft();
      return;
    }
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

const getMapValue = (char: IChar) => {
  if (char.x < 0) return;
  if (char.y < 0) return;
  return mapPoints[char.y][char.x];
};
