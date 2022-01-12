import { IChar } from "../interfaces/IChar";

interface Props {
  char: IChar;
}

export const Char = ({ char }: Props) => {
  const posX = char.x * 30;
  const posY = char.y * 30;

  const backgroundPosition =
    char.direction === "top"
      ? 30
      : char.direction === "right"
      ? 60
      : char.direction === "bottom"
      ? 120
      : 90;

  return (
    <div
      style={{
        background: "url('/char.png')",
        height: "30px",
        width: "30px",
        position: "absolute",
        left: `${posX}px`,
        top: `${posY}px`,
        backgroundPosition: `0 ${backgroundPosition}px`,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "full",
          height: "full",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontWeight: "bold",
            position: "absolute",
            top: "-40px",
          }}
        >
          {char.name}
        </p>
      </div>
    </div>
  );
};
