// Get to work at a certain time, input number of hours you want to work, given a 45 minute lunch.
// take a lunch after 5 hours mandatory, what is the latest time you can take lunch from start time

import React from 'react';
import { 
  Panel, 
  Well, 
  Row,  
  Col, 
  Form, 
  FormGroup, 
  FormControl, 
  ControlLabel, 
  InputGroup,
} from 'react-bootstrap';
import moment from 'moment';
import { inputFormat, outputFormat, hoursWithoutBreak, } from './constants';

class TimeSheet extends React.Component {
  constructor() {
    super();
    this.state = {
      startTime: '',
      hoursToWork: '',
      lunchLength: 45,
    };
  };

  handleChange(e) {
    e.preventDefault();
    const nextState = { 
      [e.target.name]: e.target.value,
    };
    this.setState(nextState);
  };

  getQuittingTime({ startTime, hoursToWork, lunchLength, }) {
    if (startTime && hoursToWork) {
      return moment(startTime, inputFormat)
        .add(Number(lunchLength), 'minutes')
        .add(Number(hoursToWork), 'hours')
        .format(outputFormat);
    };
  };

  getLunchTime({ startTime, }) {
    if (startTime) return moment(startTime, inputFormat).add(hoursWithoutBreak, 'hours').format(outputFormat);
  };

  render() {
    const { startTime, hoursToWork, lunchLength, } = this.state;
    const title = <h3>Stacey's Time Sheet</h3>;

    return (
      <div>
        <Panel header={title} bsStyle="stacey">
          <Form horizontal>
            <FormGroup>
              <Col xs={4}>
                <ControlLabel>Clock In: </ControlLabel>
              </Col>
              <Col xs={4} xsPush={4}>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="fa fa-clock-o"></i>
                  </InputGroup.Addon>
                  <FormControl
                    type="time"
                    name="startTime"
                    value={startTime}
                    onChange={e => this.handleChange(e)}
                  />
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col xs={4}>
                <ControlLabel>Hours To Work: </ControlLabel>
              </Col>
              <Col xs={4} xsPush={4}>
                <InputGroup>
                  <FormControl
                    type="number"
                    min={0}
                    step={1}
                    name="hoursToWork"
                    value={hoursToWork}
                    onChange={e => this.handleChange(e)}
                  />
                  <InputGroup.Addon>
                    <span>hours</span>
                  </InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col xs={4}>
                <ControlLabel>Lunch Length: </ControlLabel>
              </Col>
              <Col xs={4} xsPush={4}>
                <InputGroup>
                  <FormControl
                    type="number"
                    min={0}
                    step={1}
                    name="lunchLength"
                    value={lunchLength}
                    onChange={e => this.handleChange(e)}
                  />
                  <InputGroup.Addon>
                    <span>minutes</span>
                  </InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>
          </Form>

          <Well className="results">
            <Row>
              <Col xs={4}>
                <p>Clock Out:</p>
              </Col>
              <Col xs={2} xsPush={6}>
                <p>{ this.getQuittingTime(this.state) }</p>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <p>Take Lunch by:</p>
              </Col>
              <Col xs={2} xsPush={6}>
                <p>{ this.getLunchTime(this.state) }</p>
              </Col>
            </Row>
          </Well>
        </Panel>
      </div>
    );
  };

};

export default TimeSheet;