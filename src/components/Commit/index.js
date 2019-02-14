import React, { Component } from "react";
import "./style.css";
import axios from "axios";
// var db = require("../db/models");

const Commit = (props) => {
  var show = props.visible
  // var showHideClassName = show ? 'modal display-block' : 'modal display-none';
  var showHideClassName = 'modal display-block';

  var action = props.current;

  function reveal() {
    showHideClassName = 'modal display-none';
  }

  function noCommit() {
    var popup = document.querySelector('.display-block');
    popup.remove();
  }

  // function reveal() {
  //     if (show === true) {
  //         show = false;
  //         console.log(`THE STATE IZ ${show}, the class is ${showHideClassName}`);
  //     } else if (show === false) {
  //         show = true;
  //         console.log(`THE STATE IZ ${show}, the class is ${showHideClassName}`);
  //     } else {
  //         console.log("ERROR");
  //     }
  // };

  function commitTo(action) {
    var action = {
      action: action
    }
    console.log("action test", action)

    axios.put("/auth/updateCommit", action).then(commit => {
      console.log("success")
    }).catch(err => console.log(err))
  }

  return (
    <div className={'modal display-block'/*showHideClassName*/}>
      <section className='modal-main'>
        <h2>Commit to this?</h2>
        <button
          onClick={() => commitTo(action)}
        >
          Yes
          </button>
        <button
          onClick={props.checkCommit}
        >
          No
          </button>
      </section>
    </div>
  );
};

export default Commit;
















// import React from "react";
// import "./style.css";
// var db = require("../db/models");

// const Commit = ({ current, visible, username }) => {
//     var show = visible
//     const showHideClassName = show ? 'modal display-block' : 'modal display-none';

//     var action = current;

//     function reveal() {
//         if (show === true) {
//             show == false;
//         } else if (show === false) {
//             show == true;
//         } else {
//             console.log("ERROR");
//         }
//     };

//     function commitTo(action) {
//         // if (action == "event") {} else if (action == "petition") {} else if
//         switch (action) {
//             case "event":
//                 db.User.update(
//                     { 'local.username': username }, //FIX
//                     { $addToSet: { commits: [{event: action}]}  } //increase number by 1
//                 );
//                 break;
//             case "petition":
//                 db.User.update(
//                     { 'local.username': username }, //FIX
//                     { $addToSet: { commits: [{petition: action}]}  } //increase number by 1
//                 );
//                 break;  
//             case "donate":
//                 db.User.update(
//                     { 'local.username': username }, //FIX
//                     { $addToSet: { commits: [{donate: action}]}  } //increase number by 1
//                 );
//                 break; 
//             case "contact":
//                 db.User.update(
//                     { 'local.username': username }, //FIX
//                     { $addToSet: { commits: [{contact: action}]}  } //increase number by 1
//                 );
//                 break; 
//             default: console.log(`error, action selected is: ${action}`);
//         }


//         // if (show === true) {
//         //     show == false;
//         // } else if (show === false) {
//         //     show == true;
//         // } else {
//         //     console.log("ERROR");
//         // }
//     }

//     return (
//       <div className={showHideClassName}>
//         <section className='modal-main'>
//           <h2>Commit to this?</h2>
//           <button
//             onClick={commitTo(action)}
//           >
//             Yes
//           </button>
//           <button
//             onClick={reveal}
//           >
//             No
//           </button>
//         </section>
//       </div>
//     );
//   };

// export default Commit;