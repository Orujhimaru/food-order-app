import { useEffect, useState, useRef } from "react";
import ApexCharts from "apexcharts";
import "./circular.scss";
import Chart from "react-apexcharts";

export default function CircularReport({ delivery, toGo, dineIn }) {
  // let [total, setTotal] = useState(dineIn + delivery + toGo);
  // state is not necessary here ?
  let total = dineIn + delivery + toGo;

  let series1 = [(delivery * 100) / total];
  let series2 = [(toGo * 100) / total];
  let series3 = [(dineIn * 100) / total];

  let options1 = {
    plotOptions: {
      radialBar: {
        track: {
          background: "#353440",
        },
        hollow: {
          margin: 15,
          size: "70%",
          // background: "#1F1D2B",
        },

        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },

          value: {
            show: false,
          },
        },
      },
    },

    fill: {
      colors: "#65B0F6",
    },

    stroke: {
      lineCap: "butt",
      // HOW DO I SET IT TO ROUND AT THE END AND BUTT AT THE START ????
    },
  };

  let options2 = {
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },
        track: {
          background: "#2A2836",
        },

        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },

          value: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: "#FFB572",
    },
    stroke: {
      lineCap: "butt",
    },
  };

  let options3 = {
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },
        track: {
          background: "#353440",
        },

        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },

          value: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: "#FF6996",
    },
    stroke: {
      lineCap: "butt",
    },
  };

  return (
    <div className="donut">
      <div className="inner-4"></div>
      <div className="inner-1">
        <Chart
          options={options1}
          series={series1}
          type="radialBar"
          width="356"
          // width="680"
        />
      </div>
      <div className="inner-2">
        <Chart
          options={options2}
          series={series2}
          type="radialBar"
          width="318"
          // width="522"
        />
      </div>
      <div className="inner-3">
        <Chart
          options={options3}
          series={series3}
          type="radialBar"
          width="285"
          // width="410"
        />
      </div>
    </div>
  );
}
