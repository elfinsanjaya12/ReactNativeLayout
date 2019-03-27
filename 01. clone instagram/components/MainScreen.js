//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Icon } from "native-base";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import LikedTab from "./AppTabNavigator/LikedTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

// create a component
export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send" />
  };

  render() {
    return <AppContainerAppNavigator />;
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab
    },
    Search: {
      screen: SearchTab
    },
    Add: {
      screen: AddMediaTab
    },
    Like: {
      screen: LikedTab
    },
    Profile: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);
const AppContainerAppNavigator = createAppContainer(AppTabNavigator);

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});
