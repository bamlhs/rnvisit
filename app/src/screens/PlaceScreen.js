import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card  } from 'react-native-elements';

class PlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { name, thumb, category} = this.props.places.item;

    return (
      <ScrollView horizontal={false}>
       <Card title={name} featuredTitle={category} image={{uri: thumb}} />
      </ScrollView>
    );
  }
}


const mapStateToProps = (state) => ({
  places: state.places
});

export default connect(mapStateToProps, { })(PlaceScreen);


