import React from "react";

const Option = props => (
  <div className="option">
    <p className="option--text">{props.count}. {props.opText}</p>
    <button
      className="button button--link"
      onClick={e => {
        props.remove(props.opText);
      }}
    >
      remove
    </button>
  </div>
);
export default Option;
