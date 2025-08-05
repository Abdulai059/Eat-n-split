import skillData from "./data/data";
import Skill from "./Skill";

function SkillList() {
  const skills = skillData;

  return (
    <span className="btn-group">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </span>
  );
}
export default SkillList;
