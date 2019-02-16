import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Container from "../components/Container";
import ClickItem from "../components/ClickItem";
import ActionDisp from "../components/ActionDisp";
//import userpassions from "./Passions/passions.json";
//import getPassions from "../../server/scripts/passions"
import Modal from "../components/Modal";
import axios from "axios";
import "./Home.css";

class Home extends Component {

  state = {
    user: "",
    // userpassions: [],
    userpassions: [],
    selected: "",
    keyword: "",
    action: "",
    actionObj: [],
    show: false,
    results: [],
    showCommit: false,

  };


  checkCommit = () => {
    if (this.state.showCommit) {
      this.setState({
        showCommit: false
      })
    } else {
      this.setState({
        showCommit: true
      })
    }
  }
  
  getPassions() {
    // axios.get("/api/passions").then(passions => {
    //     console.log("THIS IS THE PASSSSSSION DONEYYYYK!!!!");
    //     console.log(passions);
    //     // this.setState(
    //     //     {passions: passions}
    //     // )
    // })
    axios.get("/auth/user").then(user => {
        this.setState({
          userpassions: user.data.user.passions,
        });
        console.log("THESE ARE THE USER PASSIONS BEOTCH", this.state.userpassions);
    })
  }

  componentDidMount() {
    this.getPassions();
    console.log('this is the Home component as JSON:');
    console.log(this);
    console.log(`these are the user's selected passions:`);
    console.log(this.state.userpassions);
    console.log(this.state.userpassions[0]);

    // axios.get("/auth/user").then(user => {
    //     this.setState({
    //       userpassions: user.data.user.passions,
    //       user: user.data.user.local.username
    //     });
    //     console.log("user passions1", this.state.userpassions);
    // })

  }

  handleClick = (id, e, keywords) => {
    let title = e.target.attributes.title.value;//this.state.userpassions[id].title;
    this.setState({ selected: title,
      keyword: e.target.attributes.name.value,
      show: true
      });
    // this.setState({ keyword: e.target.attributes.name.value });
    // this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  }

  event = () => {
    console.log("keyword test", this.state.keyword);
    this.setState({ action: "event" });
    var search = this.state.keyword;
    //this.setState({keyword: search});
    var array = [];

    axios.get(`/api/event/${search}`).then(event => {
      console.log("EVENT!!!", event);
      for (let i = 0; i < event.data.length; i++) {
        array.push(event.data[i]);
        // console.log("'AIM NOT AN ONION!!!!!");
      }
      console.log("/////////////AXIOS////////////////CALL/////////////////AXIOS///////////////////CALL//////////////////////");
      console.log(array);
      this.setState({ actionObj: array });
    });

    console.log(this.state);
  }

  petition = () => {
    console.log(`I'm going to petition for ${this.state.selected}`);
    this.setState({ action: "petition" });
    var search = this.state.keyword;
    //this.setState({keyword: search});
    var array = [];

    console.log("search test", search)
    axios.get(`/api/petition/${search}`).then(petition => {
      console.log(`the petition object is:`);
      console.log(petition.data);
      console.log(`the petition LENGTH is:`);
      console.log(petition.data.length);
      console.log("one petition in the array is:");
      console.log(petition.data[1]);

      for (let i = 0; i < petition.data.length; i++) {
        array.push(petition.data[i]);
        // console.log("'AIM NOT AN ONION!!!!!");
      }
      // console.log(petition);
      console.log("/////////////AXIOS////////////////CALL/////////////////AXIOS///////////////////CALL//////////////////////");
      console.log("GIT OUTTA ME SWAAAAAAAAAAMMMP!!!!");
      console.log(array);

      this.setState({ actionObj: array });
      console.log("This is the AXIOS result in the state actionObj:");
      console.log(this.state.actionObj);
    })

  }

  donate = () => {
    console.log(`I'm going to donate to ${this.state.selected}`);
    this.setState({ action: "donate" });
    var search = this.state.keyword;
    //this.setState({keyword: search});
    var array = [];

    axios.get(`/api/charity/${search}`).then(charity => {
      for (let i = 0; i < charity.data.length; i++) {
        array.push(charity.data[i]);
        // console.log("'AIM NOT AN ONION!!!!!");
      }
      console.log("/////////////AXIOS////////////////CALL/////////////////AXIOS///////////////////CALL//////////////////////");
      this.setState({ actionObj: array });
    });

    console.log(this.state);
  }

  contact = () => {
    console.log(`I'm going to contact by representative about ${this.state.selected}`);
    this.setState({ action: "contact" });

    var search = this.state.keyword;
    console.log(`The keyword of this action is ${search}`);

    console.log(`'state.action' has been set to ${this.state.action}`);
    console.log(this.state);
  }

  displayStuff = () => {
    var display = this.state.actionObj.map(item => (
      <ActionDisp
        hide={this.state.selected}
        commitStatus={this.state.showCommit}
        checkCommit={this.checkCommit}
        id={item._id}
        title={item.title ? item.title : item.name} /*username: ${this.state.user}*/
        url={item.url}
        summary={item.summary ? item.summary : ""}
        action={this.state.action}
        username={this.state.user}
      />

    ))
    return display;
  }
  displayClickItem = () => {
    var display = this.state.userpassions.map(item => (
      console.log("THIS IS THE MUTHAFUCKING ITEM"),
      console.log(item.keyword),
      
      <ClickItem

        key={item.id}
        id={item.id} //ADD AN ID #
        handleClick={this.handleClick}
        title={item.title}
        keywords={item.keyword}
      />
    ))

    return display;
  }

  render() {
    return (
      <div>
        <Header header="What to act on?" />
        <div id="headerAct">
          <Container className>
            {this.state.action ? this.displayStuff() : this.displayClickItem()}
          </Container>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <h2>{this.state.selected}</h2>
          <button onClick={this.event} className={`event b ${this.state.selected}`} href={"/event/" + this.state.keyword}>event</button>
          <button onClick={this.petition} className={`petition b ${this.state.selected}`} href={"/petition/" + this.state.keyword}>petition</button>
          <button onClick={this.donate} className={`donate b ${this.state.selected}`} href={"/charity/" + this.state.keyword}>donate</button>
          <button onClick={this.contact} className={`contact b ${this.state.selected}`}>contact</button>
        </Modal>

      </div>
    )
  }
}

const container = document.createElement('div');
document.body.appendChild(container);


export default Home;
