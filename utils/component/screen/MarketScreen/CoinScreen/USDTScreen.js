import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import MarketSummaryListHeader from '../../../featComponent/MarketSummaryListHeader';
import MarketSummaryListItem from '../../../featComponent/MarketSummaryListItem';
import DataUtlis from '../../../../features/DataUtils';
import Navigator from '../../../../features/Navigator'

export default class BTCScreen extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            dataAsset: [],
            coinType: this.coinType,
        }
        this.arrayDataAsset = [];
    }

    componentDidMount() {
        
            DataUtlis.getSummaryMarketWithFilter(this, "USDT-")
        
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
                    <ActivityIndicator size='large' style={{ flex: 1 }} />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <MarketSummaryListHeader />
                <FlatList
                    data={this.state.dataAsset}
                    renderItem={({ item }) =>
                        <MarketSummaryListItem
                            onItemClick={() => Navigator.navigate('MarketDetailsScreen', { coin: item.MarketName })}
                            marketName={item.MarketName}
                            volume={DataUtlis.RoundNumber(item.BaseVolume, 2)}
                            change='0'
                            lastPrice={item.Last.toFixed(7)} />} />
            </View>
        );
    }
}