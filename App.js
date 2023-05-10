/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import{View,Text,StyleSheet, SafeAreaView,Image}from 'react-native'
import colors from "./colors";
import Feather from 'react-native-vector-icons/Feather';
import categoriesData from '../assets/data/categoriesData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons'
import  popularData from "../assets/data/popularData"
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
const Profile=()=>{
          const renderCategoriesItem=({item}) =>{
               return(
                    <View style={styles.categoriesItemWrapper}>
                            <Image source={item.image} style={styles.categoriesItemImage}/>
                            {/* <MaterialCommunityIcons name="favorite" size={24} style={styles.categoriesMaterialHeartIcon}/> */}
                            <View style={styles.categoriesTextWrapper}>
                            <Text style={styles.categoriesItemTitel}>{item.title}</Text>
                            <Text style={styles.categoriesItemPrice}>{item.price}</Text>
                            <View style={styles.categoriesItemView}>
                            <Feather name="map-pin" size={10} color={colors.textLight} style={styles.categoriesItemFeatherIcon}/>
                            <Text style={styles.categoriesItemLocation}>{item.location}</Text>
                            </View>
                            <View style={styles.categoriesWrapperView}>
                              <Feather name='layout' size={10} style={styles.categoriesItemFeatherIconArea}/>
                            <Text style={styles.categoriesItemArea}>{item.Area}</Text>
                            <View style={styles.Wrapper}>
                            <View style={styles.Line}>
                              
                            </View>
                            </View>
                            </View>
                            
                            <View style={{flexDirection:'row',marginLeft:20}}>
                            <MaterialCommunityIcons name='hotel' size={20}  style={styles.categoriesHotelIcon}/>
                            <Text style={{color:colors.primary,paddingLeft:7,marginTop:4,fontWeight:'bold'}}>2Beds</Text>
                            <MaterialCommunityIcons name='bathtub' size={20}  style={styles.categoriesBathTubIcon}/>
                            <Text  style={{color:colors.primary,paddingLeft:7,marginTop:4,fontWeight:'bold'}}>2Baths</Text>
                            <Icon name='car' size={20} style={styles.categoriesCarIcon}/>
                            <Text  style={{color:colors.primary,paddingLeft:7,marginTop:4, fontWeight:'bold',}}>1Parking</Text>
                            </View>
                            </View>
                    </View>
               )     
          }
          return(
                    <View style={styles.Container}>
                    <SafeAreaView>
                    <View style={styles.headerwrapper}>
                              <Feather name="arrow-left" size={24} color={colors.textDark}/>
                              <Text style={styles.Heading}>Favorite Properties</Text>        
                    </View>
                    </SafeAreaView>

                    {/* {Buliding-categories} */}
                    <View style={styles.categoriesWrapper}>
                    <View style={styles.categoriesListWrapper}>
                              <FlatList 
                              data={categoriesData} renderItem={renderCategoriesItem} keyExtractor={item=>item.id} />
                    </View>
                    </View>
</View>
          )
}

const styles=StyleSheet.create({
          Container:{
                    flex:1,
          },
          headerwrapper:{
                    flexDirection:"row",
                    justifyContent:"space-between",   
                    paddingHorizontal:20,
                    marginTop:10,        
          },
          Heading:{
                    marginRight:95,
                    color:colors.primary,
                    fontSize:25,
                    fontWeight:'bold'
          },
          categoriesWrapper:{
                    marginTop:30,
          },
         categoriesItemWrapper:{
         // backgroundColor:'#F5CA48',
           borderRadius:20, 
     },
     categoriesItemImage:{
          width:380,
          height:200,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          marginHorizontal:20,
          marginTop:20
     },
     categoriesItemPrice:{
          color:colors.textDark,
          fontSize:20,
          fontWeight:'bold',
          marginHorizontal:30,
     },
     categoriesItemLocation:{
          color:colors.textLight,
          fontSize:15,
          marginTop:3,
          fontWeight:'bold',
     },
     categoriesItemArea:{
          flexDirection:'row',
          textAlign:'center',
          // marginLeft:270,
          marginBottom:15,
          fontWeight:'bold',
          color:colors.textLight
     },
     PopularWrapper:{
          paddingHorizontal:20
     },
     categoriesTextWrapper:{
          backgroundColor:colors.white,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
          height:120,
          width:380,
          marginHorizontal:20,
          shadowColor:colors.black,
              shadowOffset:{
                     width:0,
                     height: 2,
              },
              shadowOpacity:0.05,
              shadowRadius:10,
              elevation:2,
          
     },
     categoriesItemView:{
          flexDirection:'row'
     },
     categoriesItemFeatherIcon:{
          paddingLeft:30,
          marginTop:5,
          fontWeight:'bold',
          color:colors.textLight     
 },
 categoriesWrapperView:{
     flexDirection:'row'
 },
 categoriesItemFeatherIconArea:{
     marginLeft:270,
     marginTop:3,
     fontWeight:'bold',
     color:colors.textLight
 },
 categoriesMaterialHeartIcon:{
     color:'red',
     marginLeft:325,
     borderRadius:40,
     backgroundColor:'white'
 },
 categoriesCarIcon:{
     paddingLeft:67,
     color:colors.primary
 },
 categoriesHotelIcon:{
     paddingLeft:10,
     color:colors.primary
 },
 categoriesBathTubIcon:{
     paddingLeft:67,
     color:colors.primary,
    
 },
 Line:{
     flex:1,
     marginleft:10,
     borderBottomColor:'black',
     borderBottomWidth:1,
 }
})
export default Profile;