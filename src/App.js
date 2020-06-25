import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Image from "./Image";
class App extends Component {
  constructor() {
    super();
    this.state = {
      randomRestaurants: null,
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
        count: 20,
      },
    }).then((restaurants) => {
      restaurants = restaurants.data.restaurants;
      const newState = [];
      for (let key in restaurants) {
        newState.push(restaurants[key].restaurant);
      }
      this.setState({
        restaurants: newState,
        randomRestaurants:
          newState[Math.floor(Math.random() * newState.length)],
      });
    });
  };
  render() {
    return (
      <div className="App">
        <div className="wrapper position">
          <div className="flexContainer">
            <h1 id="slide">Foodie&Find</h1>
            <p>
              For when you really can't decide on where to eat. We promise we
              won't give you an "I don't know, what do you want?" in response.
              😜 (*hint: click until you find a restaurant you like!)
            </p>
            <button onClick={this.getRestaurants}>🍟 TIME FOR FOOD 🍣</button>
            {this.state.randomRestaurants ? (
              <ul>
                <li>Restaurant: {this.state.randomRestaurants.name}</li>
                <li>
                  <Image image={this.state.randomRestaurants} />
                </li>
                <li>Cuisine: {this.state.randomRestaurants.cuisines}</li>
                <li>
                  Location: {this.state.randomRestaurants.location.address}
                </li>
                <li>Area: {this.state.randomRestaurants.location.locality}</li>
                <li>Hours: {this.state.randomRestaurants.timings}</li>
                <li>
                  Menu:{" "}
                  <a href={this.state.randomRestaurants.menu_url}>click here</a>
                </li>
                <li>
                  Average Cost For Two: $
                  {this.state.randomRestaurants.average_cost_for_two}
                </li>
                <li>
                  Phone Number: {this.state.randomRestaurants.phone_numbers}
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
