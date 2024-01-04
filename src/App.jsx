import React, { Component } from 'react';
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "John Smith",
        bio: "currently working",
        imageSrc: "/bohemian-man-with-his-arms-crossed.jpg",
        profession: "web developer",
      },
      show:true,
      isShown:"fa-eye",
      isHidden:"fa-eye-slash",
    };
  }

  display_rev =()=>{
   this.setState({show:!this.state.show});
    console.log(this.state.show)
  }

  render() {
    return (
      <>
    <div id="containerWrapper">
        {this.state.show && (
          <div id="itemContainer">
            <img src={this.state.person.imageSrc} alt="" id="image" />
            <div id="textContainer">
              <h5 id="nameId">{this.state.person.name}</h5>
              <h5 id="bioId">{this.state.person.bio}</h5>
              <h5 id="professionId">{this.state.person.profession}</h5>
            </div>
          </div>
        )}
        <button onClick={this.display_rev}>
          <FontAwesomeIcon
            id="eyeIcon"
            icon={['fa-solid', this.state.show ? this.state.isShown : this.state.isHidden]}
          />
        </button>
      </div>

      </>
    );
  }
}

