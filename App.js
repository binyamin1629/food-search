import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from './src/screens/SearchScreen'
import ResultShow from './src/screens/ResultsShow'
const nvigator=createStackNavigator({
  Search:SearchScreen,
  ResultShow:ResultShow
}, 
{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(nvigator)