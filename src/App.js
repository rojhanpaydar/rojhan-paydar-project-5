import React, { Component } from "react";
// import Form from './Form';
import axios from "axios";
import "./App.css";
// import Form from "./Form";
import Image from "./Image";
class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      restaurantChoices: [],
    };
  }

  // math.random function --> function name to call. put variable on line 29 for count or start which ever you want to start from. randomize start location within the API. Choose a range to work with.

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
        count: 10,
        start: 20,
      },
    }).then((restaurants) => {
      restaurants = restaurants.data.restaurants;
      const newState = [];
      for (let key in restaurants) {
        newState.push(restaurants[key].restaurant);
      }
      this.setState({
        restaurants: newState,
      });
    });
  };
  render() {
    // console.log(this.state.restaurants);
    return (
      <div className="App">
        <div className="wrapper">
          <div className="flexContainer">
            <h1>Foodie&Find</h1>
            <p>
              For when you really can't decide on where to eat. We promise we
              won't give you an "I don't know, what do you want?" in response.
              ;)
            </p>
            <button onClick={this.getRestaurants}>TIME FOR FOOD</button>
          </div>
          {/* <Form getRestaurants={this.getRestaurants} /> */}
          {/* SHOW RESTAURANTS HERE */}
          {this.state.restaurants.map((rest) => {
            // console.log(rest);
            return (
              <div className="flexContainer2">
                <ul key={rest.id}>
                  <div>
                    <li>Restaurant: {rest.name}</li>
                    <li>
                      <Image image={rest} />
                    </li>
                    <li>Hours: {rest.timings}</li>
                    <li>Menu: {rest.menu_url}</li>
                    <li>Cuisine: {rest.cuisines}</li>
                    <li>Location: {rest.location.address}</li>
                  </div>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
