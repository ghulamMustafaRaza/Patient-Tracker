import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'
import {Button, Text} from 'native-base'
import {StyleSheet, View } from 'react-native';

export default class AddPatient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            treat: '',
            pCase: ''
        };
    }
    _handlePress = (user) => {
        this.props.navigation.navigate('ViewDetail', user)
    }
    render() {
        let el = this.props.el;
        return (
            <View>
                <Button onPress={() => {this.props.navigation.navigate('ViewDetail', el)}} primary full>
                    <Text>
                      Name: {el.name} Phone: {el.phone}
                    </Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F5FCFF',
    },
    form: {
        width: '90%',
        flex: 1,
        alignSelf: 'center'
    },
    label: { backgroundColor: '#f55'}
})
