import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class chartapex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ["#ccc", "#7A6FBE", "#28BBE3"],
        chart: {
          zoom: {
            enabled: true,
          },
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        grid: {
          borderColor: "#f8f8fa",
          row: {
            colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: false,
          },
        },
      },

      series: [
        {
          name: "Activated",
          data: [0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Pending",
          data: [0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Deactivated",
          data: [0, 0, 0, 0, 0, 0, 0],
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="290"
        />
      </React.Fragment>
    );
  }
}

export default chartapex;
