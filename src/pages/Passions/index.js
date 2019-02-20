import React, { Component } from "react";
import Container from "../../components/Container";
import ClickItem from "../../components/ClickItem";
import data from "../../data.json";
import axios from "axios";

import { MDBContainer, MDBAlert } from 'mdbreact';
import "./passions.css";



var styles = {
  button: {
    padding: "20px",
    width: "100%",
    background: "#ffc123"
  }
}
class Passions extends Component {
  state = {
    data: data,
    userpassions: [],
    selected: "",
    showAlert: false
  };

  componentWillMount() {

    let selected = this.state.selected;
    let userpassions = this.state.userpassions;
    //CHECK WHETHER userpassions.includes(selected), IF NOT -> append, + '.active', -'.inactive' || if yes, remove + '.inactive', -'.active'
    //get user data, user ternerary operator to add a key to data
    axios.get("/auth/user").then(user => {
      this.setState({
        userpassions: user.data.user.passions
      })
    })
  }

  handleActivePassions(title) {
    var status = false;
    for (var i = 0; i < this.state.userpassions.length; i++) {
      if (title === this.state.userpassions[i].title) {
        status = true;
      }
    }

    if (status) {
      return "activate";
    }
    else {
      return "";
    }
  }
  handleItemClick = (id, e, keywords) => {
    var passion = {
      title: e.target.title,
      keyword: keywords
    }
    var status = false;
    for (var i = 0; i < this.state.userpassions.length; i++) {
      if (e.target.title === this.state.userpassions[i].title) {
        status = true;
      }
    }
    if (status) {
      var filteredArray = this.state.userpassions.filter(p => {
        return p.title !== e.target.title;
      })
      this.setState({
        userpassions: filteredArray
      })
    } else {
      var updatedState = this.state.userpassions;
      updatedState.push(passion);

      this.setState({
        userpassions: updatedState
      })
    }
  };
  handleSubmitButton = () => {
    this.setState({
      showAlert: true
    })
    axios.get("auth/user").then(user => {
      if (user.data.user.newUser) {
        axios.post("/auth/update-newUser").then(user => {
          this.handleNewPassions();
        })
      } else {
        this.handleNewPassions();
      }
    })
  }

  handleNewPassions = () => {
    axios.post("/auth/set-passions", this.state.userpassions).then(user => {
    })
  }
  render() {
    return (
      <div>
        <div style={{ background: "transparent", color: "black", fontFamily: " 'Anton', sans-serif" }} className="jumbotron text-center">
          <h2 className="passion-message">SET YOUR PASSIONS</h2>
        </div>
        <Container>
          {this.state.data.map(item => (
            <ClickItem
              handleActivePassions={this.state.userpassions ? this.handleActivePassions(item.title) : ""}
              key={item.id}
              id={item.id - 1}
              handleClick={this.handleItemClick}
              title={item.title}
              keywords={item.keywords}
            />
          ))}
          <div className={`${this.state.showAlert ? "show" : "hide"}`}>
            <MDBContainer>
              <MDBAlert color="primary" >
                <h6 style={{ width: "860px", textAlign: "center" }}>Passions Saved</h6>
              </MDBAlert>
            </MDBContainer>
          </div>

          <button onClick={this.handleSubmitButton} className="click-item" style={styles.button}>Save Changes</button>
        </Container>



      </div>
    );
  }
}

export default Passions;