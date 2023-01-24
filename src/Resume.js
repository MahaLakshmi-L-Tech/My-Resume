import React, { PureComponent } from "react";
import Photo from "./images/photo.png";

class Resume extends PureComponent {
  render() {
    const { myname, Aim, Ojective } = this.props;

    return (
      <div className="photoDetail">
        <div className="resume">
          <div className="photoEdit">
            <img src={Photo} className="photoEditimg" alt=" not found"></img>
          </div>
          <div className="myDetail">
            <h1> {myname}</h1>
            <text className="textAim"> {Aim}</text>

            <br />
            <text>{Ojective}</text>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
