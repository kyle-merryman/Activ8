import React, { Component } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import ClickItem from "../../components/ClickItem";
import data from "../../data.json";
import axios from "axios";


var styles = {
  button: {
    padding: "20px",
    width: "100%",
    background: "#ffc123"
  }
}
class Passions extends Component {
  state = {
    data,
    userpassions: [],
    selected: ""
  };

  componentDidMount() {
    //console.log(selected);
    console.log(this);
    let selected = this.state.selected;
    let userpassions = this.state.userpassions;
    console.log(`testing ${selected} against the array: ${userpassions}`);
    //CHECK WHETHER userpassions.includes(selected), IF NOT -> append, + '.active', -'.inactive' || if yes, remove + '.inactive', -'.active'

  }


  handleItemClick = id => {
    console.log(id);
    var pButton = document.getElementById(id);
    console.log(pButton);
    let title = this.state.data[id].title;
    let passions = this.state.userpassions;

    if (passions.includes(title)) {
      let selected = this.state.selected;
      this.setState({ selected: title });
      console.log(`${selected} was the selected button`);
      console.log(`${title} is the title of the current button`);
      let updated = passions.filter(passion => passion !== title);
      console.log(updated);
      this.setState({ userpassions: updated });
      console.log(`The UPDATED passion array: \n${this.state.userpassions}. ${title} should have been removed.`);
      console.log(`${title} is the current selected button \n DOES ${selected} match ${title}?`);
      var element = document.getElementById(id);

      //if (document.body.classList.contains("active")) {
      element.classList.add("inactive");
      element.classList.remove("activate");
      //}
    } else {
      let selected = this.state.selected;
      this.setState({ selected: title });
      console.log(`${selected} was the selected button`);
      passions.push(title);
      console.log(`The UPDATED passion array: \n${this.state.userpassions}. ${title} should have been added.`);
      console.log(`${title} is the current selected button \n DOES ${selected} match ${title}?`);
      var element = document.getElementById(id);

      //if (document.body.classList.contains("inactive")) {
      element.classList.add("activate");
      element.classList.remove("inactive");
      console.log(element.classList);
      //}
    };

  };
  handleSubmitButton = () => {
    console.log("submitted user passions")
    console.log(this.state.userpassions);
    axios.get("auth/user").then(user => {
      if (user.data.user.newUser) {
        axios.post("/auth/update-newUser").then(user => {
          console.log("updated new user to old user");
          this.handleNewPassions();
        })
      } else {
        this.handleNewPassions();
      }
    })
  }

  handleNewPassions = () => {
    axios.post("/auth/set-passions", this.state.userpassions).then(user => {
      console.log("updated users passions");
    })
  }
  render() {
    return (
      <div>
        <div style={{ background: "grey", color: "white" }} className="jumbotron text-center">
          <h2>SET YOUR PASSIONS</h2>
        </div>
        <Container>
          {this.state.data.map(item => (
            <ClickItem
              isActive={this.handleActivePassions}
              key={item.id}
              id={item.id - 1}
              handleClick={this.handleItemClick}
              title={item.title}
              keywords={item.keywords}
            />
          ))}


          <button onClick={this.handleSubmitButton} className="click-item" style={styles.button}>Save Changes</button>
        </Container>


      </div>
    );
  }
}

export default Passions;