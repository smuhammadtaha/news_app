import { StyleSheet } from "react-native";
import COLORS from "./colors";

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
});

export default Styles