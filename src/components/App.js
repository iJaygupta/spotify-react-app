import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Category from '../containers/CategoryContainer'
import DisplayMsg from './Category/DisplayMsg';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <Switch>

          <Route exact path="/" component={Category} />
          <Route path="*" component={DisplayMsg} />
        </Switch>
      </div>
    );
  }

}

export default App;
