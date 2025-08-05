import SkillList from "./SkillList";

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
        <SkillList />
      </div>
    </div>
  );
}

export default Card;
