import React from "react";
import "./Survey.css";
import SurveyStepper from "./SurveyStepper";
const Survey = () => {
  return (
    <div style={{background:"#F5F5F5"}}>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 >Survey</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------Main Content------------------------- */}
      <div className="survey_box">
       <div className="survey-card">
      <div className="servey-header">
        <SurveyStepper/>
      </div>
       </div>
      </div>
    </div>
  );
};

export default Survey;
