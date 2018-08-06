import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Header extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      opened: false,
      redirect: false,
      inputValue : ''
    }
  }

  handlechange = (e) => {

    let value = e.target.value;
    this.setState({
      inputValue: value
    });


  }

  togglesearch = () => {
    this.setState({
      opened : !this.state.opened
    });
  }

  formSubmited = (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({
      redirect: true
    });

  }

  classnames(){
    if(this.state.opened){
      return "sb-search sb-search-open";
    }else{
      return "sb-search";
    }
  }

  render(){
     if (this.state.redirect) {
       return <Redirect to={`/search/${this.state.inputValue}`}/>;
     }

    return(
      <div className="header">
      <Link className="logo" to="/">Movies Now</Link>
       <div id="sb-search" className={this.classnames()}>
         <form onSubmit={this.formSubmited}>
           <input className="sb-search-input" autoComplete="off" placeholder="Enter your search term..." type="search" name="search" id="search" value={this.state.inputValue} onChange={this.handlechange}
            />
           <input className="sb-search-submit" type="submit" value="" />
           <span className="sb-icon-search" onClick={this.togglesearch}></span>
         </form>
       </div>
     </div>
    )
  }
}