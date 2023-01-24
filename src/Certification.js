import React, { PureComponent } from "react";
import { GrCertificate } from "react-icons/gr";

class Certification extends PureComponent {
  render() {
    const { Certifications } = this.props;
    const certi = Certifications.map((cert) => (
      <div>
        <li>{cert}</li>
      </div>
    ));

    return (
      <>
        <div className="certtop">
          <h3>
            <GrCertificate />
            Certifications
          </h3>

          <ul>{certi}</ul>
        </div>
      </>
    );
  }
}
export default Certification;
