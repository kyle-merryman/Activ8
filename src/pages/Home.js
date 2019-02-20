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

    axios.get("/auth/user").then(user => {
      this.setState({
        userpassions: user.data.user.passions,
      });
    })
  }

  componentDidMount() {
    this.getPassions();
  }

  handleClick = (id, e, keywords) => {
    let title = e.target.attributes.title.value;
    this.setState({
      selected: title,
      keyword: e.target.attributes.name.value,
      show: true
    });
  };

  hideModal = () => {
    this.setState({ show: false });
  }

  event = () => {
    this.hideModal();
    this.setState({ action: "event" });
    var search = this.state.keyword;
    //this.setState({keyword: search});
    var array = [];

    axios.get(`/api/event/${search}`).then(event => {

      this.setState({ actionObj: event.data });
    });
  }

  petition = () => {
    this.hideModal();
    this.setState({ action: "petition" });
    var search = this.state.keyword;
    var array = [];
    axios.get(`/api/petition/${search}`).then(petition => {
      this.setState({ actionObj: petition.data });

    }
    )

  }

  donate = () => {
    this.hideModal();
    this.setState({ action: "donate" });
    var search = this.state.keyword;
    //this.setState({keyword: search});
    var array = [];
    axios.get(`/api/charity/${search}`).then(charity => {

      this.setState({ actionObj: charity.data });
    });
  }

  contact = () => {
    this.hideModal();
    this.setState({ action: "contact" });
    var search = this.state.keyword;
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
        handlePushCommit={this.handlePushCommit}
        handleCommitState={this.handleCommitState}
      />

    ))
    return display;
  }
  displayClickItem = () => {
    var display = this.state.userpassions.map(item => (
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

  handlePushCommit = () => {
    var newCommit = {
      title: this.state.title,
      url: this.state.url,
      summary: this.state.summary,
      id: this.state.id
    }
    axios.post("auth/pushCommit", newCommit).then((user) => {
    })
  }
  handleCommitState = (title, url, summary, id) => {
    this.setState({
      title: title,
      url: url,
      summary: summary,
      id: id
    })
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
