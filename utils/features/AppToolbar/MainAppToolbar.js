import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    Text
} from 'react-native';

export default class MainAppToolbar extends Component {

    render() {
        return (
            <View style={AppToolbarTheme.mainAppToolbarContainer}>
                <StatusBar backgroundColor='#1976D2'/>
                <Text style={AppToolbarTheme.titleText}>{this.props.title}</Text>
                <TouchableOpacity onPress={this.props.onPressSearchItem}>
                    <View>
                        <Image
                            style={{ height: 30, width: 30, marginRight: 13 }}
                            source={require('../../../drawables/ic_action_search.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

const AppToolbarTheme = StyleSheet.create({
    mainAppToolbarContainer: {
        backgroundColor: '#2096F4',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    titleText: {
        color: 'white',
        marginLeft: 15,
        fontSize: 19,
    }
});