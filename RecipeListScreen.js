import React from 'react';
import {Text,View,SafeAreaView} from 'react-native';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';


export default function RecipeListScreen() {
  return (
    <SafeAreaView style={{flex:1,marginHorizontal:16}}>
      <Header headerText={"Hi, Manasi"} headerIcon={"bell-o"}/>
      <SearchFilter icon= 'search' placeholder={"Search Your Favorite Recipe"}/>
      <View>
        <Text style={{fontSize:22, fontWeight:"bold",marginTop:20}}>Categories</Text>
        <CategoriesFilter/>
      </View>
      <View style={{flex:1,marginTop:20}}>
        <Text style={{fontSize:22, fontWeight:"bold",marginTop:18}}>Recipes</Text>
        <RecipeCard/>
      </View>
    </SafeAreaView>
  )
}
