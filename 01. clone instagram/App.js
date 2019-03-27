import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./components/MainScreen";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

const AppContainer = createAppContainer(AppStackNavigator);
