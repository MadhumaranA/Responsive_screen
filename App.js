import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import Header from './src/header';
import Boxes from './src/Boxes';

const App = () => {
  return (
    <View style={StyleSheet.container}>
      <Header/>
      <Boxes/>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
},
})

export default App;