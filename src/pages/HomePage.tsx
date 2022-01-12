import { useState } from "react";
import { Char } from "../components/Char";
import { IChar } from "../interfaces/IChar";

export const HomePage = () => {
  const [char, setChar] = useState({
    x: 1,
    y: 5,
    direction: "bottom",
    name: "Antedeguemon",
  } as IChar);

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
