import 'react-native-gesture-handler';
import  React,{useEffect, useState} from "react";
import { View, Text, Button, Image, ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native";
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const images = [
  {
    id: '586o',
    title: 'Natasha Banks',
    image: require('../media/girl5.jpg'),
    description:"Realtionships/Friends/Patner"
  },
  {
    id: '586s',
    title: 'Millan Lopez',
    image: require('../media/girl6.jpg'),
    description:"Realtionships/Friends/Patner"
  },

  {
    id: '3ac68',
    title: 'Skolastika Njeri',
    image: require('../media/girl2.jpg'),
    description:"Realtionships/Friends/Patner"
  },
  {
    id: '586d',
    title: 'Grace Tommorrow',
    image: require('../media/girl3.jpg'),
    description:"Realtionships/Friends/Patner"
  },
  {
    id: '5862',
    title: 'Fenny Wambo',
    image: require('../media/girl4.jpg'),
    description:"Realtionships/Friends/Patner"
  },

 
];


const {width,height} = Dimensions.get('window')


const HomeScreen = () => {



const [Barvisible, setBarvisible]=useState(0)


useEffect(() => {
  const timer = setTimeout(() => {
    setBarvisible(0)


  }, 4000);
  return () => {clearTimeout(timer)};
},[Barvisible]);



// useEffect(() => {
//   setTimeout(() => {
//     setBarvisible(0)
//   }, 4000);

// },[Barvisible]);

    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white', elevation:1000 }}>
      <ScrollView>
      <>
      
      {images.map (image=> (
          <View key = {image.id} style={{height:420, marginBottom:50}}>
            <TouchableWithoutFeedback onPress={()=>setBarvisible(1)}><Image source={image.image} resizeMode="cover" style={{flex:1, height:null, width:width-20, borderRadius:5,}}/></TouchableWithoutFeedback>
          <View style={{flexDirection:'row',width:width-20, height:90, backgroundColor:'white', position:'absolute', bottom:0, right:0, opacity:Barvisible,borderBottomLeftRadius:5, borderBottomRightRadius:5}}>
          <Icon style={{margin:20}} name='thumbs-up' color='red' size={30} />
          <Icon style={{margin:20}} name='heart' color='red' size={30} />
         

          </View>
          <Text style={{position:'absolute', top:4, left:10, fontWeight:"bold", flex:1, fontSize:30, color:'pink'}}>{image.title}</Text>
          <Text style={{fontSize:16, color:'black', }}>{image.description}</Text>
          </View>
        ))}
        </>
      </ScrollView>
   
      </View>
    );
  }


export default HomeScreen;


