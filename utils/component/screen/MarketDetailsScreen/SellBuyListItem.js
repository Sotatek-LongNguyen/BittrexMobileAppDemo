import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class MarketSummaryListItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onItemClick}>
                <View style={ComponentTheme.mainView}>
                    <Text style={ComponentTheme.textOnItem}>{this.props.Time}</Text>
                    <Text style={ComponentTheme.textOnItem}>{this.props.AskBid}</Text>
                    <Text style={ComponentTheme.textOnItem}>{this.props.totalUnit}</Text>
                    <Text style={ComponentTheme.textOnItem}>{this.props.totalCost}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const ComponentTheme = StyleSheet.create({
    mainView: {
        padding: 10,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
    },

    textOnItem: {
        flex: 1,
        textAlignVertical: 'center',
        color: 'black'
    }
});

