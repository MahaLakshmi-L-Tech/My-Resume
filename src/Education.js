import React, { PureComponent } from "react";
import { FaUniversity } from "react-icons/fa";

class Education extends PureComponent {
  render() {
    const { Education } = this.props;

    const education = Education.map((edu) => {
      return (
        <div>
          <li>
            <strong>{edu.Qualification}</strong>
            <br />
            <b>{edu.School}</b>
            <br />
            {edu.Grade} , {edu.Year}
          </li>
          <br />
        </div>
      );
    });

    return (
      <>
        <div>
          <h3 className="edumargin">
            <FaUniversity />
            Education
          </h3>
          <ul className="educationList">{education}</ul>
        </div>
      </>
    );
  }
}

export default Education;
