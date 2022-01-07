import React, { useState } from 'react'
import { SafeAreaView, View,Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import COLORS from '../assest/const/colors'
import Styles from '../assest/const/stylesheet'
import Icon from 'react-native-vector-icons/Entypo'


const Home = () => {

    const categories = ['POPULAR','ORGANIC','INDOORS','SYNTHETIC','SYNTHETIC'];

    const [categoryIndex,setcategoryIndex] = useState(0);

    return (
        <SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:COLORS.white,}}>
            <View style={Styles.header}>
                <View>
                    <Text style={Styles.mainText}>Welcome to</Text>
                    <Text style={Styles.subText}>News App</Text>
                </View>
                <Icon name='save' size={28}/>
            </View>
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

         <FlatList numColumns={2}/>

        </SafeAreaView>
    )
}

export default Home
