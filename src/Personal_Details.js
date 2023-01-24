import React, { PureComponent } from "react";
import { BsPersonSquare } from "react-icons/bs";

class PersonalDetails extends PureComponent {
  render() {
    const { Personal_Details } = this.props;

    return (
      <>
        <div className="pertop">
          <h3>
            <BsPersonSquare />
            Personal_Details
          </h3>
          <h6>
            <b>Date of Birth: </b>
            {Personal_Details.Date_of_Birth}
          </h6>
          <h6>
            <b>Languages: </b>
            {Personal_Details.Languages}
          </h6>
          <h6>
            <b>Hobbies: </b>
            {Personal_Details.Hobbies}
          </h6>
        </div>
      </>
    );
  }
}
export default PersonalDetails;
