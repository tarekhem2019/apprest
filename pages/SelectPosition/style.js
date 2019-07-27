import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    txt: {
        fontSize: 18,
        color: '#fff',
        alignSelf: 'center',
        fontFamily: 'Inconsolata',
        marginTop: 20
    },
    back: {
        backgroundColor: '#FC6353',
        flex: 1
    },
    posImage: {
        marginLeft: 10,
        padding: 8,
        marginTop: 22,
        marginRight: 5,
        resizeMode: 'stretch'
    },
    txtpos: {
        marginLeft: 7,
        marginTop: 20,
        color: '#fff'
    },
    save:{
        marginTop:50,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#90BC1B',
        borderRadius:22,
        width:300,
        height:55,
        justifyContent:'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        elevation: 12,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 20},
        alignItems: 'center'
    },
    savetxt:{
        color:"#fff",
        fontFamily:"Inconsolata",
        fontSize:19
    },
  shadow: {
        borderRadius:10,
        width:350,
        height:40,
        marginTop:20,
        marginLeft:5,
        marginBottom:10,
        backgroundColor: '#FFFFFF',


      },
})
