import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        flex: 8,
    },
    bottomView: {
        flex: 1,
    }
});
export default class DashBoardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log( Dimensions.get("window"));
    
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../images/masmk.jpg')} 
         style={{width, height}} >
        <View style={styles.topView}></View>
        <View style={styles.bottomView}></View>
      </ImageBackground>
      </View>
    );
  }
}
