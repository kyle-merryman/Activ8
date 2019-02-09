import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "../Navbar";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import userpassions from "../../passions.json";
import Modal from "../Modal";

class Home extends Component {


  state = {
    userpassions: userpassions,
    //userpassions,
    selected: "",
    keyword: "",
    action: "",
    show: false
  };

  componentDidMount() {
    console.log('this is the Home component as JSON:');
    console.log(this);
    console.log(`these are the user's selected passions:`);
    console.log(this.state.userpassions);
  }


  handleItemClick = id => {
    console.log(id);
    let title = this.state.userpassions[id].title;
    let searchword = this.state.userpassions[id].keyword;
    console.log(`The state was ${this.state.selected}`);
    this.setState({selected: title});
    console.log(`The state has been changed to ${this.state.selected}`);
    this.setState({keyword: searchword});
    this.setState({ show: true });
  };

  /*showModal = () => {
    this.setState({ show: true });
  }*/
  
  hideModal = () => {
    this.setState({ show: false });
  }

  protest = () => {
    var passion = this.state.selected;
    // var array = this.state.userpassions;
    console.log(`I'm going to protest for ${passion}`);
    this.setState({action: "protest"});

    // var getKeyword = function(selected) {
    //   for (var i = 0; i < array.length; i++) {
    //     if (array[i].title === selected) {
    //       return array[i].keyword;
    //     }
    //   }
    // }
    var search = this.state.keyword;
    console.log(`The keyword of this action is ${search}`);
    //console.log(this.setState.selected);
    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  petition = () => {
    console.log(`I'm going to petition for ${this.state.selected}`);
    this.setState({action: "petition"});

    var search = this.state.keyword;
    console.log(`The keyword of this action is ${search}`);

    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  donate = () => {
    console.log(`I'm going to donate to ${this.state.selected}`);
    this.setState({action: "donate"});

    var search = this.state.keyword;
    console.log(`The keyword of this action is ${search}`);

    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  contact = () => {
    console.log(`I'm going to contact by representative about ${this.state.selected}`);
    this.setState({action: "contact"});

    var search = this.state.keyword;
    console.log(`The keyword of this action is ${search}`);

    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  //<Nav testlist={this.state.selected} action={this.state.action}/>

  render() {
    /////////////////TEST/////////////////TEST/////////////////TEST/////////////////TEST
    const action = this.state.action;
    let display;
    const testingColor = {
      color: "black !important"
    };

    if (!action) {
      display = this.state.userpassions.map(item => (
        <ClickItem
        key={item.id}
        id={item.id - 1}
        handleClick={this.handleItemClick}
        title={item.title}
        keywords={item.keywords}
        />
      ))
    } else {
      var content = `My selected passion is `
      display =   <ClickItem
      handleClick={this.handleItemClick}
      title={this.state.action}
      keywords={this.state.keyword}
      />
    }

    /////////////////TEST/////////////////TEST/////////////////TEST/////////////////TEST
    return (
      <div>
        <Header header="What to act on?"/>
        <Container>
          {display}
          {/* {this.state.userpassions.map(item => (
            <ClickItem
            key={item.id}
            id={item.id - 1}
            handleClick={this.handleItemClick}
            title={item.title}
            keywords={item.keywords}
            />
          ))} */}
        </Container>
        <Modal show={this.state.show} handleClose={this.hideModal} >
            <h2>{this.state.selected}</h2>
            <button onClick={this.protest} className={`protest ${this.state.selected}`}>protest</button>
            <button onClick={this.petition} className={`petition ${this.state.selected}`}>petition</button>
            <button onClick={this.donate} className={`donate ${this.state.selected}`}>donate</button>
            <button onClick={this.contact} className={`contact ${this.state.selected}`}>contact</button>
        </Modal>

      </div>
    )
  }
}

// <ClickItem
//               key={item.id}
//               id={item.id - 1}
//               handleClick={this.handleItemClick}
//               title={item.title}
//               keywords={item.keywords}
//             /> 

const container = document.createElement('div');
document.body.appendChild(container);


export default Home;