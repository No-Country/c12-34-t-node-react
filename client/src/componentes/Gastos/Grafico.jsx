import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = ['E', 'F', 'M', 'A', 'M', 'J', 'J', "A", "S"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Ingresos',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
        },
        {
          label: 'Egresos',
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: '#26F8CF',
          backgroundColor: 'rgba(0, 0, 255, 0.5)',
        }
      ]
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
      actions: [
        {
          name: 'Randomize',
          handler(chart) {
            chart.data.datasets.forEach(dataset => {
              dataset.data = dataset.data.map(() => Math.random() * 100);
            });
            chart.update();
          }
        },
        // Resto de acciones...
      ]
    };

    const chartInstance = new Chart(chartRef.current, config);

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;