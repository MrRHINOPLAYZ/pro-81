import React , {Component} from "react"
import {Text, View} from "react-native"

export default class Feed extends Component{
  render(){
    return(
      <View style= {{ flex:1, backgroundColor:'#0098db', alignContent:'center', justifyContent:'center'}}>
      <Text style={{alignSelf:'center'}}>
      This is your Feed! :D
      </Text>
      </View>
    )
  }
}