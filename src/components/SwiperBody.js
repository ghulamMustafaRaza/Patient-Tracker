import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'
import {Form, Label, Item, Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem} from 'native-base';
import {Modal, StyleSheet, TouchableHighlight, View } from 'react-native';

export default class AddPatient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            treat: '',
            pCase: ''
        };
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    _handleSubmit = () => {}
    render() {
        let el = this.props.el;
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
                            Data Of Patient {el.name}
                        </Title>
                    </Header>
                    <Content style={{flex: 1}}>
                        <List>
                            {el.visits && el.visits.map((ele, key) => {
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
                        <Button onPress={() => {
                                this.setModalVisible(false)
                            }}
                            danger
                        >
                        <Text>Close</Text>
                        </Button>
                    </FooterTab>
                    </Footer>
                </Container>
                </Modal>
                <Button style={{minHeight: '100%', backgroundColor: "#fff"}} full onPress={() => {
                        this.setModalVisible(true)
                    }}>
                    <Text style={{color: '#008b8b'}}>
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
