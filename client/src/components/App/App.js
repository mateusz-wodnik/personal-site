import React, { Component } from 'react';
import styles from './App.sass';
import { hot } from "react-hot-loader";
import {StoreConsumer} from '../../Store';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Sidebar />
        <Switch>
          <Route exact path={"/"} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <App {...props} context={context} ref={ref} />}
	</StoreConsumer>
)));
