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
                <Text style={ComponentTheme.textOnItem} >Market</Text>
                <Text style={ComponentTheme.textOnItem} >Volume</Text>
                <Text style={ComponentTheme.textOnItem} >Change</Text>
                <Text style={ComponentTheme.textOnItem} >Last Price</Text>
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