import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { inject, observer } from "mobx-react";

import styles from '../../constants/styles';

type Props = {
  demoStore: any;
  navigation: any;
};

@inject("demoStore")
@observer
class HomeScreen extends Component <Props>{
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>HomeScreen.tsx</Text>
        <Text>Demo number: { this.props.demoStore.demoNumber }</Text>

        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate('Demo')
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go to the demo screen (change state there)</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;