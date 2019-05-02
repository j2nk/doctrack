import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import Modal from 'react-modal';
import axios from 'axios';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import QRCode from "qrcode-react";
import logo from '../../../assets/img/brand/Lambang-Telkomsel.png';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

class DocumentTracking extends Component {
  state = {
    doctrack: [],
    modalIsOpen: false,
    qrcode: ""
  }

  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addData = () => {
    let path = `add-document-type`;
    this.props.history.push(path);
  }

  qrCode(qcode) {
    // console.log(qcode);
    // this.setState({ qcode });
    this.setState({modalIsOpen: true});
  }

  openModal(qrcode) {
    // console.log('this is:', qrcode);
    this.setState({qrcode: qrcode});
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount(){
    axios.get(`http://localhost:1244/yii2-rest/backend/web/1/tdoctrack`)
    .then(res => {
      const doctrack = res.data.data;
      this.setState({ doctrack });
    })

  }

  render() {
    
    return (

      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Document Tracking 
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="primary" className="btn-pill" >Add Data</Button>
              </Col>
            </Row>
          </div>

      {/* <button onClick={this.openModal}>Open Modal</button> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <QRCode className='qrcode' value={this.state.qrcode}
          size={300}
          fgColor='black'
          bgColor='white'
          logo={logo}/>
          <p>
            <h2 ref={subtitle => this.subtitle = subtitle}>{this.state.qrcode}</h2>
          </p>
          <button onClick={this.closeModal}>close</button>
        </Modal>

        <ReactTable
          data={this.state.doctrack}
          columns={[
            {
              Header: "Transaction Name",
              id: "dtr_name",
              accessor: d => d.DTR_NAME
            },
            {
              Header: "Document Type Name",
              id: "dt_name",
              accessor: d => d.DT_NAME
            },
            {
              Header: "Status",
              id: "status",
              accessor: d => d.DTR_STATUS == 1 ? "Active" : "Not Active"  
            },
            {
              Header: "Action",
              id: "action",
              accessor: d => <div>
                <i className="fa fa-play-circle fa-lg mt-2"></i> &nbsp;&nbsp;
                <i className="fa fa-trash fa-lg mt-2"></i> &nbsp;&nbsp;
                <i className="fa fa-qrcode fa-lg mt-2" onClick={() => this.openModal(d.DTR_QRCODE)} id={d.DTR_QRCODE}></i>
                </div>
                
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
          filterable
        />  

        </div>
      </div>
    );
  }
}

export default DocumentTracking;
