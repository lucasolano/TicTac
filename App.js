import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';



export default class App extends Component {

  render() {

    return (
      <View style={Styles.container}>

        <Image source={require('./src/cronometro.png')} />
        <Text>0.0</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    justifyContent: 'center',
    alignItens: 'center',
    backgroundColor:'#00aeef'
  },

});
