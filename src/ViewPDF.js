import React from 'react';
import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';

function MyDocument() {
  return (
    <Document>
      <Page>
        <Text>Hello, world!</Text>
      </Page>
    </Document>
  );
}

function ViewPDF() {
  return (
    <div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}
export default ViewPDF;