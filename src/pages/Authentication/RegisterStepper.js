import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Typography from "@material-ui/core/Typography"
import React, { Component } from "react"
import { Container, Row, Col, Alert, Button, Card, CardBody } from "reactstrap"
import { connect } from "react-redux"
import { registerUser, clearError, clearErrorLogin } from "../../store/actions"
import congratulation from "../../assets/images/illus.svg"
import codePin from "../../assets/images/Mobile-rafiki.svg"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import ReactCodeInput from "react-code-input"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

function getSteps() {
  return [1, 2, 3, 4]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ""
    case 1:
      return "What is an ad group anyways?"
    case 2:
      return "This is the bit I really care about!"
    default:
      return "Unknown step"
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  const steps = getSteps()

  const isStepOptional = (step) => {
    return step === 1
  }

  const isStepSkipped = (step) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography component={"span"} variant="caption">
                Optional
              </Typography>
            )
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography component={"span"} className={classes.instructions}>
              <Card className="overflow-hidden card-auth my-5">
                <div className="d-flex justify-content-between register-header align-items-center">
                  <h3 className="text-center">
                    <Link to="/login" className="logo-auth logo-admin">
                      <i className="fas fa-arrow-left"></i>
                    </Link>
                  </h3>
                  <h4 className="text-muted font-size-18 mb-1 text-center">
                    Create Account
                  </h4>
                  <div></div>
                </div>
                <CardBody className="pt-0">
                  <div className="p-3">
                    {/* {this.props.user && (
                <Alert color="success">Registration Done Successfully.</Alert>
              )}
              {this.props.registrationError && (
                <Alert color="danger">{this.props.registrationError}</Alert>
              )} */}

                    <AvForm className="form-horizontal mt-4">
                      <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <AvField
                          type="text"
                          className="form-control"
                          name="firstname"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <label htmlFor="lastname">Last Name</label>
                        <AvField
                          type="text"
                          className="form-control"
                          name="lastname"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <label htmlFor="email">Email Address</label>
                        <AvField
                          type="email"
                          className="form-control"
                          name="email"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <label htmlFor="userpassword">Password</label>
                        <AvField
                          type="password"
                          className="form-control"
                          name="userpassword"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <AvField
                          type="password"
                          className="form-control"
                          name="confirmPass"
                        />
                      </div>

                      <div className="form-group mt-3">
                        <label htmlFor="code">Referral Code ( Optional )</label>
                        <AvField
                          type="text"
                          className="form-control"
                          name="code"
                        />
                      </div>
                      <div className="form-group text-center mt-5">
                        <Button
                          color="primary"
                          className="btn-auth btn-primary-auth w-md waves-effect waves-light"
                          type="button"
                          onClick={handleNext}
                        >
                          Continue
                        </Button>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
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
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
