import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Input, Button } from 'react-native-elements';
import CustomizedButton from '../components/CustomizedButton';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';


export default class AddPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
    };
    this.saveData = this.saveData.bind(this);
    this.onImagePress = this.onImagePress.bind(this);
  }
  saveData = () => {
      console.log('saveData');
      const url = 'https://rnc.herokuapp.com/api/places';
      const { name  } = this.state;
      axios.post(url,{
          
        name: name, 
        thumb: 'https://www.tutorialspoint.com/react_native/images/logo.png'
    })
      .then((resp) => (console.log("loaded")
      ))
      .catch((err) => (console.log(err)
      ));

  }
  onImagePress = () => {
    ImagePicker.showImagePicker({}, ({data}) => (console.log(data)
    ))
  }
  render() {
      console.log(this.state.name);
      
    return (
      <View>
        <Input 
        autoCorrect={false} 
        onChangeText={(name) => (this.setState({name}))}/>
        <Button icon={{name: 'camera', size: 100 }} onPress={this.onImagePress
        } />
        <CustomizedButton title="Send" onPress={this.saveData} />
      </View>
    );
  }
}
