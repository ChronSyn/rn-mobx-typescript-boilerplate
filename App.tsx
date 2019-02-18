/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */


import React, {Component} from 'react';
import { Provider, inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";

import AppNavigator from './src/navigators';
import demoStore from './src/stores/demostore';
import { colors } from "./src/constants/colors";

@inject("demoStore")
@observer
class RootContainer extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>     
        <AppNavigator demoStore={demoStore} />
      </ThemeProvider>
    );
  }
}

@observer
class App extends Component {
  render() {
    return (
      <Provider demoStore={demoStore}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;