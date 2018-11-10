import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class MarketSummaryListItem extends Component {
    render() {
        return(
            <View style={ComponentTheme.mainView}>
                <Text style={ComponentTheme.textOnItem} >Time</Text>
                <Text style={ComponentTheme.textOnItem} >Bid/Ask</Text>
                <Text style={ComponentTheme.textOnItem} >Total Units</Text>
                <Text style={ComponentTheme.textOnItem} >Total Cost</Text>
            </View>
        );
    }
}

const ComponentTheme = StyleSheet.create({
    mainView: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#59b3ff',
        height: 40,
        justifyContent: 'space-between',
    },

    textOnItem: {
        flex: 1,
        color: 'white',
        textAlignVertical: 'center',
    }
});