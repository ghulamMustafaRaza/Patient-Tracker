import React from 'react'
import {Form, Label, Item, Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem} from 'native-base';
import {Modal, StyleSheet, View } from 'react-native';
import {connect} from 'react-redux'
import LeftBtn from './LeftBtn'
import {PatientActions} from '../store/actions'

class ViewDetaile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pCase: '',
            treat: ''
        }
    }
    _handleAdd =() => {
        let {treat, pCase} = this.state;
        let date = new Date();
        date.setHours(0,0,0,0)
        this.props.addPatientVisit({
            id: this.props.patients[this.props.navigation.state.params.ind]._id,
            visit:  JSON.stringify({
                pCase,
                treat,
                date
            })
        })
        this.props.navigation.goBack()
    }
    render(){
        el = this.props.navigation.state.params
        return(
            <Container style={styles.container}>
                <Content style={{flex: 1}}>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label style={{color: '#09f'}}>Case.</Label>
                            <Input
                                multiline={true}
                                value={this.state.pCase}
                                onChange={ev => this.setState({pCase: ev.nativeEvent.text})}
                                style={{color: '#333'}}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color: '#09f'}}>Treatment.</Label>
                            <Input 
                                multiline={true}
                                value={this.state.treat}
                                onChange={ev => this.setState({treat: ev.nativeEvent.text})}
                                style={{color: '#333'}}
                            />
                        </Item>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={this._handleAdd} primary>
                            <Icon active name="add" />
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

mapDispatchToProps = (dispatch) => ({
  addPatientVisit : (ind, data) => {dispatch(PatientActions.addPatientVisit(ind, data))},
})
mapStateToProps = (store) => ({
  patients : store.patients
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewDetaile)