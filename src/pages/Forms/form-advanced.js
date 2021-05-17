import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  InputGroup,
  Button,
} from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Color Picker
import { SketchPicker } from "react-color";
import ColorPicker from "@vtaits/react-color-picker";
import "@vtaits/react-color-picker/dist/index.css";

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MultipleDatePicker from "react-multiple-datepicker";

//Import Switch
import Switch from "react-switch";

//Import Multiple Select
import Select from "react-select";

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

class FormAdvanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Lexa", link: "#" },
        { title: "Forms", link: "#" },
        { title: "Form Advanced", link: "#" },
      ],
      color: "#8fff00",
      colorRgb: "#7a6fbe",
      colorCust: "#50a415",
      colorHor: "#88CC33",
      display_RGBA: false,
      colorRGBA: "rgba(0, 194, 255, 0.78)",
      coloraliased: "#7A6FBE",
      aliased_color: false,

      default_date: new Date(),
      default: false,
      start_date: new Date(),
      monthDate: new Date(),
      yearDate: new Date(),
      end_date: new Date(),
      date: new Date(),

      disbadge: true,
      disthresh: false,
      placementbadge: false,
      textcount: 0,
      optioncount: 0,
      placementcount: 0,
      advanceclass: "badgecount",

      switch1: true,
      switch2: true,
      switch3: true,
      switch4: true,
      switch5: true,
      switch6: true,
      switch7: true,
      switch8: true,
      switch9: true,
      switch11: true,
      switch12: true,
      switch13: true,
      switch14: true,
      switch15: true,

      data_attr: 56,
      postfix: 20,
      prefix: 25,
      empty_val: 0,
      not_attr: 15,
      explicit_val: 33,

      selectedGroup: null,
      selectedMulti: null,

      max_len: 25,
    };
    //colorpicker
    this.onDrag = this.onDrag.bind(this);
    this.onDragRgb = this.onDragRgb.bind(this);
    this.onDragCust = this.onDragCust.bind(this);
    this.handleHor = this.handleHor.bind(this);
    this.handleRGBA = this.handleRGBA.bind(this);

    // DatePicker
    this.handleDefault = this.handleDefault.bind(this);
    this.handleAutoClose = this.handleAutoClose.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);

    // Bootsrap Maxlength
    this.threshholdchange = this.threshholdchange.bind(this);
    this.threshholdDefault = this.threshholdDefault.bind(this);
    this.optionchange = this.optionchange.bind(this);
    this.placementchange = this.placementchange.bind(this);
    this.textareachange = this.textareachange.bind(this);

    this.handleSelectGroup = this.handleSelectGroup.bind(this);
    this.handleMulti = this.handleMulti.bind(this);
  }

  componentDidMount() {
    this.props.setBreadcrumbItems("Form Avanced", this.state.breadcrumbItems);
  }

  //Color Picker
  onDrag(c1) {
    this.setState({ color: c1 });
  }
  onDragRgb(c1) {
    this.setState({ colorRgb: c1 });
  }
  onDragaliased(c1) {
    this.setState({ coloraliased: c1 });
  }
  onDragCust(c1) {
    this.setState({ colorCust: c1 });
  }
  handleHor = (color) => {
    this.setState({ colorHor: color.hex });
  };

  handleRGBA = () => {
    this.setState({ display_RGBA: !this.state.display_RGBA });
  };

  onSwatchHover_RGBA = (color) => {
    const format =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")";
    this.setState({ colorRGBA: format });
    //  (color.rgb)
  };
  //DatePicker
  handleDefault(date) {
    this.setState({ default_date: date });
  }
  handleAutoClose(date) {
    this.setState({ auto_close: date });
  }
  handleStart(date) {
    this.setState({ start_date: date });
  }
  handleEnd(date) {
    this.setState({ end_date: date });
  }
  handleMonthChange(date) {
    this.setState({ monthDate: date });
  }
  handleYearChange(date) {
    this.setState({ yearDate: date });
  }

  //Bootstrap Maxlength
  threshholdchange(event) {
    var count = event.target.value.length;
    var remain_val = this.state.max_len - 20;
    if (remain_val <= count) {
      this.setState({ disthresh: true });
    } else {
      this.setState({ disthresh: false });
    }
    this.setState({ threshholdcount: event.target.value.length });
  }

  threshholdDefault(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ disDefault: true });
    } else {
      this.setState({ disDefault: false });
    }
    this.setState({ threshholdDefault: event.target.value.length });
  }

  optionchange(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ disbadge: true });
    } else {
      this.setState({ disbadge: false });
    }
    this.setState({ optioncount: event.target.value.length });
  }

  placementchange(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ placementbadge: true });
    } else {
      this.setState({ placementbadge: false });
    }
    this.setState({ placementcount: event.target.value.length });
  }

  textareachange(event) {
    var count = event.target.value.length;
    if (count > 0) {
      this.setState({ textareabadge: true });
    } else {
      this.setState({ textareabadge: false });
    }
    this.setState({ textcount: event.target.value.length });
  }

  //Select
  handleSelectGroup = (selectedGroup) => {
    this.setState({ selectedGroup });
  };
  handleMulti = (selectedMulti) => {
    this.setState({ selectedMulti });
  };

  render() {
    const { selectedGroup } = this.state;
    const { selectedMulti } = this.state;

    function Offsymbol(text) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 12,
            color: "#fff",
            paddingRight: 2,
          }}
        >
          {" "}
          {text}
        </div>
      );
    }

    function OnSymbol(text) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 12,
            color: "#fff",
            paddingRight: 2,
          }}
        >
          {" "}
          {text}
        </div>
      );
    }
    return (
      <React.Fragment>
        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title">Colorpicker</h4>
                <p className="card-title-desc">
                  Fancy and customizable colorpicker plugin for Twitter
                  Bootstrap.
                </p>

                <form action="#">
                  <FormGroup>
                    <Label>Simple input field</Label>
                    <Input
                      type="text"
                      className="colorpicker-default form-control"
                      value={this.state.color}
                      onClick={() =>
                        this.setState({
                          simple_color: !this.state.simple_color,
                        })
                      }
                      readOnly
                    />
                    {this.state.simple_color ? (
                      <ColorPicker
                        saturationHeight={100}
                        saturationWidth={100}
                        value={this.state.color}
                        onDrag={this.onDrag.bind(this)}
                      />
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Label>With custom options - RGBA</Label>
                    <Input
                      type="text"
                      className="colorpicker-rgba form-control"
                      value={this.state.colorRGBA}
                      onClick={this.handleRGBA}
                      readOnly
                    />
                    {this.state.display_RGBA ? (
                      <SketchPicker
                        color="#fff"
                        value={this.state.colorRGBA}
                        width="160px"
                        onChangeComplete={this.onSwatchHover_RGBA}
                      />
                    ) : null}
                  </FormGroup>
                  <FormGroup className="m-b-0">
                    <Label>As a component</Label>
                    <div
                      className="input-group colorpicker-default"
                      title="Using format option"
                    >
                      <input
                        readOnly
                        value={this.state.colorRgb}
                        type="text"
                        className="form-control input-lg"
                      />
                      <span className="input-group-append">
                        <span
                          className="input-group-text colorpicker-input-addon"
                          onClick={() =>
                            this.setState({
                              simple_color1: !this.state.simple_color1,
                            })
                          }
                        >
                          <i
                            style={{
                              height: "16px",
                              width: "16px",
                              background: this.state.colorRgb,
                            }}
                          ></i>
                        </span>
                      </span>
                    </div>

                    {this.state.simple_color1 ? (
                      <ColorPicker
                        saturationHeight={100}
                        saturationWidth={100}
                        value={this.state.colorRgb}
                        onDrag={this.onDragRgb.bind(this)}
                      />
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <Label>Horizontal mode</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="colorpicker-horizontal"
                      onClick={() =>
                        this.setState({
                          simple_color2: !this.state.simple_color2,
                        })
                      }
                      value={this.state.colorHor}
                      readOnly
                    />
                    {this.state.simple_color2 ? (
                      <SketchPicker
                        color="#fff"
                        value={this.state.simple_color2}
                        width="160px"
                        onChangeComplete={this.handleHor}
                      />
                    ) : null}
                  </FormGroup>

                  <FormGroup>
                    <Label>Aliased color palette</Label>
                    <div
                      id="colorpicker-color-pattern"
                      className="input-group colorpicker-component"
                    >
                      <Input
                        type="text"
                        className="form-control input-lg"
                        value={this.state.coloraliased}
                        readOnly
                      />
                      <span
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            aliased_color: !this.state.aliased_color,
                          })
                        }
                      >
                        <span className="input-group-text colorpicker-input-addon">
                          <i
                            style={{
                              height: "16px",
                              width: "16px",
                              background: this.state.coloraliased,
                            }}
                          ></i>
                        </span>
                      </span>
                    </div>
                    {this.state.aliased_color ? (
                      <ColorPicker
                        saturationHeight={100}
                        saturationWidth={100}
                        value={this.state.coloraliased}
                        onDrag={this.onDragaliased.bind(this)}
                      />
                    ) : null}
                  </FormGroup>

                  <FormGroup className="mb-0">
                    <Label>Customized widget size</Label>
                    <Input
                      type="text"
                      className="colorpicker-large form-control"
                      value={this.state.colorCust}
                      onClick={() =>
                        this.setState({
                          simple_color3: !this.state.simple_color3,
                        })
                      }
                      readOnly
                    />
                    {this.state.simple_color3 ? (
                      <React.Fragment>
                        <ColorPicker
                          saturationHeight={100}
                          saturationWidth={100}
                          value={this.state.colorCust}
                          onDrag={this.onDragCust.bind(this)}
                        />
                        <div
                          style={{
                            backgroundColor: this.state.colorCust,
                            width: "140px",
                            padding: "5px",
                          }}
                        ></div>
                      </React.Fragment>
                    ) : null}
                  </FormGroup>
                </form>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="card-title">Bootstrap MaxLength</h4>
                <p className="card-title-desc">
                  This plugin integrates by default with Twitter bootstrap using
                  badges to display the maximum lenght of the field where the
                  user is inserting text.{" "}
                </p>

                <Label className="text-muted">Default usage</Label>
                <p className="text-muted mb-3">
                  The badge will show up by default when the remaining chars are
                  10 or less:
                </p>
                <Input
                  type="text"
                  maxLength="25"
                  name="defaultconfig"
                  className="form-control"
                  onChange={this.threshholdDefault}
                  id="defaultconfig"
                />
                {this.state.disDefault && this.state.threshholdDefault >= 15 ? (
                  <span
                    className="bg-info p-1 mt-1 text-white"
                    style={{ fontSize: "9px" }}
                  >
                    {this.state.threshholdDefault} / 25{" "}
                  </span>
                ) : null}

                <div className="mt-4">
                  <Label className="text-muted">Threshold value</Label>
                  <p className="text-muted mb-3">
                    Do you want the badge to show up when there are 20 chars or
                    less? Use the
                    <code>threshold</code> option:
                  </p>
                  <Input
                    type="text"
                    maxLength={this.state.max_len}
                    onChange={this.threshholdchange}
                    name="thresholdconfig"
                    className="form-control"
                    id="thresholdconfig"
                  />
                  {this.state.disthresh ? (
                    <span
                      className={
                        this.state.threshholdcount === this.state.max_len
                          ? "bg-warning p-1 mt-1 text-white"
                          : "bg-info p-1 mt-1 text-white"
                      }
                      style={{ fontSize: "9px" }}
                    >
                      {this.state.threshholdcount} / 25{" "}
                    </span>
                  ) : null}
                </div>

                <div className="mt-4">
                  <Label className="text-muted">All the options</Label>
                  <p className="text-muted mb-3">
                    Please note: if the <code>alwaysShow</code> option is
                    enabled, the
                    <code>threshold</code> option is ignored.
                  </p>
                  <Input
                    type="text"
                    maxLength="25"
                    onChange={this.optionchange}
                    name="alloptions"
                    id="alloptions"
                    className="form-control"
                  />
                  {this.state.disbadge ? (
                    <span
                      className="bg-success p-1 mt-1 text-white"
                      style={{ fontSize: "9px" }}
                    >
                      You Types {this.state.optioncount} out of 25 chars
                      available
                    </span>
                  ) : null}
                </div>

                <div className="mt-4">
                  <Label className="text-muted">Position</Label>
                  <p className="text-muted mb-3">
                    All you need to do is specify the <code>placement</code>{" "}
                    option, with one of those strings. If none is specified, the
                    positioning will be defauted to 'bottom'.
                  </p>
                  <Input
                    type="text"
                    maxLength={this.state.max_len}
                    onChange={this.placementchange}
                    name="placement"
                    className="form-control"
                    id="placement"
                  />
                  {this.state.placementbadge ? (
                    <span
                      className={
                        this.state.placementcount === this.state.max_len
                          ? "bg-warning p-1 mt-1 text-white"
                          : "bg-info p-1 mt-1 text-white"
                      }
                      style={{ fontSize: "9px" }}
                    >
                      {this.state.placementcount} / 25{" "}
                    </span>
                  ) : null}
                </div>

                <div className="mt-4">
                  <Label className="text-muted">textareas</Label>
                  <p className="text-muted mb-3">
                    Bootstrap maxlength supports textarea as well as inputs.
                    Even on old IE.
                  </p>
                  <textarea
                    id="textarea"
                    onChange={this.textareachange}
                    className="form-control"
                    maxLength="225"
                    rows="3"
                    placeholder="This textarea has a limit of 225 chars."
                  ></textarea>
                  {this.state.textareabadge ? (
                    <span
                      className={
                        this.state.textcount === 225
                          ? "bg-warning p-1 mt-1 text-white"
                          : "bg-info p-1 mt-1 text-white"
                      }
                      style={{ fontSize: "9px" }}
                    >
                      {" "}
                      {this.state.textcount} / 225{" "}
                    </span>
                  ) : null}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="card-title">React Switch</h4>
                <p className="card-title-desc">
                  Here are a few types of switches.{" "}
                </p>

                <div>
                  <Switch
                    uncheckedIcon={Offsymbol("Off")}
                    checkedIcon={OnSymbol("On")}
                    onColor="#626ed4"
                    onChange={() =>
                      this.setState({ switch1: !this.state.switch1 })
                    }
                    checked={this.state.switch1}
                    className="mr-1 mt-1"
                  />
                  <Switch
                    uncheckedIcon={Offsymbol("No")}
                    checkedIcon={OnSymbol("Yes")}
                    onColor="#a2a2a2"
                    onChange={() =>
                      this.setState({ switch2: !this.state.switch2 })
                    }
                    checked={this.state.switch2}
                    className="mr-1 mt-1"
                  />
                  <Switch
                    uncheckedIcon={Offsymbol("No")}
                    checkedIcon={OnSymbol("Yes")}
                    onColor="#02a499"
                    offColor="#ec4561"
                    onChange={() =>
                      this.setState({ switch3: !this.state.switch3 })
                    }
                    checked={this.state.switch3}
                    className="mr-1 mt-1"
                  />
                  <Switch
                    uncheckedIcon={Offsymbol("No")}
                    checkedIcon={OnSymbol("Yes")}
                    onColor="#626ed4"
                    onChange={() =>
                      this.setState({ switch4: !this.state.switch4 })
                    }
                    checked={this.state.switch4}
                    className="mr-1 mt-1"
                  />
                  <Switch
                    uncheckedIcon={Offsymbol("No")}
                    checkedIcon={OnSymbol("Yes")}
                    onColor="#02a499"
                    onChange={() =>
                      this.setState({ switch5: !this.state.switch5 })
                    }
                    checked={this.state.switch5}
                    className="mr-1 mt-1"
                  />
                  <Switch
                    uncheckedIcon={Offsymbol("No")}
                    checkedIcon={OnSymbol("Yes")}
                    onColor="#38a4f8"
                    onChange={() =>
                      this.setState({ switch6: !this.state.switch6 })
                    }
                    checked={this.state.switch6}
                    className="mr-1 mt-1"
                  />
                  <Switch
                    uncheckedIcon={Offsymbol("No")}
                    checkedIcon={OnSymbol("Yes")}
                    onColor="#f8b425"
                    onChange={() =>
                      this.setState({ switch7: !this.state.switch7 })
                    }
                    checked={this.state.switch7}
                    className="mr-1 mt-1"
                  />
                  <Switch
                    uncheckedIcon={Offsymbol("No")}
                    checkedIcon={OnSymbol("Yes")}
                    onColor="#ec4561"
                    onChange={() =>
                      this.setState({ switch8: !this.state.switch8 })
                    }
                    checked={this.state.switch8}
                    className="mr-1 mt-1"
                  />
                  <Switch
                    uncheckedIcon={Offsymbol("No")}
                    checkedIcon={OnSymbol("Yes")}
                    onColor="#2a3142"
                    onChange={() =>
                      this.setState({ switch9: !this.state.switch9 })
                    }
                    checked={this.state.switch9}
                    className="mr-1 mt-1"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title">Datepicker</h4>
                <p className="card-title-desc">Examples of React Datepicker.</p>

                <form action="#">
                  <FormGroup>
                    <Label>Default Functionality</Label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.default_date}
                        onChange={this.handleDefault}
                      />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label>Multiple Date</Label>
                    <div>
                      <MultipleDatePicker
                        className="form-control"
                        onSubmit={(dates) => ("selected date", dates)}
                      />
                    </div>
                  </FormGroup>

                  <FormGroup className="mb-0">
                    <Label>Date Range</Label>
                    <div>
                      <div
                        className="input-daterange input-group"
                        id="date-range"
                      >
                        <DatePicker
                          selected={this.state.start_date}
                          selectsStart
                          className="form-control"
                          placeholderText="From"
                          startDate={this.state.start_date}
                          endDate={this.state.end_date}
                          onChange={this.handleStart}
                        />
                        <DatePicker
                          selected={this.state.end_date}
                          selectsEnd
                          className="form-control"
                          startDate={this.state.start_date}
                          endDate={this.state.end_date}
                          onChange={this.handleEnd}
                        />
                      </div>
                    </div>
                  </FormGroup>
                </form>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="card-title">React TouchSpin</h4>
                <p className="card-title-desc">
                  A mobile and touch friendly input spinner component for
                  Bootstrap
                </p>

                <form>
                  <FormGroup>
                    <Label className="control-label">
                      Using data attributes
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            data_attr: this.state.data_attr - 1,
                          })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus"></i>
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={this.state.data_attr}
                        placeholder="number"
                        readOnly
                      />
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            data_attr: this.state.data_attr + 1,
                          })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus"></i>
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label className="control-label">
                      Example with postfix (large)
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({ postfix: this.state.postfix - 1 })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus"></i>
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={this.state.postfix}
                        placeholder="number"
                        readOnly
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">%</span>
                        <Button
                          type="button"
                          onClick={() =>
                            this.setState({
                              postfix: this.state.postfix + 1,
                            })
                          }
                          color="primary"
                        >
                          <i className="mdi mdi-plus"></i>
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label className="control-label">With prefix </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({ prefix: this.state.prefix - 1 })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus"></i>
                        </Button>
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={this.state.prefix}
                        placeholder="number"
                        readOnly
                      />
                      <div className="input-group-append">
                        <Button
                          type="button"
                          onClick={() =>
                            this.setState({
                              prefix: this.state.prefix + 1,
                            })
                          }
                          color="primary"
                        >
                          <i className="mdi mdi-plus"></i>
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <Label className="control-label">
                      Init with empty value:
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            empty_val: this.state.empty_val - 1,
                          })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus"></i>
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={this.state.empty_val}
                        placeholder="number"
                        readOnly
                      />
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            empty_val: this.state.empty_val + 1,
                          })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus"></i>
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label className="control-label">
                      Value attribute is not set (applying settings.initval)
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            not_attr: this.state.not_attr - 1,
                          })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus"></i>
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={this.state.not_attr}
                        placeholder="number"
                        readOnly
                      />
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            not_attr: this.state.not_attr + 1,
                          })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus"></i>
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Label className="control-label">
                      Value is set explicitly to 33 (skipping settings.initval){" "}
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            explicit_val: this.state.explicit_val - 1,
                          })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus"></i>
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={this.state.explicit_val}
                        placeholder="number"
                        readOnly
                      />
                      <div
                        className="input-group-append"
                        onClick={() =>
                          this.setState({
                            explicit_val: this.state.explicit_val + 1,
                          })
                        }
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus"></i>
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                </form>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="card-title">Select2</h4>
                <p className="card-title-desc">
                  A mobile and touch friendly input spinner component for
                  Bootstrap
                </p>

                <form>
                  <FormGroup>
                    <Label className="control-label">Single Select</Label>
                    <Select
                      value={selectedGroup}
                      onChange={this.handleSelectGroup}
                      options={optionGroup}
                      className="select2"
                    />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <Label className="control-label">Multiple Select</Label>
                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={this.handleMulti}
                      options={optionGroup}
                      className="select2 select2-multiple"
                    />
                  </FormGroup>
                </form>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h4 className="card-title">Bootstrap FileStyle</h4>
                <p className="card-title-desc">
                  Examples of bootstrap fileStyle.
                </p>

                <form action="#">
                  <FormGroup>
                    <Label>Default file input</Label>
                    <input
                      type="file"
                      className="filestyle"
                      data-buttonname="btn-secondary"
                    />
                  </FormGroup>

                  <FormGroup className="mb-0">
                    <Label>File style without input</Label>
                    <input
                      type="file"
                      className="filestyle"
                      data-input="false"
                      data-buttonname="btn-secondary"
                    />
                  </FormGroup>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(FormAdvanced);
