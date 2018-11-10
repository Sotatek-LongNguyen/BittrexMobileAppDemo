import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    StatusBar,
    FlatList,
    ActivityIndicator
} from 'react-native';

import DataUtlis from '../../features/DataUtils';
import MarketSummaryListItem from '../featComponent/MarketSummaryListItem';
import MarketSummaryListHeader from '../featComponent/MarketSummaryListHeader';
import Navigator from '../../features/Navigator'

const ComponentTheme = StyleSheet.create({

    searchBarContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },

    iconBack: {
        margin: 10,
        width: 30,
        height: 30,
    }
});

export default class SearchScreen extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            dataAsset: [],
            coinType: this.coinType,
        }
        this.arrayDataAsset = [];
        DataUtlis.getSummaryMarketWithFilter(this, "");
    }

    componentDidMount() {
    
            DataUtlis.getSummaryMarketWithFilter(this, "");
        
    }

    _searchOnTextChange = (text) => {
        this.setState({
            isLoading: true,
            dataAsset: [],
        })
        DataUtlis.getSummaryMarketWithFilter(this, text);
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor='#757575' />
                <View style={ComponentTheme.searchBarContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Image
                            style={ComponentTheme.iconBack}
                            source={require('../../../drawables/ic_action_arrow_back_black.png')} />
                    </TouchableOpacity>
                    <TextInput
                        autoFocus={true}
                        placeholder='Type here to search...'
                        onChangeText={this._searchOnTextChange} />
                </View>
                <MarketSummaryListHeader />
                <FlatList
                    data={this.state.dataAsset}
                    renderItem={({ item }) =>
                        <MarketSummaryListItem
                            onItemClick={() => Navigator.navigate('MarketDetailsScreen', { coin: item.MarketName })}
                            marketName={item.MarketName}
                            volume={DataUtlis.RoundNumber(item.BaseVolume, 2)}
                            change='0'
                            lastPrice={item.Last.toFixed(8)} />} />
            </View>
        );
    }
}
