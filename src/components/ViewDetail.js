import React from 'react'
import {Form, Label, Item, Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem} from 'native-base';
import {Modal, StyleSheet, View } from 'react-native';
import {connect} from 'react-redux'
import LeftBtn from './LeftBtn'
import {PatientActions} from '../store/actions'

class ViewDetaile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            el: props.patients[props.navigation.state.params.ind]
        }
    }
    componentWillReceiveProps(nextProps){
        // alert('NewProps view detail', nextProps)
        this.setState({
            patients: nextProps.patients[this.props.navigation.state.params.ind]
        })
    }
    _handleDelete =() => {
        console.log(this.props.navigation.state.params.ind)
        this.props.removePatient({id: this.props.patients[this.props.navigation.state.params.ind]._id})
        console.log(this.props)
        this.props.navigation.goBack()
    }
    _handleAdd =() => {
        console.log(this.props)
        this.props.navigation.navigate('AddVisit', this.props.navigation.state.params)
    }
    render(){
        // console.log(this.props.navigation.state.params.ind)
        // console.log(this.props.patients[this.props.navigation.state.params.ind])
        // el = this.props.patients[this.props.navigation.state.params.ind]
        return(
            <Container style={styles.container}>
                <Content style={{flex: 1}}>
                    <List>
                        {this.state.el && this.state.el.visits && this.state.el.visits.map((ele, key) => {
                            let date = new Date(ele.date);
                            date = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
                            return(
                                <ListItem key={key}>
                                    <Body>
                                        <Text>{ele.pCase}</Text>
                                        <Text note>{ele.treat}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{date}</Text>
                                    </Right>
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
                <Footer>
                    <FooterTab>
                        {/* <LeftBtn onSubmit={this.props.addPatientVisit} ind={0} />  */}
                        <Button onPress={this._handleAdd} primary>
                            <Icon active name="add" />
                        </Button>
                        <Button danger onPress={this._handleDelete}>
                            <Icon active name="trash" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>

        )
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

mapStateToProps = (state) => ({
  patients:  state.patients
})
mapDispatchToProps = (dispatch) => ({
  addPatientVisit : (ind, data) => {dispatch(PatientActions.addPatientVisit(ind, data))},
  removePatient   : (ind) => {dispatch(PatientActions.removePatient(ind))}
})


export default connect(mapStateToProps, mapDispatchToProps)(ViewDetaile)