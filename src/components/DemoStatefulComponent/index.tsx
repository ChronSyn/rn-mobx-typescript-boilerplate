import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { observer } from "mobx-react";

import styles from '../../constants/styles';

type Props = {
  demoStore?: any;
};

@observer
class DemoStatefulComponent extends Component <Props>{
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.welcome}>Demo number: { this.props.demoStore.demoNumber }</Text>
      </View>
    );
  }
}

export default DemoStatefulComponent;