import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';



export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      numero:0,
      botao: 'START'
    };
    //variavel do timer do relógio
    this.timer = null;

    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }
  start(){
    let state = this.state;

    if(this.timer != null){

      //aqui para o timer 
      clearInterval(this.timer);
      this.timer = null;

      state.botao = "START";

    }else{

      //começa a girar o timer !
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      // tempo em milesegundos
      },100);
      state.botao = "PAUSE"
    }
    this.setState(state);
  }

clear(){

  if(this.timer != null){

    //aqui para o timer 
    clearInterval(this.timer);
    this,timer = null;
}
  let state = this.state;
  state.numero = 0;
  state.botao = "START"
  this.setState(state);
}

  render() {

    return (
      <View style={styles.container}>

        <Image source={require('./src/cronometro.png')} />
        <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.start}>
            <Text style={styles.btnTexto}> {this.state.botao} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.clear}>
            <Text style={styles.btnTexto}> CLEAR </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#00aeef'
  },
  timer:{
    marginTop:-160,
    color:'#FFFFFF',
    fontSize:70,
    fontWeight:'bold',
  },
  btnArea:{
    flexDirection:'row',
    marginTop:70,
    height:40 
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    height:40,
    margin:17,
    borderRadius:9
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  }
  

});
