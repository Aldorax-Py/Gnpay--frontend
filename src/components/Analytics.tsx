import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "@/app/chart.css";

interface AnalyticsChartProps {
  data: number[];
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  useEffect(() => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: data,
            borderColor: "#2A63E2", // Color code for the graph line
            backgroundColor: "rgba(42, 99, 226, 0.2)", // Background color with opacity
            borderWidth: 3, // Set the width of the graph line
            fill: true, // Fill area under the line
            tension: 0.4, // Adjust the line curvature (0 to 1)
          },
        ],
      },
      options: {
        responsive: true, // Enable chart responsiveness
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: false,
              text: "Months",
            },
          },
          y: {
            title: {
              display: false,
              text: "Value",
            },
            beginAtZero: true,
            max: 50000,
            ticks: {
              stepSize: 10000,
              callback: (value: string | number) => {
                return `${Number(value) / 1000}k`;
              },
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return <canvas id="myChart" width="400" height="200" className="mychart" />;
};

export default AnalyticsChart;
