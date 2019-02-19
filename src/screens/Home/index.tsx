// import React, { Component } from "react";
// import { Text, View, TouchableOpacity, Button } from "react-native";
// import { observer, inject } from "mobx-react";
// import CounterStore from "../../store/counterstore";

// interface props {
//   counterStore: CounterStore;
//   navigation: any;
// }

// @inject("counterStore")
// @observer
// class Home extends Component<props, {}> {
//   static navigationOptions = {
//     title: "Home"
//   };

//   render() {
//     console.log(this.props);
//     const { counterStore, navigation } = this.props;
//     return (
//       <View
//         style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
//       >
//         <Text
//           style={{
//             alignSelf: "center",
//             fontSize: 40
//           }}
//         >
//           Home {counterStore.counter}
//         </Text>
//         <Button title="Increment" onPress={counterStore.increment} />
//         <Button
//           title="Go to profile"
//           onPress={() => {
//             navigation.navigate("Profile");
//           }}
//         />
//       </View>
//     );
//   }
// }

// export default Home;


import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { inject, observer } from "mobx-react";

import styles from '../../constants/styles';

interface Props {
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

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DemoScreen')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go to the demo screen (change state there)</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;