import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import Modal from 'react-modal';
import axios from 'axios';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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

class DocumentTypes extends Component {
  
  state = {
    doctypes: [],
    attrdoctypes: [],
    attrdoctypesdata: []
  }

  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  Show = (rowData) => {
    console.log(rowData);
  }

  addData = () => {
    let path = `add-document-type`;
    this.props.history.push(path);
  }

  editData(id) {
    console.log(id);
    axios.get(`http://localhost:1244/yii2-rest/backend/web/1/doctypes/view/`+id)
      .then(res => {
        const attrdoctypes = res.data.attr;
        const attrdoctypesdata = res.data.data;
        // console.log(attrdoctypes);
        this.setState({ attrdoctypes: attrdoctypes });
        this.setState({ attrdoctypesdata: attrdoctypesdata });
        this.setState({modalIsOpen: true});
      })
      
  }

  deleteData(id){
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.delete(`http://localhost:1244/yii2-rest/backend/web/1/doctypes/delete/`+id)
            .then(res => {
              // const attrdoctypes = res.data;
              // console.log(attrdoctypes);
            })
          }
        },
        {
          label: 'No',
          onClick: () => ""
        }
      ]
    });
  }

  componentDidMount(){
    axios.get(`http://localhost:1244/yii2-rest/backend/web/1/doctypes`)
      .then(res => {
        const doctypes = res.data.data;
        this.setState({ doctypes });
      })
  }

  
  openModal(id) {

    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Master Document Type
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="primary" className="btn-pill" onClick={this.addData}>Add Data</Button>
              </Col>
            </Row>
          </div>
          
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>{this.state.attrdoctypesdata.map(attr => attr.DT_NAME)}</h2>
            <ReactTable
              data={this.state.attrdoctypes}
              columns={[
                {
                  Header: "Atttribute Name",
                  id: "DTA_NAME",
                  accessor: d => d.DTA_NAME
                },
                {
                  Header: "Type",
                  id: "DTA_TYPE",
                  accessor: d => d.DTA_TYPE 
                },
                {
                  Header: "Length",
                  id: "DTA_LENGTH",
                  accessor: d => d.DTA_LENGTH
                },
                {
                  Header: "Mandatory",
                  id: "DTA_MANDATORY",
                  accessor: d => d.DTA_MANDATORY == 1 ? "Yes" : "No"  
                },
                {
                  Header: "Description",
                  id: "DTA_DESC",
                  accessor: d => d.DTA_DESC
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
              showPagination={false}
            />  
            <button onClick={this.closeModal}>close</button>
          </Modal>

        <ReactTable
          data={this.state.doctypes}
          columns={[
            {
              Header: "Document Type Name",
              id: "lastName",
              accessor: d => d.DT_NAME
            },
            {
              Header: "Status",
              id: "status",
              accessor: d => d.DT_STATUS == 1 ? "Active" : "Not Active"  
            },
            {
              Header: "Action",
              id: "action",
              accessor: d => <div>
                <i className="fa fa-play-circle fa-lg mt-2" onClick={() => this.editData(d.DT_ID)}></i> &nbsp;&nbsp;
                <i className="fa fa-trash fa-lg mt-2" onClick={() => this.deleteData(d.DT_ID)}></i>
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

export default DocumentTypes;
