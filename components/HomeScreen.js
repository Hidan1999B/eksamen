
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import {TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
           <View>
       <Text style = {styles.TextStyling}>Welcome to TouScan</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate("CamComp")}
       style = {styles.buttonDesign}>

       <Text style = {styles.TextinButton}>Go to QR-Scan</Text>
       </TouchableOpacity>

      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24A3CB',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  TextStyling: {
    fontSize: 20,
    margin: 20,
    padding: 10,
    fontWeight: 'bold',
    }, 
    buttonDesign: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      margin: 5,
      left: 50,
      borderRadius: 20,
      backgroundColor: '#EDC2D8',
    
      
    },
    TextinButton: {
      color: '#FFFF'
    }
    
})
  export default HomeScreen
