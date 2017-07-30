import React, { Component } from 'react';
import {SwipeRow ,Item, Input, Container, Header, View, Card, CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {connect} from 'react-redux'
import {StyleSheet} from 'react-native'
import AddPatient from './AddPatient'
import LeftBtn from './LeftBtn'
import {addPatient,
        addPatientVisit,
        removePatient} from '../store/actions/patientActions'
import SwiperBody from './SwiperBody'

class App extends Component {
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
  componentWillReceiveProps(nextProps){
    console.log('NewProps', nextProps)
    this.state.patients = nextProps.patients
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{width: '100%'}} searchBar rounded>
          <Item style={{width: '100%'}}>
            <Icon style={{color: '#44f'}} name="ios-search" />
            <Input placeholderTextColor="#44f" 
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.nativeEvent.text
                })
              }}
              style={{height: '100%', color: '#44f'}} placeholder="Search" />
            <Icon style={{color: '#44f'}} name="ios-people" />
            {/* <Button style={{height: '100%'}} transparent>
              <Text>Search</Text>
            </Button> */}
          </Item>
        </Header>
        <Content style={{backgroundColor: '#efefef'}}>
          {/* <Text>{JSON.stringify(this.state.patients.filter(this.findByName))}</Text> */}
            {this.state.patients.filter(this.findByName).map((el, ind) => (
              <SwipeRow
                key={ind} 
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                  <LeftBtn onSubmit={this.props.addPatientVisit} ind={ind} />
                }
                body={
                  <SwiperBody el={el}/>
                }
                right={
                  <Button danger onPress={this.props.removePatient.bind(null, ind)}>
                    <Icon active name="trash" />
                  </Button>
                }
              />
            ))}
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          <AddPatient ind={this.state.patients.length} addPatient={this.props.addPatient}  />
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

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

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: '#F5FCFF',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
          {/* <SwipeRow
            style={{width: '100%'}}
            rightOpenValue={-350}
            body={
              <Item style={{width: '100%',block: 1, backgroundColor: 'red'}}>
                <Icon style={{color: '#fff'}} name="ios-search" />
                <Input placeholderTextColor="#fff" style={{height: '100%', color: '#fff'}} placeholder="Search" />
                <Icon style={{color: '#fff'}} name="ios-people" />
                <Button style={{height: '100%'}}>
                  <Text>Search</Text>
                </Button>
              </Item>
            }
            right={
                <Item style={{width: '100%'}}>
                  <Icon style={{color: '#fff'}} name="ios-search" />
                  <Input placeholderTextColor="#fff" style={{height: '100%', color: '#fff'}} placeholder="Search" />
                  <Icon style={{color: '#fff'}} name="ios-people" />
                  <Button style={{height: '100%'}}>
                    <Text>Search</Text>
                  </Button>
                </Item>
            }
          /> */}