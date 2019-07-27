import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    back:{
        backgroundColor:'#f7f7f7',
        flex:1
    },
    start:{
        flex:1,
        fontSize:18,
        fontFamily:'Inconsolata',
        color:'#000000',
        marginTop:14,
        marginLeft:-75
    },
    filt:{
        marginLeft:20,
        marginTop:10
    },
    card:{
        height:90,
        width:120,
        backgroundColor:'#FC6353',
        marginTop:13,
        marginRight:10,
        marginLeft:7,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        marginBottom:65
    },
    txt1:{
        color:'#fff',
        fontFamily:'Inconsolata',
        fontSize:16
    },
    TypeTxt:{
        marginTop:5,
        marginLeft:22,
        fontFamily:"Inconsolata",
        color:"#000000",
        fontSize:20
    },
    search:{
        fontFamily:"Inconsolata",
        fontSize:16,
        paddingLeft:18,
        paddingBottom:6,
        paddingTop:8,
        marginTop:12,
        marginLeft:20,
        marginRight:20,
        borderRadius:30,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6.4,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        width:'90%',
    },
    shadow: {
      borderRadius:10,
      width:'94%',
      height:200,
      marginTop:10,
      marginBottom:10,
      marginRight:15,
      marginLeft:15,
      backgroundColor: '#FFFFFF',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      elevation: 8,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
      alignItems: 'center'

    },
    img:{
      width:"96%",
      height:130,
      marginTop:8,
      borderRadius:10
    },
    txt:{
      alignSelf:'flex-start',
      marginTop:8,
      marginLeft:9
    },
    proptxt:{
      fontSize:13,
      marginLeft:20,
      marginTop:5,
      alignSelf:'flex-start'
    },
    separator: {
      borderWidth: 0.6, 
      borderColor: '#c3c2c2',
      height:22,
      marginTop:3,
      marginBottom:3,
      marginLeft:15
     },
     icons:{
      marginLeft:10,
      marginTop: 7,
      height:16,
      width:16,
      alignSelf:'flex-start',
     },
     navBar:{
      backgroundColor:'#fff',
      height:40,
      flexDirection:'row'
     },
     iconsnav:{
      marginLeft:15,
      marginBottom:5,
      marginTop:6
     }
})
