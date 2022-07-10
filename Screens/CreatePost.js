import React , {Component} from "react"
import {Text, View} from "react-native"

export default class CreatePost extends Component{
  render(){
    return(
      <View style= {{ flex:1, backgroundColor:'#0ce6f2', alignContent:'center', justifyContent:'center'}}>
      <Text style={{alignSelf:'center'}}>
      This is your Post Screen :D , Create your First Post 
      </Text>
      </View>
    )
  }
}