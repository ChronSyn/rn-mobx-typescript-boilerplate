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
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Provider, inject, observer } from "mobx-react";
import demoStore from './src/stores/demostore';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  demoStore: any;
};


@inject("demoStore")
@observer
class RootContainer extends Component <Props>{
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View style={styles.container}>
        <Image source={ require('./assets/img/Glados.png')} />
        <Text style={styles.instructions}>This was a triumph! I'm making a note here - "Huge success". It's hard to overstate my satisfaction!</Text>
        <TouchableOpacity onPress={()=>{ this.props.demoStore.updateDemoString(`I'm still working on it.`) }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.demoStore.demoString}</Text>
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>{ this.props.demoStore.decreaseDemoNumber() }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.welcome}>{ this.props.demoStore.demoNumber }</Text>
          <TouchableOpacity onPress={()=>{ this.props.demoStore.increaseDemoNumber() }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.instructions}>(To get started, edit App.tsx)</Text>
      </View>
    );
  }
}

@observer
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Provider demoStore={demoStore}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;


 /*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 12,
    margin: 10
  },
});