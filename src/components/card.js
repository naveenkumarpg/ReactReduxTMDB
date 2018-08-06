import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Card extends Component{
  imagepath(){
    let imagePath = '';

    if (!this.props.data.poster_path){
      imagePath = '../public/images/dummy.jpg';
    } else {
      imagePath = `https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`;
    }
    
    return imagePath;
  }
  render(){
    return (
      <div className="col-xs-6 col-sm-4 col-md-2">
        <Link className="movieitem" to={`/details/${this.props.data.id}`}>
          <div className="poster_wrap">
            <span className="vote">{this.props.data.vote_average}</span>
            <img className="poster" src={this.imagepath()} />
            <p className="title">{this.props.data.title}</p>
          </div>
        </Link>
      </div>
    );
  }
}

// <Link className="movieitem" to="${'/index.html?movie='+data.id}"> 