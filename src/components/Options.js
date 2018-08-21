import React from "react";
import Option from "./Option";
const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header widget-header--title">Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove all
      </button>
    </div >
    
    {props.options.length === 0 && (
      <p className="widget-message">Please enter the option to get it started!!</p>
    )}
    {props.options.map((op,index) => {
      return <Option key={op} count={index+1} opText={op} remove={props.handleDeleteOption} />;
    })}
  </div>
);
export default Options;
