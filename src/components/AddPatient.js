import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'
import {Form, Label, Item, Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {BackHandler, Modal, StyleSheet, TouchableHighlight, View } from 'react-native';
import {connect} from 'react-redux'
import {addPatient,
        addPatientVisit,
        removePatient} from '../store/actions/patientActions'

class AddPatient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        };
    }
    _handleSubmit = () => {
        this.props.addPatient({
            name: this.state.name,
            phone: this.state.phone,
            ind: this.props.ind
        })
        this.setState({name:'', phone: ''})
    }
    render() {
        return (
                <Container style={styles.container}>
                    <Content style={{flex: 1}}>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label style={{color: '#09f'}}>Name</Label>
                            <Input 
                                value={this.state.name}
                                onChange={ev => this.setState({name: ev.nativeEvent.text})}
                                style={{color: '#333'}}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color: '#09f'}}>Phone No.</Label>
                            <Input 
                                value={this.state.phone}
                                onChange={ev => this.setState({phone: ev.nativeEvent.text})}
                                style={{color: '#333'}}
                            />
                        </Item>
                    </Form>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full
                                onPress={this._handleSubmit}
                                style={{ backgroundColor: '#09f'}}
                            >
                            <Text>Add</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
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
mapStateToProps = (state) => ({
  ind:  state.patients.lenght
})
mapDispatchToProps = (dispatch) => ({
  addPatient      : (data) => {dispatch(addPatient(data))}
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient)