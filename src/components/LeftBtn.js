// import React from 'react'
// import {Icon, Button} from 'native-base'

// export default class LeftBtn extends React.Component{
//     _handelAdd = () => {
//         alert('add')
//     }
//     render(){
//         return(
//             <Button success onPress={this._handelAdd}>
//                 <Icon active name="add" />
//             </Button>
//         )
//     }
// }
import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'
import {Form, Label, Item, Input, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Modal, StyleSheet, TouchableHighlight, View } from 'react-native';

export default class AddPatient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisibleA: false,
            treat: '',
            pCase: ''
        };
    }
    setmodalVisibleA(visible) {
        this.setState({modalVisibleA: visible});
    }
    _handleSubmit = () => {
        this.setmodalVisibleA(false)
        let {treat, pCase} = this.state;
        let date = new Date();
        date.setHours(0,0,0,0)
        this.props.onSubmit(this.props.ind,{
            pCase,
            treat,
            date
        })
    }
    render() {
        return (
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisibleA}
                    onRequestClose={()=>{}}
                >
                <Container style={styles.container}>
                    <Header style={{width: '100%'}}>
                        <Title>
                            Add Pationt Visit
                        </Title>
                    </Header>
                    <Content style={{flex: 1}}>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label style={{color: '#00f'}}>Case.</Label>
                            <Input
                                multiline={true}
                                value={this.state.pCase}
                                onChange={ev => this.setState({pCase: ev.nativeEvent.text})}
                                style={{color: '#333'}}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{color: '#00f'}}>Treatment.</Label>
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
                        <Button full
                            onPress={this._handleSubmit}
                            style={{ backgroundColor: '#383'}}
                        >
                        <Text>Add</Text>
                        </Button>
                        <Button onPress={() => {
                                this.setmodalVisibleA(false)
                            }}
                            style={styles.label}
                        >
                        <Text>Close</Text>
                        </Button>
                    </FooterTab>
                    </Footer>
                </Container>
                </Modal>
                <Button style={{minHeight: '100%'}} success onPress={() => {
                        this.setmodalVisibleA(true)
                    }}>
                    <Icon active name="add" />
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
