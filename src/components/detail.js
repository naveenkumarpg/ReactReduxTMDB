import React, {Component, Fragment} from 'react';

import Header from './header';
import Detailcard from './detailcard';


export default class Landing extends Component{
  constructor(props){
    super(props);
    this.state = {
      movie: ''
    };
  }

  componentDidMount(){
    let movieUrl = `https://api.themoviedb.org/3/movie/${this.props.match.params.string}?api_key=66fa95d87d40faf5c50324a339937e6c&language=en-US`;
    // let movieUrl = '/public/data/detail.json';

    let getDetails = new Promise((resolve, reject) =>{
      fetch(movieUrl).then((data) => {
        return data.json();
      }).then((data) =>{
        resolve(data);
      });
    });

    getDetails.then((data) => {
      this.setState({
        movie: data
      });
    });
  }

  torenderComponent(){
    if (this.state.movie){
      return <Detailcard data={this.state.movie} />;
      
    } else {
      return '';
    }
  }

  render(){
    return (
      <Fragment>
        <Header />
        {this.torenderComponent()}
      </Fragment>
      
    );
  }
}