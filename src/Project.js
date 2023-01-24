import React, { PureComponent } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

class Project extends PureComponent {
  render() {
    const { Project_Details } = this.props;

    const project = Project_Details.map((pro) => {
      return (
        <div className="projectTop">
          <strong>{pro.Name}</strong>
          <br />
          <div className="prospace">&nbsp; &nbsp; &nbsp; {pro.Description}</div>
        </div>
      );
    });
    return (
      <>
        <div>
          <h3 className="projectTopmargin">
            <AiOutlineFundProjectionScreen />
            Project
          </h3>
          {project}
        </div>
      </>
    );
  }
}
export default Project;
