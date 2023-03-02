import React from 'react'
import ReactApexChart from 'react-apexcharts';
import  {linuxVersionsData, topAttractionsData, bestCarsData} from './MyChartsData'

const DisplayCharts = () =>{


return(<>
<ReactApexChart options={linuxVersionsData.options} series={linuxVersionsData.series} />;
</>);
}

export default DisplayCharts