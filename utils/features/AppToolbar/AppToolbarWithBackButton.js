import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    Text
} from 'react-native';

export default class AppToolbarWithBackButton extends Component {

    render() {
        return (
            <View style={AppToolbarTheme.mainAppToolbarContainer}>
                <StatusBar backgroundColor='#1976D2'/>
                <TouchableOpacity onPress={this.props.onClickBackButton}>
                    <View>
                        <Image
                            style={{ height: 30, width: 30, marginLeft: 10 }}
                            source={require('../../../drawables/ic_action_arrow_back_white.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={AppToolbarTheme.titleText}>Details of {this.props.title}</Text>
            </View>
        );
    }

}

const AppToolbarTheme = StyleSheet.create({
    mainAppToolbarContainer: {
        backgroundColor: '#2096F4',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    },

    titleText: {
        color: 'white',
        marginLeft: 15,
        fontSize: 19,
    }
});