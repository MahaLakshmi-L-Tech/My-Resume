import React, { PureComponent } from "react";
import { GrMail } from "react-icons/gr";
import { BiMobile } from "react-icons/bi";
import { BsGithub, BsGlobe, BsLinkedin } from "react-icons/bs";

class Emaildetail extends PureComponent {
  render() {
    const { Email, linkin, phoneno, gitUb, website } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="Emaillinkdin">
          <div className="email">
            <GrMail size={"20px"} />
            <a href={Email} className="emailalign" target="_blank">
              Personal-Mail
            </a>
          </div>
          <div className="linkdin">
            <BsLinkedin size={"18px"} />
            <a href={linkin} className="linkdinalign" target="_blank">
              Mahalakshmi L
            </a>
          </div>
          <div className="gitub">
            <BsGithub size={"20px"} />
            <a href={gitUb} className="gitubalign" target="_blank">
              Mahalakshmi-L-Tech
            </a>
          </div>
          <div className="website">
            <BsGlobe size={"20px"} />
            <a href={website} className="websitealign" target="_blank">
              Personal-Site
            </a>
          </div>
          <div className="phoneno">
            <BiMobile size={"20px"} className="phonenoalign" />
            {phoneno}
          </div>
        </div>
      </>
    );
  }
}
export default Emaildetail;
