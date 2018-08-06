import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Landing from './components/landing';
import Detail from './components/detail';
import Search from './components/search';



export default class App extends Component{
  render(){
    return(
      <Fragment>
       <Switch>
          <Route exact path='/index.html' exact component={Landing}/>
          <Route exact path='/' exact component={Landing}/>
          <Route path='/details/:string' component={Detail}/>
          <Route exact={true} path={'/search/:string?'}  component={Search}/>
      </Switch>
      </Fragment>
    )
  }

}

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('movieapp'))