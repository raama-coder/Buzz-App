import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppHeader from "../AppHeader"

export default class IN extends React.Component  {
  render(){
  return (
    <View>
    <AppHeader/>
    <Text style={styles.container}>Welcome to Instagram</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft:100,
    marginTop:200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});