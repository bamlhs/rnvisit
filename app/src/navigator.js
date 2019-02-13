import { createStackNavigator, createAppContainer} from 'react-navigation';
import DashBoardScreen from './screens/DashBoardScreen';
import PlacesScreen from './screens/PlacesScreen';
import PlaceScreen from './screens/PlaceScreen';

const mainNav = createStackNavigator({
    dash: {screen: DashBoardScreen},
    places: {screen: PlacesScreen },
    place: { screen: PlaceScreen }
},{
initialRouteName: 'places',
 defaultNavigationOptions: {
    headerBackTitleStyle: {
        color: '#c0c0c0'
    }
 }   
});


export default createAppContainer(mainNav);