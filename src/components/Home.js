import React, { Component } from 'react';
import {SwipeRow ,Item, Input, Container, Header, View, Card, CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {connect} from 'react-redux'
import {StyleSheet, AppRegistry} from 'react-native'
import AddPatient from './AddPatient'
import LeftBtn from './LeftBtn'
import {addPatient,
        addPatientVisit,
        removePatient} from '../store/actions/patientActions'
import SwiperBody from './SwiperBody'
import {StackNavigator} from 'react-navigation'
import {Tabs} from './router'

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      patients: (props.patients || []),
      search: ''
    }
  }
  findByName = (patient) => {
    name = patient.name;
    return name.search(this.state.search) >= 0 ? true : false 
  }
  componentDidMount(){
    console.log(this.props)
  }
  // componentWillUnmount(){
  //   alert('mounts')
  //   console.log(this.props)
  // }
  componentWillReceiveProps(nextProps){
    console.log('NewProps', nextProps)
    this.setState({
        patients: nextProps.patients
    })
  }
  render() {
    return (
      <Container style={styles.container}>
         <Header style={{width: '100%', backgroundColor: "#fff"}} searchBar rounded>
          <Item style={{width: '100%'}}>
            <Icon style={{color: '#09f'}} name="ios-search" />
            <Input placeholderTextColor="#09f" 
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.nativeEvent.text
                })
              }}
              style={{height: '100%', color: '#09f'}} placeholder="Search" />
            <Icon style={{color: '#09f'}} name="ios-people" />
          </Item>
        </Header>
        <Content style={{backgroundColor: '#efefef'}}>
            {this.state.patients.filter(this.findByName).map((el, ind) => (
                <Button key={ind} onPress={() => {this.props.navigation.navigate('ViewDetail', {...el, ind})}} primary full>
                    <Text>
                      Name: {el.name} Phone: {el.phone}
                    </Text>
                </Button>
            ))}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: '#F5FCFF',
  }
})

mapStateToProps = (...arg) => {
  console.log(arg)
  return({
  patients:  arg[0].patients
})}
mapDispatchToProps = (dispatch) => ({
  addPatient      : (data) => {dispatch(addPatient(data))},
  addPatientVisit : (ind, data) => {dispatch(addPatientVisit(ind, data))},
  removePatient   : (ind) => {dispatch(removePatient(ind))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)