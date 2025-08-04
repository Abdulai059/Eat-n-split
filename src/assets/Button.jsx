function Button({ color, text }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "black",
        cursor: "pointer",
        border: "none",
        padding: "3px 10px",
        borderRadius: "8px",
        margin: "4px",
        fontSize: "14px",
        display: "inline-block",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
