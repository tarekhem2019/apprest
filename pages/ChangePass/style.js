import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    change: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 25,
    },
    TextInput: {
        borderBottomColor: '#ccccc3',
        borderBottomWidth: 0.6,
        marginLeft: 15,
        width:'90%'
    },
    icon: {
        marginTop: 30,
        marginRight: 5,
        height: 16,
        width: 16
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
        width: '60%',
        marginTop: 35,
        alignSelf:'center'
      },
})