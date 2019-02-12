import { createStackNavigator, createAppContainer} from 'react-navigation';
import DashBoardScreen from './screens/DashBoardScreen';
import PlacesScreen from './screens/PlacesScreen';

const mainNav = createStackNavigator({
    dash: {screen: DashBoardScreen},
    places: {screen: PlacesScreen }
},{
    //initialRouteName: 'places',
 defaultNavigationOptions: {
    headerBackTitleStyle: {
        color: '#c0c0c0'
    }
 }   
});


export default createAppContainer(mainNav);