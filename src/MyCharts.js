import React, { useRef } from 'react';
import { Document, Page, View, Image, PDFDownloadLink } from '@react-pdf/renderer';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import  {linuxVersionsData, topAttractionsData, bestCarsData} from './MyChartsData'

const MyCharts = () => {
  const chartOptions1 = bestCarsData.options;
  const chartData1 = bestCarsData.series;
  const chart1 = new ApexCharts(document.createElement('div'), { chartOptions: chartOptions1, series: chartData1 });
  chart1.render();
  const chartImage1 = chart1.toDataURL();

  const chartOptions2 = topAttractionsData.options;
  const chartData2 = topAttractionsData.series;
  const chart2 = new ApexCharts(document.createElement('div'), { chartOptions: chartOptions2, series: chartData2 });
  chart2.render();
  const chartImage2 = chart2.toDataURL();

  const chartOptions3 = linuxVersionsData.options;
  const chartData3 = linuxVersionsData.series;
  const chart3 = new ApexCharts(document.createElement('div'), { chartOptions: chartOptions3, series: chartData3 });
  chart3.render();
  const chartImage3 = chart3.toDataURL();

  // create a ref to access the PDFDownloadLink component
  const pdfRef = useRef();

  // function to handle the download of the PDF file
  const handleDownload = () => {
    pdfRef.current.updateContainer();
    pdfRef.current.children[0].download();
  };

  return (
    <>
      <PDFDownloadLink document={
        <Document>
          <Page>
            <View style={{ width: 500, height: 300 }}>
              <Image src={chartImage1} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{ width: 400, height: 400 }}>
              <Image src={chartImage2} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{ width: 300, height: 500 }}>
              <Image src={chartImage3} style={{ width: '100%', height: '100%' }} />
            </View>
          </Page>
        </Document>
      } fileName="myCharts.pdf" ref={pdfRef}>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
      <button onClick={handleDownload}>Download</button>
    </>
  );
};

export default MyCharts;