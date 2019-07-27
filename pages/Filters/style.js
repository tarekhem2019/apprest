import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    buttons:{
        borderRadius:6,
        marginRight:5,
        marginLeft:5,
        marginTop:10,
        justifyContent:'center',
    },
    txt:{
        fontFamily:'Inconsolata',
        color:'#fff',
        textAlign:'center',
        fontSize:17
    },
    txtslid:{
        fontSize: 20,
        fontFamily:'Inconsolata',
        marginTop:10,
        marginLeft:11
    },
    save: {
        marginTop: 30,
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#90BC1B',
        borderRadius: 15,
        width: 285,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 8,
        shadowOffset: { width: 1, height: 13 },
      },
      saveText: {
        color: "#fff",
        fontFamily: "Inconsolata",
        fontSize: 19,
      },
      seperator: {
        backgroundColor: '#adadad',
        height: 0.5,
        width: '50%',
        marginTop: 35,
        alignSelf:'center'
      },


});
