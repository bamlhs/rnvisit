import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import CustomizedButton from '../components/CustomizedButton';

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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default class DashBoardScreen extends Component {

  static navigationOptions = {
    header: null
  }
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
        <View style={styles.bottomView}>
        <CustomizedButton title="Show Places" onPress={() => this.props.navigation.navigate('places')}/>
        <CustomizedButton title="Save Place" onPress={() => console.log("Save Place")}/>
        </View>
      </ImageBackground>
      </View>
    );
  }
}
