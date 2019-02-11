import React from "react";
import "./style.css";
var db = require("../db/models");

const Commit = ({ current, visible }) => {
    var show = visible
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    var action = current;

    function reveal() {
        if (show === true) {
            show == false;
        } else if (show === false) {
            show == true;
        } else {
            console.log("ERROR");
        }
    };

    function commitTo(action) {
        // if (action == "event") {} else if (action == "petition") {} else if
        switch (action) {
            case "event":
                db.User.update(
                    { 'local.username': username }, //FIX
                    { $addToSet: { commits: [{event: action}]}  } //increase number by 1
                );
                break;
            case "petition":
                db.User.update(
                    { 'local.username': username }, //FIX
                    { $addToSet: { commits: [{petition: action}]}  } //increase number by 1
                );
                break;  
            case "donate":
                db.User.update(
                    { 'local.username': username }, //FIX
                    { $addToSet: { commits: [{donate: action}]}  } //increase number by 1
                );
                break; 
            case "contact":
                db.User.update(
                    { 'local.username': username }, //FIX
                    { $addToSet: { commits: [{contact: action}]}  } //increase number by 1
                );
                break; 
            default: console.log(`error, action selected is: ${action}`);
        }


        // if (show === true) {
        //     show == false;
        // } else if (show === false) {
        //     show == true;
        // } else {
        //     console.log("ERROR");
        // }
    }
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          <h2>Commit to this?</h2>
          <button
            onClick={commitTo(action)}
          >
            Yes
          </button>
          <button
            onClick={reveal}
          >
            No
          </button>
        </section>
      </div>
    );
  };

export default Commit;