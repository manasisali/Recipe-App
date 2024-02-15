import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function WelcomeScreen( {navigation} ) {
  return (
    <View style={{flex:1,alignItems:'center' }}>
      <Image source={require('../../assets/images/welcome.png')}/>
      <Text style={{color:'red',fontSize:25, fontWeight:700}}>
        40k+ Premium Recipes
      </Text>
      <Text style={{fontSize:40,fontWeight:700,marginTop:40,marginBottom:40}}>
        Cook Like A Chef
      </Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("RecipeList")}
      style={{backgroundColor:'red',width:"80%",paddingVertical:20,alignItems:'center',borderRadius:10,marginTop:20}}>
        <Text style={{fontSize:20,color:'white',fontWeight:700}}>
            Let's Start
        </Text>
      </TouchableOpacity>
    </View>
  )
}