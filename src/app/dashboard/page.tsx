'use client'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

function dashboard () {
  const series: ApexOptions['series'] = [{
    name: 'Medida 1',
    data: [26, 21, 20, 6, 8, 15, 10, 45, 52, 38, 24, 33]
  },
  {
    name: 'Medida 2',
    data: [18, 29, 37, 36, 51, 32, 35, 35, 41, 62, 42, 13]
  },
  {
    name: 'Medida 3',
    data: [62, 47, 82, 56, 45, 47, 87, 57, 74, 99, 75, 38]
  },
  {
    name: 'Medida 4',
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: 'Medida 5',
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Medida 6',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }]

  const options: ApexOptions = {
    chart: {
      height: 450,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: 'Evolución fisica',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        '10 Jan', '11 Jan', '12 Jan'
      ]
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + ' (mins)'
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + ' per session'
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1'
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto'>
          <ReactApexChart options={options} series={series} type='line' height={350} />
        </div>
      </section>
    </div>
  )
}

export default dashboard
