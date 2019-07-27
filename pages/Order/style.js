import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'#f7f7f7'
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        height:'70%',

      },
      time:{
          height:45,
          width:45,
          borderRadius:40,
          alignSelf:'center',
          backgroundColor:'#fff',
          marginBottom:27,
          borderColor:'#ff6656',
          borderWidth:0.6,
          alignItems:'center',
          justifyContent:'center'
      },
      txttime:{
          color:'#000000',
          alignSelf:'center',
          alignItems:'center'
      },
      txt1:{
          color:'#ff6656',
          marginBottom:30,
          fontFamily:'Inconsolata',
          fontSize:18
      },
   
      btnorder: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#FC6353',
        borderRadius: 5,
        width: 220,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 4,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 13 },
        marginBottom:50
      },
      orderText: {
        color: "#fff",
        fontFamily: "Inconsolata",
        fontSize: 17,
      },
});