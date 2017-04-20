// Get to work at a certain time, input number of hours you want to work, given a 45 minute lunch.
// take a lunch after 5 hours mandatory, what is the latest time you can take lunch from start time

import React from 'react';
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

    return (
      <div>
        <form>
          <label> When did you get into the office today?
            <input 
              type="time" 
              name="startTime" 
              value={startTime} 
              tabindex={0} 
              onChange={e => this.handleChange(e)}>
            </input>
          </label>
          <label> How many hours are you working today?
            <input
              type="number" 
              name="hoursToWork" 
              value={hoursToWork} 
              tabindex={1} 
              onChange={e => this.handleChange(e)}>
            </input>
          </label>
          <label> How long is your lunch today?
            <input
              type="number" 
              name="lunchLength" 
              value={lunchLength} 
              tabindex={2} 
              onChange={e => this.handleChange(e)}>
            </input>
          </label>
        </form>

        <article>
          <p>Quitting Time: { this.getQuittingTime(this.state) }</p>
          <p>Latest Lunch Time: { this.getLunchTime(this.state) }</p>
        </article>
      </div>
    );
  };

};

export default TimeSheet;