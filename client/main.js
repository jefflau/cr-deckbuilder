import React from 'react';
import { render } from 'react-dom';
import router from '../imports/router';


Meteor.startup(() => {
  render(router, document.getElementById('root'));
})
