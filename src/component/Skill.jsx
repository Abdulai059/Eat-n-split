function Skill({ color, skill, level }) {
  return (
    <span
      style={{
        backgroundColor: color,
        color: "black",
        cursor: "pointer",
        border: "none",
        padding: "5px 10px",
        borderRadius: "8px",
        margin: "4px",
        fontSize: "15px",
        display: "inline-block",
      }}
    >
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "Intermediate" && "✌️"}
        {level === "beginner" && "🤔"}
      </span>
    </span>
  );
}

export default Skill;
