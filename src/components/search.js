import React, {Component, Fragment} from 'react';

import Header from './header';
import Card from './card';


export default class Search extends Component{
  constructor(){
    super();
    this.state ={
      movies: []
    };
  }

  componentDidMount(){
    let searchString = this.props.match.params.string || '';
    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=66fa95d87d40faf5c50324a339937e6c&language=en-US&query=${searchString}&page=1&include_adult=false`;

    let getDiscover = new Promise((resolve, reject) =>{
      fetch(searchUrl).then((data) =>{
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

    if (this.state.movies.length === 0){
      return (<h2 className="center">No Results Found</h2>); 
    }

    let HTML  = this.state.movies.map((item, i) =>{
      return <Card key={i} data={item} />;
    });
    
    return HTML;
  }
  render(){
    

    return (
      <Fragment>
        <Header />
        <div className="module-head">Search Results</div>
        <div className="row card-wrap">
          {this.rendercards()}
        </div>
      </Fragment>
      

    );
  }
}