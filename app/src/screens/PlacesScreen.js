import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import CustomizedListItem from '../components/CustomizedListItem';
import { connect } from 'react-redux';
import { getPlaces, selectPlace } from '../redux/Actions/placesActions';


class PlacesScreen extends Component {

    static navigationOptions = {
        title: 'Places'
      }
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
    this.renderItem = this.renderItem.bind(this);
    this.onItemPressed = this.onItemPressed.bind(this);

  }

componentDidMount() {
    console.log("componentDidMount");
    
    const url = 'https://rnc.herokuapp.com/api/places';
    axios.get(url)
    //.then(({data}) => ( this.setState({data})))
    .then(({data}) => (this.props.getPlaces(data)))
    .catch((error) => (console.log(error)
    ));
}

  onItemPressed = (item) => {
    console.log('onItemPressed');
    console.log(item);
    this.props.selectPlace(item);
    this.props.navigation.navigate('place');
  }

  renderItem = ({item}) => (<CustomizedListItem item={item} onPress={this.onItemPressed.bind(this, item)} />);
  
  render() {
      console.log("Render");
      console.log(this.props.places);
    if (this.props.places.data.length == 0) {
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
            data={this.props.places.data}
            renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.places
});

export default connect(mapStateToProps, { getPlaces, selectPlace})(PlacesScreen);
