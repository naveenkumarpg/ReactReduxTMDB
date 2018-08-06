import React, {Component} from 'react';

export default class DetailCard extends Component{

  imagepath(){
    let imagePath = '';
    if (!this.props.data.poster_path){
      imagePath = '../public/images/dummy.jpg';
    } else {
      imagePath = `https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`;
    }
    
    return imagePath;
  }

  productionData(){

    if (this.props.data.production_companies){
      let HTML = this.props.data.production_companies.map((item, i) => {
        return ( <div className="col-xs-4" key={i}>
          <h6>{item.name}</h6>
          <span className="prod-image">
            <img width="200" src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`} />  
          </span>
        </div>
        );
      });
      
      return HTML;
    } else {
      return '';
    }
  }

  render(){
    return (
      <div className="moviecard row">
        <div className="module-head">
          {this.props.data.title}
        </div>
        <div className="col-xs-12 col-sm-4">
          <img className="poster" src={this.imagepath()}/>
        </div>
        
        <div className="col-xs-12 col-sm-8">
          <h4>Tag Line</h4>
          <p>{this.props.data.tagline}</p>
          <h4>Overview</h4>
          <p>{this.props.data.overview}</p>
          
          <h4>Average Rating</h4>
          <p>{this.props.data.vote_average}</p>
        </div>
      </div>
    );
  }
}