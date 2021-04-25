import React from 'react';
import { StyleSheet, View} from 'react-native';
import { createAppContainer} from "react-navigation"
import { createBottomTabNavigator} from "react-navigation-tabs"

import FB from "./screens/FB"
import IN from "./screens/IN"

export default class App extends React.Component  {
  render(){
  return (
    <View style={styles.container}>
    <AppContainer/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const Tabs=createBottomTabNavigator({
FB:{screen:FB},
IN:{screen:IN}
})

const AppContainer= createAppContainer(Tabs)
