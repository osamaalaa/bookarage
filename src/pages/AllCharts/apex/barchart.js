import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        colors: ["#7A6FBE", "#28BBE3"],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            dataLabels: {
              show: false,
            },
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          borderColor: "#f8f8fa",
          row: {
            colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        stroke: {
          show: true,
          width: 1.5,
          colors: ["#fff"],
        },
        xaxis: {
          categories: [
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "Series A",
          data: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Series B",
          data: [0, 0, 0, 0, 0, 0, 0, 0],
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
          type="bar"
          height="290"
        />
      </React.Fragment>
    );
  }
}

export default barchart;
