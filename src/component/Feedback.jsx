import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Feedback = () => {
    const [active, setActive] = useState(false)
    const [okay, setOkay] = useState(false)
    const [good, setGood] = useState(false)
    const toggleButton = () => {
       
        setActive(active => !active);
       
      };
  return (
    <>
      <div className="info-box">
        <div className="d-flex">
          <p>01. </p>
          <div>
            <p>{"  "} How was your day?</p>
            <div className="d-flex gap-2">
              <button onClick={()=>toggleButton()} className= {`inactive_button ${active  ? "active_btn" : ""}`}>Bad</button>
              <button  onClick={()=>toggleButton()} className= {`inactive_button ${active  ? "active_btn" : ""}`}>Okay</button>
              <button  onClick={toggleButton} className= {`inactive_button ${active ? "active_btn" : ""}`}>Good</button>
            </div>
          </div>
        </div>

        <div className="d-flex form_info">
          <p>02. </p>
          <div>
            <p>{"  "} Do you feel you’re making difference?</p>
            <div className="d-flex gap-4 radio_button">
              <label>
                <button type="button">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Yes"
                    />
                  </FormGroup>
                </button>
              </label>
              <label>
                <button type="button">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="No"
                    />
                  </FormGroup>
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
