import React , {Component} from "react"
import {Text, View} from "react-native"

export default class Profile extends Component{
  render(){
    return(
      <View style= {{ flex:1, backgroundColor:'blue', alignContent:'center', justifyContent:'center'}}>
      <Text style={{alignSelf:'center'}}>
      This your Profile :D 
      </Text>
      </View>
    )
  }
}