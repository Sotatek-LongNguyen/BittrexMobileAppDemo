import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
} from 'react-native';

import DataUtils from '../../../features/DataUtils';

class CoinDetails extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={CoinDetailsTheme.itemStyle} >
                    <Text style={CoinDetailsTheme.textOnItem} >Last</Text>
                    <Text style={CoinDetailsTheme.textOnItem} >{this.props.Last}</Text>
                </View>
                <View style={CoinDetailsTheme.itemStyle} >
                    <Text style={CoinDetailsTheme.textOnItem} >Bid</Text>
                    <Text style={CoinDetailsTheme.textOnItem} >{this.props.Bid}</Text>
                </View>
                <View style={CoinDetailsTheme.itemStyle} >
                    <Text style={CoinDetailsTheme.textOnItem} >Ask</Text>
                    <Text style={CoinDetailsTheme.textOnItem} >{this.props.Ask}</Text>
                </View>
                <View style={CoinDetailsTheme.itemStyle} >
                    <Text style={CoinDetailsTheme.textOnItem} >Volume</Text>
                    <Text style={CoinDetailsTheme.textOnItem} >{this.props.Volume}</Text>
                </View>
                <View style={CoinDetailsTheme.itemStyle} >
                    <Text style={CoinDetailsTheme.textOnItem} >24h High</Text>
                    <Text style={CoinDetailsTheme.textOnItem} >{this.props.High}</Text>
                </View>
                <View style={CoinDetailsTheme.itemStyle} >
                    <Text style={CoinDetailsTheme.textOnItem} >24h Low</Text>
                    <Text style={CoinDetailsTheme.textOnItem} >{this.props.Low}</Text>
                </View>
            </View>
        );
    }

}

export default class OverviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            marketSummaryData: {
                MarketName: 'Loading data. Please wait...',
            },
        }
    }

    componentDidMount() {
        DataUtils.getSpecificMarketSummary(this, this.props.screenProps.params.coin);
    }

    renderAndShowData() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1 }}>
                    <ActivityIndicator size='large' style={{ margin: 20 }}/>
                </View>
            )
        }

        return (
            <View style={ScreenTheme.containView}>
                <CoinDetails
                        Last={this.state.marketSummaryData.Last.toFixed(8)}
                        Bid={this.state.marketSummaryData.Bid.toFixed(8)}
                        Ask={this.state.marketSummaryData.Ask.toFixed(8)}
                        Volume={this.state.marketSummaryData.Volume.toFixed(8)}
                        High={this.state.marketSummaryData.High.toFixed(8)}
                        Low={this.state.marketSummaryData.Low.toFixed(8)} />
            </View>
        );
    }

    render() {
        return (
            <View style={ScreenTheme.containView}>
                <ScrollView style={{ flex: 1 }} >
                    <View style={ScreenTheme.coinOverviewTitle}>
                        <Image style={ScreenTheme.coinOverviewTitleBackground}
                            source={require('../../../../drawables/vmgyafon.png')} />
                        <Image style={{ width: 56, height: 56, marginLeft: 20 }}
                            source={require('../../../../drawables/btc-icon.png')} />
                        <Text style={{ color: 'white', marginLeft: 10 }}>{this.state.marketSummaryData.MarketName}</Text>
                    </View>
                    {this.renderAndShowData()}
                </ScrollView>

            </View>
        );
    }
}

const ScreenTheme = StyleSheet.create({

    containView: {
        flex: 1
    },

    coinOverviewTitle: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },

    coinOverviewTitleBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'stretch'
    },
});

const CoinDetailsTheme = StyleSheet.create({

    itemStyle: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textOnItem: {
        color: 'black',
        margin: 10,
    }

});