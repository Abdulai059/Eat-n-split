import Button from "./Button.jsx";

function Card() {
  return (
    <div className="card">
      <span className="profile">
        <img src="dev.png" alt="profile pic" />
      </span>
      <div className="Card-info">
        <h2>Abdulai Zesung Uth.</h2>
        <p>
          Full-stack web developer and student at Hackerboost. When not coding
          or preparing a course, I like to play board games, to cook (and eat),
          or to just enjoy the Afica sun at the beach
        </p>
        <span className="btn-group">
          <Button color="blue" text="HTML + CSS 💪" />
          <Button color="yellow" text="JavaScript 💪" />
          <Button color="Light green" text="Web Design 💪" />
          <Button color="red" text="Git and GitHub 👍" />
          <Button color="Cyan" text="React 💪" />
          <Button color="orange" text="Svelte 🤌" />
        </span>
      </div>
    </div>
  );
}

export default Card;
