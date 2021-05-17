import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Pagesregister from "./Register";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(props, step) {
  switch (step) {
    case 0:
      return <Pagesregister />;
    case 1:
      return "Step 2: What is an ad group anyways?";
    case 2:
      return "Step 3: This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

function RegisterHooks() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// class RegisterHooks extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { username: "" }
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(event, values) {
//         this.props.forgetUser(values.username, this.props.history);
//     }

//     render() {

//         return (
//             <React.Fragment>
//                 <div className="account-pages my-5 pt-sm-5">
//                     <Container>
//                         <Row className="justify-content-center">
//                             <Col md="8" lg="6" xl="5">
//                                 <Card className="overflow-hidden">
//                                     <CardBody className="pt-0">
//                                         <h3 className="text-center mt-4">
//                                         <Link to="/" className="logo logo-admin"><img src={logodark} height="30" alt="logo"/></Link>
//                                         </h3>
//                                         <div className="p-3">
//                                             <h4 className="text-muted font-size-18 mb-3 text-center">Reset Password</h4>
//                                             {this.props.message !== null ?
//                                                 <Alert color="success">Password Reset successfull</Alert>
//                                             :
//                                                 <Alert color="info">Enter your Email and instructions will be sent to you!</Alert>
//                                             }

//                                             {this.props.loginError && <Alert color="danger">
//                                                 {this.props.loginError}</Alert>}

//                                             <AvForm className="form-horizontal mt-4" onValidSubmit={this.handleSubmit}>

//                                                 <div className="form-group">
//                                                     <label for="useremail">Email</label>
//                                                     <AvField name="username" type="email" id="useremail" value={this.state.username} placeholder="Enter Email" validate={{email: true, required: true}} />
//                                                 </div>

//                                                 <div className="form-group row">
//                                                     <div className="col-12 text-right">
//                                                     {this.props.loading ? <Button color="primary" classNameName="w-md waves-effect waves-light">Loading ...</Button> :
//                                                         <Button color="primary" classNameName="w-md waves-effect waves-light" type="submit">Reset Password</Button> }
//                                                     </div>
//                                                 </div>
//                                             </AvForm>
//                                         </div>
//                                     </CardBody>
//                                 </Card>
//                                 <div className="mt-5 text-center">
//                                     <p>Remember It ? <Link to="/login" className="text-primary"> Sign In Here </Link> </p>
//                                     <p>© 2018 - 2020 Lexa. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

const mapStatetoProps = (state) => {
  const { message, loginError, loading } = state.Forget;
  return { message, loginError, loading };
};

export default withRouter(
  connect(mapStatetoProps, { RegisterHooks })(RegisterHooks)
);
