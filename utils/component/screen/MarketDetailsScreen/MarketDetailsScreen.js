import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import AppToolbarWithBackButton from '../../../features/AppToolbar/AppToolbarWithBackButton'
import OverviewScreen from './OverviewScreen';
import MarketHistorySell from './MarketHistorySell';
import MarketHistoryBuy from './MarketHistoryBuy';

const NavigationScreen = new TabNavigator({
    OverviewScreen: {
        screen: OverviewScreen,
        navigationOptions: {
            title: 'Overview',
            header: ({ params }) => {
                visible: false
            },
        }
    },

    MarketHistorySell: {
        screen: MarketHistorySell,
        navigationOptions: {
            title: 'Sell History',
            header: ({ params }) => {
                visible: false
            },
        }
    },

    MarketHistoryBuy: {
        screen: MarketHistoryBuy,
        navigationOptions: {
            title: 'Buy History',
            header: ({ params }) => {
                visible: false
            },
        }
    }

});

export default class Overview1 extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppToolbarWithBackButton
                    title={this.props.navigation.state.params.coin}
                    onClickBackButton={() => this.props.navigation.goBack()} />
                <NavigationScreen screenProps={this.props.navigation.state} />
            </View>

        );
    }
}


