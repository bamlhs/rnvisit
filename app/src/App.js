import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DashBoardScreen from './screens/DashBoardScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <DashBoardScreen />
    );
  }
}
