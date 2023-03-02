import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import 'svg2pdf.js';

const exportMultipleChartsToPdf = async () => {
  const doc = new jsPDF("p", "px");

  const elements = document.getElementsByClassName("custom-chart");



//   await creatPdf({ doc, elements });
  creatPdf({ doc, elements });
// 

//   doc.save(`charts.pdf`);
}

const creatPdf = async ({
  doc,
  elements,
}) => {
  const padding = 10;
  const marginTop = 20;
  let top = marginTop;

  for (let i = 0; i < elements.length; i++) {
    const el = elements.item(i);
    const svgData = await htmlToImage.toSvg(el);

    let elHeight = el.offsetHeight;
    let elWidth = el.offsetWidth;

    const pageWidth = doc.internal.pageSize.getWidth();

    if (elWidth > pageWidth) {
      const ratio = pageWidth / elWidth;
      elHeight = elHeight * ratio - padding * 2;
      elWidth = elWidth * ratio - padding * 2;
    }

    const pageHeight = doc.internal.pageSize.getHeight();

    if (top + elHeight > pageHeight) {
      doc.addPage();
      top = marginTop;
    }

    const x = 15;
    // console.log('svgdata', svgData);
    doc.svg2pdf(svgData, {
    x,
    top,
    elWidth,
    elHeight
  })
  .then(() => {
    // save the created pdf
    console.log('saving ...')
    doc.save('myPDF.pdf')
  })
  .catch((error)=> console.log(error))
  .finally(()=>{
    console.log('in the final stages')
  })
    // doc.svg2pdf(svgData, "PNG", padding, top, elWidth, elHeight, `image${i}`);
    top += elHeight + marginTop;
  }
}

export default exportMultipleChartsToPdf;