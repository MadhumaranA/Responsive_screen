import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const Boxes = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
               <Text>Box 1</Text>
          </View>
       </View>   
       <View style={styles.boxContainer}>
          <View style={styles.box}>
               <Text>Box 2</Text>
          </View>
       </View> 
       <View style={styles.boxContainer}>
          <View style={styles.box}>
               <Text>Box 3</Text>
          </View>
       </View> 
       <View style={styles.boxContainer}>
          <View style={styles.box}>
               <Text>Box 4</Text>
          </View>
       </View> 
         
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        width:'100%',
        height:'90%',
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap'

    },
    boxContainer: {
        width:'50%',
        height:'50%',
        padding:5,

    },
    box: {
        flex:1,
        backgroundColor:'#eee',
        alignItems:'center',
        justifyContent:'center',

    }
    
})

export default Boxes;