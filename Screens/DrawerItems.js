import React, { useState } from "react";
import { View,StyleSheet, Button} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Avatar,  Title, Caption,  Paragraph, Drawer,  TouchableRipple, Switch,Text } from 'react-native-paper';

import { DrawerContentScrollView,
    DrawerItem,
     } from '@react-navigation/drawer';
export default function DrawerItems(props){

    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
        <View style = {styles.drawerContent}>

        <View Style = {styles.UserInfoSection}>
        <View style = {{flexDirection:"row", marginTop:15, marginLeft:15}}>
            <Avatar.Image
                // source={{uri:""}}
                size={70}
            />
        
        <View style ={{marginLeft:15}}>
            <Text style={{fontSize:30}}>Profile</Text>
        <Title style = {styles.title}>Akinyi</Title>
        <Caption style = {styles.caption}> 16 </Caption>
        </View>
        </View>
        </View>
        </View>

        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
            icon={({color,size}) =>(
                <Icon name="lock"
                color={color}
                size={size}/>
            )}
            label="Log out"
            onPress={()=>{}}></DrawerItem>

        </Drawer.Section>
            
        </View>
    )
}
const styles =StyleSheet.create({
    drawerContent:{
        flex:1,},UserInfoSection:{paddingLeft:20, },

    title:{
        fontSize:16,marginTop:3,fontWeight:"bold",
    },
    caption:{
        fontSize:14,lineHeight:14,},
    row:{
        marginTop:20,flexDirection:'row', alignItems:"center",},
    section:{
        flexDirection:"row",alignItems:"center",marginRight:15, },
    paragragh:{
        fontWeight:"bold", marginRight:3, },
    drawerSection:{
        marginTop:15,},
    bottomDrawerSection:{
        marginBottom:15, borderTopColor:"#f4f4f4", borderTopWidth:1},
    preference:{
        flexDirection:"row",justifyContent:"space-around",paddingVertical:12,paddingHorizontal:16,},
})

