import React, { Component } from "react";

import "tui-chart/dist/tui-chart.css";
import {  LineChart } from "@toast-ui/react-chart";

class LineChartToast extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = {
      categories: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
      series: [
        {
          name: "Budget",
          data: [5000, 3000, 5000, 7000, 6000, 4000]
        },
        {
          name: "Income",
          data: [8000, 1000, 7000, 2000, 5000, 3000]
        }
      ]
    };

    const options = {
      chart: {
        width: 750,
        height: 450,
        format: "1,000"
      },
      yAxis: {
        title: "Month"
      },
      xAxis: {
        title: "Amount",
        min: 0,
        max: 9000,
        suffix: "$"
      },
      series: {
        showLabel: true
      }
    };

    return (
      <React.Fragment>
        <LineChart data={data} options={options} />
      </React.Fragment>
    );
  }
}

export default LineChartToast;
