import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import {Button} from 'native-base'
export default class ModalExample extends Component {

  state = {
    modalVisible: false,
  }


  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>
        <Button onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </Button>

      </View>
    );
  }
}