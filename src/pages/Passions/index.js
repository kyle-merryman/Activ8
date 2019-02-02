import React, { Component } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import ClickItem from "../../components/ClickItem";
import data from "../../data.json";

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
    console.log(selected);
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
      element.classList.remove("active");
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
      element.classList.add("active");
      element.classList.remove("inactive");
      console.log(element.classList);
      //}
    };
  };

  render() {
    return (
      <div>
        <Container>
          {this.state.data.map(item => (
            <ClickItem
              key={item.id}
              id={item.id - 1}
              handleClick={this.handleItemClick}
              title={item.title}
              keywords={item.keywords}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Passions;