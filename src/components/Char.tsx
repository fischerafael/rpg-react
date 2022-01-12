import { IChar } from "../interfaces/IChar";

interface Props {
  char: IChar;
}

export const Char = ({ char }: Props) => {
  const posX = char.x * 30;
  const posY = char.y * 30;

  return (
    <div
      style={{
        background: "url('/char.png')",
        height: "30px",
        width: "30px",
        position: "absolute",
        left: `${posX}px`,
        top: `${posY}px`,
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
