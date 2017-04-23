import React from 'react';
import ReactDOM from 'react-dom';
import TimeSheet from './time_sheet';
import './time_sheet.css';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<TimeSheet />, document.getElementById('content'))
});