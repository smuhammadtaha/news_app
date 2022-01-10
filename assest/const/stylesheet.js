import { Dimensions, StyleSheet } from "react-native";
import COLORS from "./colors";

const width = Dimensions.get("screen").width/2-30

const Styles = StyleSheet.create({
    header:{
        color:COLORS.dark,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    mainText:{
        color:COLORS.dark,
        fontSize:25,
        fontWeight:'bold',
    },
    subText:{
        fontSize:38,
        fontWeight:'bold',
        color:COLORS.green,
    },
    categoryContainer:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:20,
        justifyContent:'space-between'
    },
    categoryText:{
        fontSize:16,
        color:'grey',
        fontWeight:'bold',
        margin:10
        
    },
    categoryTextSelected:{
        color:COLORS.green,
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:COLORS.green
    },  
    cardContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },
    cardImageContainer:{
        height:160,
        width:140,
        backgroundColor:'#000',
        borderRadius:20,
    },
    cardDetailsContainer:{
        height:130,
        backgroundColor:COLORS.light,
        flex:1,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        padding:20,
        justifyContent:'center'
    },
    detailsHeader:{
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageContainer:{
        flex:0.45,
        justifyContent:'center',
        alignItems:'center'
    },
    detailsContainer:{
        flex:0.55,
        backgroundColor:COLORS.light,
        marginHorizontal:7,
        marginBottom:7,
        borderRadius:20,
        paddingTop:30,
    },
    line:{
        width:25,
        height:2,
        backgroundColor:COLORS.dark,
        marginBottom:5,
        marginRight:3
    },
    date:{
        backgroundColor:COLORS.green,
        width:190,
        height:40,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        justifyContent:'center'
    }
});

export default Styles