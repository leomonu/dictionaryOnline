import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import db from './config';
import {Header} from 'react-native-elements';
export default class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      word:'',
      lexicalCategory:'',
      definition:'',
      isSearchedPressed:false,
      text:''
    }
  }
  getWord= async(word)=>{
    var searchKeyword = word.toLowerCase()
    await db.ref('dictionary/'+searchKeyword).on('value',(data)=>{
      var response = data.val();
      this.setState({
        word:response.word,
        lexicalCategory:response.lexicalCategory,
        definition:response.definition     
       })
    })
    
}
  render(){
  return (
    <View>
      <Header
          backgroundColor={'yellow'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: 'blue', fontSize: 20, fontWeight: 'bold' },
          }}
        />
        <TextInput 
           style = {styles.inputBox}
           onChangeText = {text=>{
             this.setState({
               text:text,
               
               word:'Loading...',
               lexicalCategory:'',
               
               definition:'',

             })
           }}     
           value = {this.state.text}
        />
      <TouchableOpacity
      style = {styles.searchButton}
      onPress = {()=>{this.getWord(this.state.text)}
        
      }
      >
        <Text style = {styles.textStyle}> Search</Text>
      </TouchableOpacity>
      <View>
      <Text style = {styles.textStyle}>
        word:{this.state.word}
        
      </Text>
      <Text style = {styles.textStyle}>
      lexicalCategory:{this.state.lexicalCategory}
      </Text>
      <Text style = {styles.textStyle}> 
        Definition:{this.state.definition}
      </Text>
      
      </View>
      
    </View>
  );
  }

}
const styles = StyleSheet.create({
  inputBox: {
    marginTop: 60,
    width: '80%',
    borderWidth: 4,
    alignSelf: 'center',
    textAlign: 'center',
    outline: 'none',
    height: 40,
  },
  searchButton:{
    width:100,
    height:50,
    backgroundColor:'blue',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:10
  },
  textStyle:{
    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
    justifyContent:'center'
  }
  
})


