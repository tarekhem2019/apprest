import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    back: {
        backgroundColor: '#f7f7f7',
        flex: 1
    },
    History: {
        alignSelf: 'center',
        fontFamily: 'Inconsolata',
        color: '#000000',
        marginTop: 14,
        fontSize: 22
    },
    datepicker: {
        width: 270,
        alignSelf: 'center',
        marginTop: 15,
        marginRight: 12,
        marginBottom:10
    },
    listtxt: {
        fontFamily: 'Inconsolata',
        color: '#000000',
        marginTop: 14,
        fontSize: 17, marginLeft: 15
    },
    shadow: {
        borderRadius:10,
        width:330,
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
        marginTop:5
      },
       icons:{
        marginLeft:10,
        marginTop: 5,
        height:16,
        width:16
       }
});