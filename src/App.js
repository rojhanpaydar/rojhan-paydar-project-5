import React, { Component } from "react";
import Form from "./Form";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      restaurantChoices: [],
    };
  }

  getRestaurants = (event) => {
    event.preventDefault();
    axios({
      url:
        "https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city",
      method: "GET",
      responseType: "JSON",
      headers: {
        "user-key": "6dd0b6c953cd598dfe6caa540847c370",
      },
      params: {
        count: 100,
        start: 20,
      },
    }).then((restaurants) => {
      console.log(restaurants);
      restaurants = restaurants.data;
      const newState = [];
      for (let key in restaurants) {
        console.log(restaurants);
        newState.push(restaurants[key][0]);
      }
      this.setState({
        restaurants: newState,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Pick a restaurant!</h1>
        <Form getRestaurants={this.getRestaurants} />

        {/* SHOW RESTAURANTS HERE */}
        {/* {this.state.restaurants.map((rest) => {
          return <h2 key={rest.id}>{rest.name}</h2>;
        })} */}
      </div>
    );
  }
}

export default App;
