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

  handleChange(nextState) {
    this.setState(nextState);
  };

  getQuittingTime({ startTime, hoursToWork, lunchLength, }) {
    if (startTime && hoursToWork) {
      return moment(startTime, inputFormat)
        .add(lunchLength, 'minutes')
        .add(hoursToWork, 'hours')
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
        <Panel header={title} className="panel-stacey">
          <Form horizontal>
            <FormGroup>
              <Col sm={4}>
                <ControlLabel>Clock In: </ControlLabel>
              </Col>
              <Col sm={4} smPush={4}>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="fa fa-clock-o"></i>
                  </InputGroup.Addon>
                  <FormControl
                    type="time"
                    name="startTime"
                    value={startTime}
                    onChange={e => {
                        e.preventDefault();
                        this.handleChange({ [e.target.name]: e.target.value });
                      }
                    }
                  />
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={4}>
                <ControlLabel>Hours To Work: </ControlLabel>
              </Col>
              <Col sm={4} smPush={4}>
                <InputGroup>
                  <FormControl
                    type="number"
                    min={0}
                    step={1}
                    name="hoursToWork"
                    value={hoursToWork}
                    onChange={e => {
                        e.preventDefault();
                        this.handleChange({ [e.target.name]: e.target.valueAsNumber });
                      }
                    }
                  />
                  <InputGroup.Addon>
                    <span>hours</span>
                  </InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={4}>
                <ControlLabel>Lunch Length: </ControlLabel>
              </Col>
              <Col sm={4} smPush={4}>
                <InputGroup>
                  <FormControl
                    type="number"
                    min={0}
                    step={1}
                    name="lunchLength"
                    value={lunchLength}
                    onChange={e => {
                        e.preventDefault();
                        this.handleChange({ [e.target.name]: e.target.valueAsNumber });
                      }
                    }
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
              <Col sm={4}>
                <strong>Clock Out:</strong>
              </Col>
              <Col sm={3} smPush={5}>
                <p>{ this.getQuittingTime(this.state) || 'N/A' }</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <strong>Take Lunch by:</strong>
              </Col>
              <Col sm={3} smPush={5}>
                <p>{ this.getLunchTime(this.state) || 'N/A' }</p>
              </Col>
            </Row>
          </Well>
        </Panel>
      </div>
    );
  };

};

export default TimeSheet;