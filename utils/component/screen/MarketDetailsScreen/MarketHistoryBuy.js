import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import MarketHistoryListHeader from './MarketHistoryListHeader';
import DataUtils from '../../../features/DataUtils';
import SellBuyListItem from './SellBuyListItem';

export default class MarketHistoryBuy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            historyData: [],
        }
    }

    componentDidMount() {
        DataUtils.getMarketHistory(this, this.props.screenProps.params.coin, 'BUY');
    }

    render() {
        return (
            <View>
                <MarketHistoryListHeader />
                <FlatList
                    data={this.state.historyData}
                    renderItem={({ item }) =>
                        <SellBuyListItem 
                        Time={DataUtils.getTimeFromTimeStamp(item.TimeStamp)}
                        AskBid={item.Price.toFixed(5)}
                        totalUnit={item.Quantity.toFixed(2)}
                        totalCost={item.Total.toFixed(6)}/>} />
            </View>
        );
    }

}