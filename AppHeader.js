import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
          <Text style={styles.text}>Buzz App</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1aedad',
  },

  text: {
    alignSelf: 'center',
    fontFamily: 'times',
    fontWeight: 'bold',
    fontSize: 22,    
    marginTop: 20
  },
});
