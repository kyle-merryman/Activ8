import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import ClickItem from "../components/ClickItem";
import DispChar from "../components/DispChar";
import DispEve from "../components/DispEve";
import DispPet from "../components/DispPet";
import userpassions from "./Passions/passions.json";
import Modal from "../components/Modal";
import axios from "axios";

class Home extends Component {

  state = {
    userpassions: //[],
    userpassions,
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
    console.log(this.state.userpassions[0]);

    // axios.get("/auth/user").then(user => {
    //     this.setState({
    //       userpassions: user.data.user.passions
    //     });
    //     console.log("user passions1", this.state.userpassions);
    // })
  }

  handleItemClick = id => {
    console.log(this.state.userpassions);
    console.log("id test", id);
    let title = this.state.userpassions[id].title;
    let keyword = this.state.userpassions[id].keyword;
    console.log(title);
    console.log(`This is the keyword: ${keyword}`);
    // let title = this.state.userpassions[id].title;
    // let searchword = this.state.userpassions[id].keyword;
    console.log(`The state was ${this.state.selected}`);
    this.setState({selected: title});
    this.setState({keyword: keyword});
    console.log(`The state has been changed to ${this.state.selected}`);
    // this.setState({keyword: searchword});
    this.setState({ show: true });
  };
  
  hideModal = () => {
    this.setState({ show: false });
  }

  event = () => {
    console.log(`I'm going to and event for ${this.state.selected}`);
    this.setState({action: "event"});
    console.log(this.state);
  }

  petition = () => {
    console.log(`I'm going to petition for ${this.state.selected}`);
    this.setState({action: "petition"});
    console.log(this.state);
  }

  donate = () => {
    console.log(`I'm going to donate to ${this.state.selected}`);
    this.setState({action: "donate"});
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

  render() {

    const action = this.state.action;
    let display;

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
    } else if (action == "donate") {
        var search = this.state.keyword;

        axios.get("/api/charity/" + search).then(charity => {
            for (let i = 0; i < charity.data.length; i++) {
            console.log(charity.data[i]);
            var char = charity.data[i];
            console.log(`The name is ${char.name}, the id is ${i+1}, the url is ${char.url}`);
            display = <DispChar name={char.name} id={`charity-${i+1}`} url={char.url}/>
        }});
    } else if (action == "event") {
        var search = this.state.keyword;

        axios.get("/api/event/" + search).then(event => {
            for (let i = 0; i < event.data.length; i++) {
            console.log(event.data[i]);
            var eve = event.data[i];
            console.log(`The name is ${eve.title}, the id is ${i+1}, the date is ${eve.summary}, the url is ${eve.url}`);
            display = <DispEve title={eve.title} id={`event-${i+1}`} summary={eve.summary} url={eve.url}/>
        }});
    } else if (action == "petition") {
        var search = this.state.keyword;

        axios.get("/api/petition/" + search).then(petition => {
            for (let i = 0; i < petition.data.length; i++) {
            console.log(petition.data[i]);
            var pet = petition.data[i];
            console.log(`The name is ${pet.title}, the id is ${i+1}, the summary is ${pet.summary}, the url is ${pet.url}`);
            display = <DispPet title={pet.title} id={`event-${i+1}`} summary={pet.summary} url={pet.url}/>
        }});
    } else {
      display = <ClickItem
      handleClick={this.handleItemClick}
      title={this.state.action}
      keywords={this.state.keyword}
      />
    }

    return (
      <div>
        <Header header="What to act on?"/>
        <Container>
          {display}
        </Container>
        <Modal show={this.state.show} handleClose={this.hideModal} >
            <h2>{this.state.selected}</h2>
            <button onClick={this.event} className={`event ${this.state.selected}`} href={"/event/" + this.state.keyword}>event</button>
            <button onClick={this.petition} className={`petition ${this.state.selected}`} href={"/petition/" + this.state.keyword}>petition</button>
            <button onClick={this.donate} className={`donate ${this.state.selected}`} href={"/charity/" + this.state.keyword}>donate</button>
            <button onClick={this.contact} className={`contact ${this.state.selected}`}>contact</button>
        </Modal>
      </div>
    )
  }
}

const container = document.createElement('div');
document.body.appendChild(container);


export default Home;
