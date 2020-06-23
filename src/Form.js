import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userSelection: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      userSelection: event.target.value,
      selectedRestaurants: this.state.restaurant[
        Math.floor(Math.random() * this.state.restaurant.length)
      ],
    });
  };

  render() {
    return (
      <form>
        <select value={this.state.userSelection} onChange={this.handleChange}>
          <option disabled value="">
            Please Select
          </option>
          <option value="ministryOfMagic">Ministry of Magic</option>
          <option value="dumbledoresArbys">Dumbledore's Arby's</option>
          <option value="orderOfThePhoenix">Order of The Phoenix</option>
        </select>
        {/* user anon callback func to pass argument to the filter wizards function */}
        <button onClick={this.props.getRestaurants}>Find me some food!</button>
      </form>
    );
  }
}

export default Form;
