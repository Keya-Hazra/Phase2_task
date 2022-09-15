import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./assets/Survey.css";
import Feedback from "./Feedback";
import Information from "./Information";
import Confirmation from "./Confirmation";

const useQontoStepIconStyles = makeStyles({
  root: {
    width: "19px",
    height: "36px",
    left: "723px",
    top: "445px",
    fontFamily: "Inter",
    fontStyle: " normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#989898",
    opacity: "0.3",
    // color: "#eaeaf0",
    // display: "flex",
    // height: 22,
    // alignItems: "center",
  },
  active: {
    width: "19px",
    height: "36px",
    left: "723px",
    top: "445px",
    fontFamily: "Inter",
    fontStyle: " normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#000000",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    width: "19px",
    height: "36px",
    left: "723px",
    top: "445px",
    fontFamily: "Inter",
    fontStyle: " normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#000000",
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <div className={classes.completed}>tik</div>
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient(265deg, rgba(30,111,154,1) 0%, rgba(66,134,169,1) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient(0deg, rgba(245,67,67,1) 0%, rgba(38,243,50,1) 100%);",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    width: "19px",
    height: "36px",
    left: "723px",
    top: "445px",
    fontFamily: "Inter",
    fontStyle: " normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#989898",
    opacity: "0.3",
  },
  active: {
    width: "19px",
    height: "36px",
    left: "723px",
    top: "445px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#989898",

    // backgroundImage:
    //   "radial-gradient(circle, rgba(245,67,67,1) 0%, rgba(107,255,255,1) 47%, rgba(38,243,50,1) 100%)",
    // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    width: "19px",
    height: "36px",
    left: "723px",
    top: "445px",
    fontFamily: "Inter",
    fontStyle: " normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#989898",
    // backgroundImage:
    // 	"linear-gradient(-145deg, rgba(30,111,154,1) 0%, rgba(243,149,38,1) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: 1,
    2: 2,
    3: 3,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    // width: "120px",
    // height: "42px",
    // left: " 974px",
    // top: "827px",

    // background: "#246CD9",
    // borderRadius: "10px",
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Your Feedback", "Your Information", "Confirmation"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Feedback />;
    case 1:
      return <Information />;
    case 2:
      return <Confirmation />;
  }
}

export default function SurveyStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        // alternativeLabel
        activeStep={activeStep}
        // connector={<ColorlibConnector />}
        className="stepper-label"
      >
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel StepIconComponent={ColorlibStepIcon} className="">
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div style={{borderTop:"1px solid #E4E8EF"}}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className="stepper-button" style={{ marginBottom: "47px", paddingRight:"50px" }}>
              {activeStep === 1 && (
                <button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="back-btn"
                >
                  <span className="back-text">Back</span>
                </button>
              )}
			    {activeStep === 0 ? <button onClick={handleNext} className="submit-btn">
                <span className="submit-text">
                 Next
                </span>
              </button>  : activeStep === 1 ? <button onClick={handleNext} className="submit-btn">
                <span className="submit-text">
                 Submit
                </span>
              </button> : "" }
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
