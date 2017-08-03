import React, { Component } from 'react';
import {Tabs} from './router'
import {Container} from 'native-base'

class App extends Component {
  render() {
    return (
      <Container style={{width: '100%', height: '100%'}}>
        <Tabs/>
      </Container>
    );
  }
}

export default App
