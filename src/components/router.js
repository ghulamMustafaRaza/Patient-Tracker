import React from 'react';
import {Icon, Container} from 'native-base'
import {TabNavigator, StackNavigator} from 'react-navigation'
import Home from './Home' 
import AddPatient from './AddPatient' 
import ViewDetail from './ViewDetail'
import {Text} from "react-native"
import AddVisit from "./AddVisit"
// const AddVisit = props => (
//     <Text>{JSON.stringify(props)}</Text>
// )

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'List Of Patients'
        }
    },
    ViewDetail: {
        screen: ViewDetail,
        navigationOptions: ({navigation}) =>({
            title: `Data of ${navigation.state.params.name.toUpperCase()}` 
        })
    },
    AddVisit: {
        screen: AddVisit,
        navigationOptions: ({navigation}) =>({
            title: `Add Visit of ${navigation.state.params.name.toUpperCase()}` 
        })
    }
})

export const Tabs = TabNavigator({
    Home:{
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'List',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={38} color={tintColor}/>
        },
    },
    AddPatient:{
        screen: () => (<Container><AddPatient/></Container>),
        navigationOptions: {
            tabBarLabel: 'Add A Patient',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={38} color={tintColor}/>
        },
    }
})