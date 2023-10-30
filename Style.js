import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#c9d4cc',
        justifyContent:"flex-end",
    },
    insideContainer:{      
        flexWrap:'wrap',
        flexDirection:'row',
        marginHorizontal:40,
        
    },
    button:{
        
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        marginTop:8,
        borderRadius:50,
        width:78,
        height:60,
        shadowColor:'#111112',
        shadowRadius:20,
        elevation:10,
        margin: 2,
        marginVertical: 10,
    },
    buttonText:{
        fontSize:26,
        fontWeight:'bold',
       
    },
    colorButton:{
        backgroundColor:'#9cd0f7',
    },
    colorText:{
        color:'#f5b3d9',
    },
    input:{

        textAlign:'center',
        width:320,
        fontSize: 45,
        marginBottom:20,
    }
    
});
export default styles;
    