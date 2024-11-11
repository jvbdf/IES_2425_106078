export default function Square({ value, onSquareClick }) {  
  const buttonStyle = {
      backgroundColor: value === "X" ? "red" : value === "O" ? "green" : "white",
      color: "white",
      fontSize: "20px",
      height: "40px",
      width: "40px",
      border: "1px solid #000",
      cursor: "pointer"
  };

  return (
    <button className="square" onClick={onSquareClick} style={buttonStyle}>
      {value}
    </button>
  );
}