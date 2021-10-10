import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img
              src="https://art.ngfiles.com/images/1416000/1416404_alert222_script-alert-1-script.png?f1599429715"
              alt="profile-img"
            />
          </div>
          <h4>John Doe</h4>
          <p>CEO & Founder at ChatBot Inc</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4 onClick={this.toggleInfo}>Information</h4>
            <i className="fa fa-angle-down" onClick={this.toggleInfo}></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    );
  }
}
