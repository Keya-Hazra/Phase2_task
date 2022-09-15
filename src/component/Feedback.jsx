import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Feedback = () => {
  const [active, setActive] = useState("btn");
  const [check, setCheck] = useState("check");

  const toggleButton = (btn) => {
    setActive((active) => btn);
  };
  const toggleCheck = (value) => {
    setCheck((check) => value);
  };
  return (
    <>
      <div className="info-box">
        <div>
          <div className="feed1 feed1-text">
            <p style={{ marginRight: "9px" }}>01.</p>
            <p>How was your day?</p>
          </div>
          <div>
            <div className="d-flex gap-2">
              <button
                onClick={() => toggleButton("btn1")}
                className={`inactive_button ${
                  active === "btn1" ? "active_btn" : ""
                }`}
              >
                Bad
              </button>
              <button
                value={1}
                onClick={() => toggleButton("btn2")}
                className={`inactive_button ${
                  active === "btn2" ? "active_btn" : ""
                }`}
              >
                Okay
              </button>
              <button
                value={3}
                onClick={() => toggleButton("btn3")}
                className={`inactive_button ${
                  active === "btn3" ? "active_btn" : ""
                }`}
              >
                Good
              </button>
            </div>
          </div>
        </div>

        <div className="form_info">
          <div className="feed1 feed1-text">
            <p style={{ marginRight: "9px" }}>02.</p>
            <p>{"  "} Do you feel you’re making difference?</p>
          </div>

          <div>
            <div className="d-flex gap-4 ">
              <label>
                <button   onClick={() => toggleCheck("check1")} className={`radio_button ${
                  check === "check1" ? "active_btn" : ""
                }`}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Yes" />
                  </FormGroup>
                </button>
              </label>
              <label>
                <button type="button"  onClick={() => toggleCheck("check2")} className={`radio_button ${
                  check === "check2" ? "active_btn" : ""
                }`}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="No"  />
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
