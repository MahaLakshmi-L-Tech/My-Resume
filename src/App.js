import React from "react";
import "./App.scss";
import Emaildetail from "./Emaildetail";
import data from "./myData.json";
import Resume from "./Resume";
import Technical from "./Technical";
import Education from "./Education";
import Project from "./Project";
import Certification from "./Certification";
import PersonalDetails from "./Personal_Details";
import Strengths from "./Strengths";

function App() {
  return (
    <>
      <div className="resumeContainer">
        <div className="pageSize">
          <div>
            <Resume
              photo={data.photo}
              myname={data.Name}
              Aim={data.Aim}
              Ojective={data.Ojective}
            />
          </div>
          <div className="EmailDetail">
            <Emaildetail
              Email={data.Email}
              linkin={data.linkin}
              phoneno={data.phoneno}
              gitUb={data.gitUb}
              website={data.website}
            />
          </div>
          <div>
            <Technical Technical_Skills={data.Technical_Skills} />
          </div>
          <div>
            <Education Education={data.Education} />
          </div>
          <div>
            <Certification Certifications={data.Certifications} />
          </div>
          <div>
            <Project Project_Details={data.Project_Details} />
          </div>
          <div>
            <Strengths Strengths={data.Strengths} />
          </div>
          <div>
            <PersonalDetails Personal_Details={data.Personal_Details} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
