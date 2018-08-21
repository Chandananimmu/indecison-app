import React from "react";
export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  // constructor(props) {
  //   super(props);
  //   this.FormOnSubmit = this.FormOnSubmit.bind(this);
  //   this.state = {
  //     error: undefined
  //   };
  // }
  FormOnSubmit=(e)=> {
    e.preventDefault();
    const textvalue = e.target.elements.option.value.trim();

    const error = this.props.addoption(textvalue);
    this.setState(
      () => ({ error })
      // return { error };
    );
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div >
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.FormOnSubmit}>
          <input className="add-option-input" type="text" name="option" />
          <button className="button">AddOption</button>
        </form>
      </div>
    );
  }
}