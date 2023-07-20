import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const ChartComponent = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Ingresos',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          pointStyle: 'circle',
        },
        {
          label: 'Egresos',
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: '#26F8CF',
          backgroundColor: 'rgba(0, 0, 255, 0.5)',
          pointStyle: 'circle',
        }
      ]
    }

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },

        },
        scales: {
          y: {
            display: false, // Desactivar la visualización de las etiquetas del eje Y
          },
          x: {
            grid: {
              display: false, // Ocultar las líneas de referencia del eje X
            },
          },
        },
      },
      actions: [
        {
          name: 'Randomize',
          handler(chart) {
            chart.data.datasets.forEach(dataset => {
              dataset.data = dataset.data.map(() => Math.random() * 100)
            })
            chart.update()
          }
        },
        // Resto de acciones...
      ]
    }

    const chartInstance = new Chart(chartRef.current, config)

    return () => {
      chartInstance.destroy()
    }
  }, [])

  return <div className='w-[400px] h-[200px]'><canvas ref={chartRef} className='w-[100vw] mx-auto' /></div>
}

export default ChartComponent