import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'
import {Form, Label, Item, Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Modal, StyleSheet, TouchableHighlight, View } from 'react-native';

export default class AddPatient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            name: '',
            phone: ''
        };
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    _handleSubmit = () => {
        this.props.addPatient({
            name: this.state.name,
            phone: this.state.phone,
            ind: this.props.ind
        })
        this.setState({name:'', phone: ''})
        this.setModalVisible(false)
    }
    render() {
        return (
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={()=>{}}
                >
                <Container style={styles.container}>
                    <Header style={{width: '100%'}}>
                        <Title>
                            Add
                        </Title>
                    </Header>
                    <Content style={{flex: 1}}>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label style={{color: '#00f'}}>Name</Label>
                            <Input 
                                value={this.state.name}
                                onChange={ev => this.setState({name: ev.nativeEvent.text})}
                                style={{color: '#333'}}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color: '#00f'}}>Phone No.</Label>
                            <Input 
                                value={this.state.phone}
                                onChange={ev => this.setState({phone: ev.nativeEvent.text})}
                                style={{color: '#333'}}
                            />
                        </Item>
                        {/* <DatePicker
                            style={{width: '100%'}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys. 
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        /> */}
                    </Form>
                    </Content>
                    <Footer>
                    <FooterTab>
                        <Button full
                            onPress={this._handleSubmit}
                            style={{ backgroundColor: '#383'}}
                        >
                        <Text>Add</Text>
                        </Button>
                        <Button onPress={() => {
                                this.setModalVisible(false)
                            }}
                            style={styles.label}
                        >
                        <Text>Close</Text>
                        </Button>
                    </FooterTab>
                    </Footer>
                </Container>
                </Modal>
                <Button onPress={() => {
                        this.setModalVisible(true)
                    }}
                    style={{ backgroundColor: '#5067FF', flex: 1, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Text style={{fontSize: 30}}>+</Text><Text>Add Patient</Text>
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
