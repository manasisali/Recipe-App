import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { categories,colors } from '../Constant'

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
            return(
                <View
                style={{
                    backgroundColor:
                     index === 0? colors.COLOR_PRIMARY: colors.COLOR_LIGHT,
                    marginRight:36,
                    borderRadius:50,
                    height:100,
                    width:100,
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:20,
                    shadowColor:"#000",
                    shadowOffset:{width:0,height:4},
                    shadowOpacity:0.1
                }}>
                    <Text
                    style={{
                        color:index ===0 && colors.COLOR_DARK,
                        fontSize:18,
                    }}>
                        {category.category}
                    </Text>
                    </View>
            );
        })}
      </ScrollView>
    </View>
  )
}

export default CategoriesFilter

const styles = StyleSheet.create({})