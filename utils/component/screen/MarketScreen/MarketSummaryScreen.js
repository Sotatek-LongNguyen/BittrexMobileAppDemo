import React, { Component } from 'react';
import USDScreen from '../MarketScreen/CoinScreen/USDScreen';
import BTCScreen from '../MarketScreen/CoinScreen/BTCScreen';
import ETHScreen from '../MarketScreen/CoinScreen/ETHScreen';
import USDTScreen from '../MarketScreen/CoinScreen/USDTScreen';

import { TabNavigator } from 'react-navigation';

const ScrNavigate = new TabNavigator({
    USD: {
        title: 'USD',
        screen: USDScreen,
    },

    BTC: {
        title: 'BTC',
        screen: BTCScreen,
    },

    ETH: {
        title: 'ETH',
        screen: ETHScreen,
    },

    USDT: {
        title: 'USDT',
        screen: USDTScreen,
    }

});

export default ScrNavigate;