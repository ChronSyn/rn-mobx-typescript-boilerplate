// import React, { Component } from "react";
// import { View, Text, Button } from "react-native";
// import CounterStore from "../../store/counterstore";
// import { observer, inject } from "mobx-react";

// interface props {
//   counterStore: CounterStore;
//   navigation: any;
// }

// @inject("counterStore")
// @observer
// class Profile extends Component<props, {}> {
//   static navigationOptions = {
//     title: "Profile"
//   };

//   render() {
//     return (
//       <View
//         style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
//       >
//         <Text style={{ alignSelf: "center", fontSize: 40 }}>
          
//           Counter value {this.props.counterStore.counter}{" "}
//         </Text>
//         <Button
//           onPress={this.props.counterStore.decrement}
//           title="Decrement "
//         />
//         <Button
//           onPress={()=>{this.props.navigation.goBack()}}
//           title="Go back "
//         />
//       </View>
//     );
//   }
// }

// export default Profile;


import React, {Component} from 'react';
import { inject, observer } from "mobx-react";
import {Text, View, TouchableOpacity, Image} from 'react-native';

import DemoStatefulComponent from '../../components/DemoStatefulComponent';

import styles from '../../constants/styles';

interface Props {
  demoStore: any;
  navigation: any;
};

@inject("demoStore")
@observer
class DemoScreen extends Component <Props, {}>{

  render() {
    return (
      <View style={styles.container}>
        <Image source={ require('../../../assets/img/Glados.png')} />
        <Text style={styles.instructions}>This was a triumph! I'm making a note here - "Huge success". It's hard to overstate my satisfaction!</Text>
        <TouchableOpacity onPress={() => this.props.demoStore.updateDemoString(`I'm still working on it.`)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.demoStore.demoString}</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.props.demoStore.decreaseDemoNumber}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </View>
          </TouchableOpacity>
          <DemoStatefulComponent demoStore={this.props.demoStore} />
          <TouchableOpacity onPress={this.props.demoStore.increaseDemoNumber}>
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

export default DemoScreen;