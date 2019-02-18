import React, {Component} from 'react';
import { inject, observer } from "mobx-react";
import {Text, View, TouchableOpacity, Image} from 'react-native';

import DemoStatefulComponent from '../../components/DemoStatefulComponent/DemoStatefulComponent';

import styles from '../../constants/styles';

type Props = {
  demoStore: any;
  navigation: any;
};

@inject("demoStore")
@observer
class RootContainer extends Component <Props>{

  render() {
    return (
      <View style={styles.container}>
        <Image source={ require('../../../assets/img/Glados.png')} />
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
          <DemoStatefulComponent demoStore={this.props.demoStore} />
          <TouchableOpacity onPress={()=>{ this.props.demoStore.increaseDemoNumber() }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.instructions}>(This screen is DemoScreen.tsx)</Text>
      </View>
    );
  }
}

export default RootContainer;

