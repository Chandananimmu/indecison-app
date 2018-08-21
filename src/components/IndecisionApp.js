import React from "react";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     options: props.options
  //   };
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlepick = this.handlepick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  // }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));

    // return {
    //   options: []
    // };
  };
  clearModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleDeleteOption = optiontoreamove => {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => {
          return optiontoreamove != option;
        })
      };
    });
  };
  handlepick = () => {
    // let n=this.state.options.length;
    const number = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[number];
    this.setState(() => ({ selectedOption: option }));
  };
  handleAddOption = option => {
    //console.log(option);
    if (!option) {
      return "Enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "already exists";
    } else {
      this.setState(
        prevState => ({ options: prevState.options.concat(option) })
        // return {
        //   options: prevState.options.concat(option)
        // };
      );
    }
  };
  render() {
    // const title = "Indecision";
    const subtitle = "Put your life in the hands of the computer";
    // const options = ["One", "Two", "Four", "Three"];

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlepick={this.handlepick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption addoption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            clearModal={this.clearModal}
          />
        </div>
      </div>
    );
  }
}
Header.defaultProps = {
  title: "Indecision"
};
IndecisionApp.defaultProps = {
  options: ["ONE"]
};
export default IndecisionApp;
