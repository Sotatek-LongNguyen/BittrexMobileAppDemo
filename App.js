import React, { Component } from 'react';
import {
  StyleSheet, View, Text, ToolbarAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MarketSummaryScreen from './utils/component/screen/MarketScreen/MarketSummaryScreen';
import SearchScreen from './utils/component/screen/SearchScreen';
import MarketDetailsScreen from './utils/component/screen/MarketDetailsScreen/MarketDetailsScreen';
import MainAppToolbar from './utils/features/AppToolbar/MainAppToolbar';
import Navigator from './utils/features/Navigator'

class MainScrApp extends Component {

  constructor() {
    super();
    this.props = {
      context: this,
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainAppToolbar
          onPressSearchItem={() => this.props.navigation.navigate('SearchScreen')}
          title='Bittrex' />
        <MarketSummaryScreen />
      </View>

    );
  }
}

const NavToScr = new StackNavigator({
  MainScrApp: {
    screen: MainScrApp,
    navigationOptions: {
      header: ({ params }) => {
        visible: false
      }
    }
  },

  MarketDetailsScreen: {
    screen: MarketDetailsScreen,
    navigationOptions: {
      header: ({ params }) => {
        visible: false
      }
    }
  },

  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      header: ({ params }) => {
        visible: false
      }
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <NavToScr ref={navigatorRef => {
        Navigator.setTopLevelNavigator(navigatorRef);
      }} />
    );
  }
};