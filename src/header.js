import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const Header = () => {
  return (
    <View  style={styles.header}>
        <Text style={styles.hdrtxt}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    header: {
        width:'100%',
        height:'10%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee'
    },
    hdrtxt: {
        fontSize : 20,
        color:'black',
        fontWeight:'bold',
    }
})

export default Header;