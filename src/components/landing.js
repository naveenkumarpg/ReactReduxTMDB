import React, {Component, Fragment} from 'react';

import Header from './header';
import Discover from './discover';


export default class Landing extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <Discover />
      </Fragment>
      
    );
  }
}


{/* <Link to='/detail'>Back</Link> */}