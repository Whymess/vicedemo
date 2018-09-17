import React from 'react';
import { render } from "react-dom";
import {
	Application
} from './Components/'
import './index.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


render(
 <Router>
 	<Switch>
   		<Route path="/" component={Application}/>
    </Switch>
  </Router>,

  document.getElementById("root")
);