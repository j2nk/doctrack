import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Fade, Form, FormGroup, FormText, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

class addDocumentTypes extends Component {
 
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  addData = () => {
    let path = `document-tracking`;
    this.props.history.push(path);
  }

  addAttributes = () => {

  }

  lorem() {
    return (
      <>
      <FormGroup row>
        <Col md="3">
          <Label htmlFor="text-input">Attribute Name</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="text-input" name="text-input" placeholder="Input Attribute Name" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col md="3">
          <Label htmlFor="select">Attribute Type</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="select" name="select" id="select">
            <option value="0">Please select</option>
            <option value="1">Text</option>
            <option value="2">Number</option>
            <option value="3">Date</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col md="3">
          <Label htmlFor="text-input">Attribute Length</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="number" id="text-input" name="text-input" placeholder="Input Attribute Length" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col md="3">
          <Label>Attribute Mandatory Level</Label>
        </Col>
        <Col md="9">
          <FormGroup check inline>
            <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
            <Label className="form-check-label" check htmlFor="inline-radio1">Yes</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
            <Label className="form-check-label" check htmlFor="inline-radio2">No</Label>
          </FormGroup>
        </Col>
      </FormGroup>

      {/* <FormGroup row>
        <Col md="3">
          <Label>Attribute Note</Label>
        </Col>
        <Col md="9">
          <FormGroup check inline>
            <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
            <Label className="form-check-label" check htmlFor="inline-radio1">Yes</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
            <Label className="form-check-label" check htmlFor="inline-radio2">No</Label>
          </FormGroup>
        </Col>
      </FormGroup> */}

      <FormGroup row>
        <Col md="3">
          <Label htmlFor="textarea-input">Attribute Description</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="textarea" name="textarea-input" id="textarea-input" rows="5"
                  placeholder="Description..." />
        </Col>
      </FormGroup>
      </>
    );
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane(num) {
    return (
      <>
        <TabPane tabId="1">
          {this.lorem()}
        </TabPane>
        <TabPane tabId="2">
          {this.lorem()}
        </TabPane>
        <TabPane tabId="3">
          {this.lorem()}
        </TabPane>
      </>
    );
  }

  render() {
    
    return (
      <div className="animated fadeIn">
        
        <Card>
          <CardHeader>
            <strong>Add</strong> Document Type
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Document Type Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="text-input" name="text-input" placeholder="Input Document Type Name" />
                </Col>
              </FormGroup>
              
              <FormGroup row>
                <Col md="3">
                  <Label>Groups</Label>
                </Col>
                <Col md="9">
                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                    <Label className="form-check-label" check htmlFor="inline-checkbox1">Other User</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                    <Label className="form-check-label" check htmlFor="inline-checkbox2">Procrutment</Label>
                  </FormGroup>
                  {/* <FormGroup check inline>
                    <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                    <Label className="form-check-label" check htmlFor="inline-checkbox3">Other</Label>
                  </FormGroup> */}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="textarea-input">Document Type Description</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="5"
                          placeholder="Description..." />
                </Col>
              </FormGroup>

              {/* <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Document Type</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">PO</option>
                    <option value="2">Contract</option>
                    <option value="3">Other</option>
                  </Input>
                </Col>
              </FormGroup> */}

              <card>
                <CardHeader>
                  
                  <Row className="align-items-center">
                    <Col col="12" xl className="mb-3 mb-xl-0">
                    <strong>Document Type</strong> Attributes 
                    </Col>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    </Col>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    </Col>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button block color="primary" className="btn-pill" onClick={this.addAttributes}>Add Attribute</Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  

                  <Col>
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          active={this.state.activeTab[0] === '1'}
                          onClick={() => { this.toggle(0, '1'); }}
                        >
                          1
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          active={this.state.activeTab[0] === '2'}
                          onClick={() => { this.toggle(0, '2'); }}
                        >
                          2
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          active={this.state.activeTab[0] === '3'}
                          onClick={() => { this.toggle(0, '3'); }}
                        >
                          3
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab[0]}>
                      {this.tabPane(3)}
                    </TabContent>
                  </Col>

                </CardBody>
              </card>

            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
          </CardFooter>
        </Card>
        
      </div>
    );
  }
}

export default addDocumentTypes;
