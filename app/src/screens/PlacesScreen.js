import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import CustomizedListItem from '../components/CustomizedListItem';

export default class PlacesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
    this.renderItem = this.renderItem.bind(this);

  }
componentDidMount() {
    console.log("componentDidMount");
    
    const url = 'https://rnc.herokuapp.com/api/places';
    axios.get(url)
    .then(({data}) => ( this.setState({data})
    ))
    .catch((error) => (console.log(error)
    ));
}

  renderItem = ({item}) => (<CustomizedListItem item={item} />);
  
  render() {
      console.log("Render");
      console.log(this.state.data.length);
    if (this.state.data.length == 0) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <ActivityIndicator size={1} color={'red'} />
            </View>
        );
    }
      
    return (
      <View style={{flex: 1,   backgroundColor: "#eeeeee"
      ,}}>
        <FlatList 
            data={this.state.data}
            renderItem={this.renderItem}
        />
      </View>
    );
  }
}
