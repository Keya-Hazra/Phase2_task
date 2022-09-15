import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Form } from "react-bootstrap";

const Feedback = () => {
  const [active, setActive] = useState("btn");
  const [check, setCheck] = useState("");

  const toggleButton = (btn) => {
    setActive((active) => btn);
  };
  const toggleCheck = (value) => {
    setCheck(value);
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
              {/* <label onClick={() => toggleCheck("check1")}>
                {check === "check1" ? (
                  <button className="active_btn">
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked />}
                        label="Yes"
                      />
                    </FormGroup>
                  </button>
                ) : (
                  <button className="radio_button">
                    <FormGroup>
                      <FormControlLabel control={<Checkbox disabled/>} label="Yes" />
                    </FormGroup>
                  </button>
                )}
              </label> */}
              {/* <label onClick={() => toggleCheck("check2")}>
                {check === "check2" ? (
                  <button className="active_btn">
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked="checked" />}
                        label="No"
                      />
                    </FormGroup>
                  </button>
                ) : (
                  <button className="radio_button">
                    <FormGroup>
                      <FormControlLabel control={<Checkbox disabled/>} label="No" />
                    </FormGroup>
                  </button>
                )}
              </label>
              <label>
                <button
                  type="button"
                  onClick={() => toggleCheck("check2")}
                  className={`radio_button ${
                    check === "check2" ? "active_btn" : ""
                  }`}
                >
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="No" />
                  </FormGroup>
                </button>
              </label>

              <div className="check_box ">
                <Form.Group
                  className={`radio_button ${
                    check === "check2" ? "active_btn" : ""
                  }`}
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="yes" />
                </Form.Group>
              </div> */}
              {/* ==============================check============================== */}
              <div onClick={() => toggleCheck("check1")}>
                {check === "check1" ? (
                  <div className="check_box ">
                    <Form.Group
                      className="active_btn2"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="yes" checked />
                    </Form.Group>
                  </div>
                ) : (
                  <div className="check_box ">
                    <Form.Group
                      className="radio_button"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="yes" />
                    </Form.Group>
                  </div>
                )}
              </div>

              <div onClick={() => toggleCheck("check2")}>
                {check === "check2" ? (
                  <div className="check_box ">
                    <Form.Group
                      className="active_btn2"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="No" checked />
                    </Form.Group>
                  </div>
                ) : (
                  <div className="check_box ">
                    <Form.Group
                      className="radio_button"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="No" />
                    </Form.Group>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
