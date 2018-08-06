import React, {Component, Fragment} from 'react';
import CONST from '../const';

import Card from './card';


export default class Discover extends Component{
  constructor(){
    super();
    this.state ={
      movies: []
    };
  }

  componentDidMount(){
    let getDiscover = new Promise((resolve, reject) =>{
      fetch(CONST.discover_url).then((data) =>{
        return data.json();
      }).then((data) =>{
        resolve(data);
      });
    });

    getDiscover.then((data) =>{
      this.setState({
        movies: data.results
      });
    });    
  }

  rendercards(){
    let HTML  = this.state.movies.map((item, i) =>{
      return <Card key={i} data={item} />;
    });
    
    return HTML;
  }
  render(){
    

    return (
      <Fragment>
        <h4 className="module-head" >Discover</h4>
        <div className="row card-wrap">
          {this.rendercards()}
        </div>
      </Fragment>
      

    );
  }
}