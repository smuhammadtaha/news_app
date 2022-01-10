import React, { useState,useEffect } from 'react'
import { SafeAreaView, View,Text, TouchableOpacity, ScrollView, FlatList,Image, ActivityIndicator, ToastAndroid } from 'react-native'
import COLORS from '../assest/const/colors'
import Styles from '../assest/const/stylesheet'
import Icon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Newapi from '../navigation/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({navigation}) => {

    const categories = ['POPULAR','ENTERTAINMENT','SPORTS','WEATHER','BUSINESS'];
    const [jsondata, setJsonData] = useState([]); 
    const [loader,setLoader] = useState(false);
    const [saved,setSaved] = useState(false);
    const [categoryIndex,setcategoryIndex] = useState(0);
    const [savedData,SetsavedData] = useState ([]);
    const [idIndex,setidIndex] = useState(null);
    const [favorite,setFavorite] = useState(false);


    useEffect(() => {

    
        setLoader(true);
        getNewsFromApi();
      }, []);
   
    function getNewsFromApi(){
        Newapi.get('everything?q=apple&from=2022-01-08&to=2022-01-08&sortBy=popularity&apiKey=bee738a256ac45fd871d5ead7568b847')
        .then(async function (response){
            setJsonData(response.data);
            setLoader(false);
        })
        .catch(function (error) {
            alert(error)
        });
    }

    if(!jsondata){
        return null
    }

    const handleSave = async (index) =>{
        let data = jsondata.articles[index];
        setidIndex(index)
        SetsavedData([...savedData,{
            title:data.title,
            author:data.author,
            publishedAt:data.publishedAt,
            urlToImage:data.urlToImage,
        }])
        
        try{
            const val = JSON.stringify(savedData)
            await AsyncStorage.setItem('DATA',val)
            ToastAndroid.show("NEWS SAVED !",ToastAndroid.SHORT);
        } catch (e){
            ToastAndroid.show("NEWS IS NOT SAVED !",ToastAndroid.SHORT);
        }

        console.log(savedData)

    }

    const Db =() =>{
        setFavorite(true)
    }
    const long = () =>{
        setFavorite(false)
    }

    const details = (item) =>{
        setFavorite(false);
        navigation.navigate('Details',item);
    }

    return (
        <SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:COLORS.white,}}>
            
            {jsondata !== undefined ? (
                <>
            <View style={Styles.header}>
            {favorite ? (
                <View>
                    
                 <Text style={Styles.mainText}>This is our</Text>
                 <Text style={Styles.subText}>Saved News</Text>    
                    
                </View>
            ):(
                <View>
                    
                <Text style={Styles.mainText}>Welcome to</Text>
                <Text style={Styles.subText}>News App</Text>    
                   
               </View>
            )}
                <TouchableOpacity onPress={Db} onLongPress={long}>
                <Icon name='save' color={'#000'} size={28}/>
                </TouchableOpacity>
                
            </View>
            {favorite ? (
                <View style={Styles.categoryContainer}></View>
            ):(
                <View style={Styles.categoryContainer}>
                <ScrollView horizontal={true}>
    
                {categories.map((item,index)=>{
                    return(
                                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setcategoryIndex(index)}>
                                <Text style={[Styles.categoryText,categoryIndex == index && Styles.categoryTextSelected]}>
                                    {item}
                                    </Text>
                                    
                                </TouchableOpacity>
                                
                        )
                })}
                </ScrollView>
    
             </View>
            )}
           
        <View >
        
            {loader ? (
                    <View style={{justifyContent:'center',alignItems:'center',height:'100%',}}>
                    <ActivityIndicator size={80} color={COLORS.green} animating={loader}/>
                    </View>
            ):(
                
         <FlatList 

         showsVerticalScrollIndicator={false}
         keyExtractor={(item, index) => 'key' + index}
         data={favorite ? savedData:jsondata.articles}
         renderItem={({item,index})=>{
            return (
                <ScrollView style={{marginTop:10}}>
                {/* <View style={Styles.card}>
                    <View style={{alignItems:'flex-end' }}>
                        <View style={{width:30,
                                      height:30,
                                      borderRadius:15,
                                      alignItems:'center',
                                      justifyContent:'center',
                                      backgroundColor: 'rgba(0,0,0,0.4)'
        
        
                                      }}> 
                                      {like ? <MaterialIcon name='plus-box-multiple-outline' color={COLORS.light} size={18}/> :
                                      <MaterialIcon name='plus-box-multiple' color={COLORS.light} size={18}/> 
                                      }
                           
                        </View>
                    </View>
                    <View key={index} style={{height:100,alignItems:'center'}}> 
                            <Image             style={{flex:1,resizeMode:'contain',height:'100%',width:'100%'}} 
                                         source={{uri:item.urlToImage}}
                            
                            />
                           
                    </View>
                </View> */}

                    <View key={index} style={Styles.cardContainer}>
                        <View style={Styles.cardImageContainer}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => details(item)}>
                            <Image  source={{uri:item.urlToImage}} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.cardDetailsContainer}>
                                <Text
                                style={{fontWeight:'bold',color:COLORS.dark,fontSize:13,marginTop:5}}>
                                    {`Headline : ${item.title}`}
                                </Text>
                               
                            <Text style={{fontSize:10,marginTop:3,color:COLORS.dark}}>
                                {`Author: ${item.author}`}
                            </Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:10,marginTop:3,color:COLORS.dark}}>
                                {`Published at : ${item.publishedAt}`}
                            </Text>

                            <View style={{width:30,
                                      height:30,
                                      borderRadius:15,
                                      alignItems:'center',
                                      justifyContent:'center',
                                      backgroundColor: 'rgba(0,0,0,0.4)',
                                      marginRight:-10,
                                      marginTop:5
        
        
                                      }}> 
                                      <TouchableOpacity  onPress={() =>handleSave(index)}>
                                      {saved ? <MaterialIcon name='plus-box-multiple' color={COLORS.light}  size={18}/> :
                                      <MaterialIcon name='plus-box-multiple-outline'  color={COLORS.light} size={18}/> 
                                      }

                                      </TouchableOpacity>
                               
                                </View>
                            </View>
                           
                            
                        </View>
                    </View>

                </ScrollView>      

                );
                
         }}/>
         )}
         </View>
         </>
            ) : null}
        </SafeAreaView>
    )
}

export default Home
// ({item}) => <Card apiDatas={item}/>