import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DountChart extends Component {
    render() {
        const data = {
            labels: [
                "Desktops",
                "Tablets"
            ],
            datasets: [
                {
                    data: [300, 210],
                    backgroundColor: [
                        "#F2421B",
                        "#ececec"
                    ],
                    hoverBackgroundColor: [
                        "#F2421B",
                        "#ececec"
                    ],
                    hoverBorderColor: "#fff"
                }]
        };

        const option = {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                        var total = meta.total;
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                        return currentValue + ' (' + percentage + '%)';
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            }
        }
        return (
            <React.Fragment>
                <Doughnut width={479} height={260} data={data} options={option} />
            </React.Fragment>
        );
    }
}

export default DountChart;