import React from 'react'
import { Image, SafeAreaView, Text, ToastAndroid, View } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../assest/const/colors';
import Styles from '../assest/const/stylesheet';

const Details = ({navigation,route}) => {

    const item = route.params;
console.log(item.source.name)

    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.dark}}>
            <View style={Styles.detailsHeader}>
                <Icon name='arrow-left' color={COLORS.white} size={28} onPress={() => navigation.goBack()} />
            </View>
            <View style={Styles.imageContainer}>
                <Image source={{uri:item.urlToImage}} style={{height:'100%',width:'100%',resizeMode:'contain', flex:1}} />
            </View>
            <View style={Styles.detailsContainer}>
                <View style={{marginLeft:20,flexDirection:'row',alignItems:'flex-end'}}>
                    <View style={Styles.line} />
                    <Text style={{color:COLORS.dark,fontSize:18,fontWeight:'bold',}}>{`Source : ${item.source.name}`}</Text>
                </View>
                <View style={{marginLeft:20,marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{color:COLORS.dark,fontSize:20}}>{`Title : ${item.title}`}</Text>
                </View>
                <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{paddingHorizontal:20,fontSize:12,color:COLORS.dark}}>{`Author: ${item.author}`}</Text>
                    <View style={Styles.date}>
                        <Text style={{marginLeft:15,color:COLORS.white,fontWeight:'bold',fontSize:12}}>{`Published: ${item.publishedAt}`}</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:20,marginTop:10}}>  
                    <Text style={{color:COLORS.dark,fontSize:18,fontWeight:'bold'}}>
                        Details
                    </Text>
                    <Text style={{color:'grey',fontSize:12,lineHeight:22,marginTop:5}}>{item.description}</Text>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default Details
