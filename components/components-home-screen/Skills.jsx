import SkillsTable from "./SkillsTable";
import VectorAnimated from "./VectorAnimated";

function Skills() {
  return (
    <div>
      <h2>Skills</h2>

      <div className="skill--section">
        <VectorAnimated className="skill--section__animated" />
        <div className="skill--section__tables">
          <SkillsTable title="Languages" content="javascript kotlin" />
          <SkillsTable title="Database" content="postgreSQL sqlite" />
          <SkillsTable title="Frameworks" content="next react android" />
          <SkillsTable title="Languages" content="Javascript Kotlin" />
          <SkillsTable
            title="Others"
            content="html css scss sass bootstrap ejs jetpack compose"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
