import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import IndecisionApp from "./components/IndecisionApp";

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.handlepick}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.options.map(op => {
//           return <Option key={op} opText={op} />;
//         })}
//         <button onClick={this.props.handleDeleteOptions}>Remove</button>
//       </div>
//     );
//   }
// }

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.opText}</p>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <IndecisionApp options={[ "Two"]} />,
  document.getElementById("app")
);
