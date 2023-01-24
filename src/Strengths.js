import React, { PureComponent } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

class Strengths extends PureComponent {
  render() {
    const { Strengths } = this.props;
    const str = Strengths.map((strs) => (
      <div>
        <li>{strs}</li>
      </div>
    ));

    return (
      <>
        <div className="strul">
          <h3 className="iconstr">
            <BsFillHandThumbsUpFill />
            Strengths
          </h3>

          <ul>{str}</ul>
        </div>
      </>
    );
  }
}
export default Strengths;
