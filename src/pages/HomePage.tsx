import { useEffect, useState } from "react";
import { Char } from "../components/Char";
import { IChar } from "../interfaces/IChar";

export const HomePage = () => {
  const [char, setChar] = useState({
    x: 5,
    y: 5,
    direction: "bottom",
    name: "Antedeguemon",
  } as IChar);

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
  }, []);

  const onKeyPress = (e: KeyboardEvent) => {
    if (!e) return;

    if (e.code === "ArrowUp") {
      setChar((prev) => ({ ...prev, y: prev.y - 1, direction: "top" }));
      return;
    }

    if (e.code === "ArrowDown") {
      if (char.x > 12) return;

      setChar((prev) => ({ ...prev, y: prev.y + 1, direction: "bottom" }));
      return;
    }

    if (e.code === "ArrowRight") {
      setChar((prev) => ({ ...prev, x: prev.x + 1, direction: "right" }));
      return;
    }

    if (e.code === "ArrowLeft") {
      setChar((prev) => ({ ...prev, x: prev.x - 1, direction: "left" }));
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
