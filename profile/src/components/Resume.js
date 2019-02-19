import React, { Component } from 'react';
import {
  Icon, Row, Col
} from 'antd';

import  { Document, Page} from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component {

  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }


  render(){
    const { pageNumber, numPages } = this.state;
    return (

      <div className="pdf-resume" style={{background:"#F5F5F5", paddingLeft:"50px", paddingTop:"10px"}}>
        <h1>Resume:</h1>
        <Document className="pdf-resume"
            file="SixtosMateo.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page className="pdf-resume" pageNumber={pageNumber} />

        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>


  )

  }
}

export default Resume;
