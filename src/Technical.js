import React, { PureComponent } from "react";
import { TbVocabulary } from "react-icons/tb";

class Technical extends PureComponent {
  render() {
    const { Technical_Skills } = this.props;

    const tech = Technical_Skills.map((skill) => ({
      type: skill.name,
      level: skill.value,
    }));

    return (
      <>
        <div className="skillDetail">
          <h3>
            <TbVocabulary size="" />
            Technical Skills
          </h3>

          <ul className="skills">
            {tech.map((skill) => (
              <li
                key={skill.type}
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: "rgb(2, 100, 169)",
                }}
              >
                <p>
                  {skill.type}
                  <span>{skill.level}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Technical;
