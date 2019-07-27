import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    search: {
        fontFamily: "Inconsolata",
        fontSize: 16,
        paddingLeft: 18,
        paddingBottom: 6,
        paddingTop: 8,
        marginTop: 17,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6.4,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
        width: '90%',
        height: 45
    },
    information: {
        backgroundColor: '#fff',
        height: 75,
        width: 310,
        alignSelf: 'center',
        marginTop: 96,
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6.4,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    },
    icons: {
        marginLeft: 10,
        marginTop: 7,
        height: 16,
        width: 16
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
        marginTop:5
      },
      separator: {
        borderWidth: 0.6, 
        borderColor: '#c3c2c2',
        height:22,
        marginTop:3,
        marginBottom:3,
        marginLeft:15
       },
    
})
