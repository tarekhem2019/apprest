import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  name: {
    fontFamily: "Inconsolata",
    fontSize: 22,
    marginLeft: 15,
    marginTop: 7,
    color: '#000000'
  },
  par: {
    marginLeft: 15,
    marginTop: 4
  },
  shadow: {
    borderRadius: 10,
    width: 330,
    height: '48%',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 8,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    alignItems: 'center'
  },
  seperator: {
    backgroundColor: '#adadad',
    height: 0.3,
    width: '80%',
    marginTop: 4
  },
  comment: {
    marginLeft: 20,
    alignSelf: 'flex-start',
    color: '#000000',
    fontFamily: "Inconsolata",
    fontSize: 18,
    marginTop: 12
  },
  TxtInput: {
    marginTop: 12,
    alignSelf: 'flex-start',
    marginLeft: 20,
    width: '87%'
  },
  buy: {
    marginTop: 10,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FC6353',
    borderRadius: 15,
    width: 220,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 8,
    shadowOffset: { width: 1, height: 13 },
  },
  buyText: {
    color: "#fff",
    fontFamily: "Inconsolata",
    fontSize: 19,
  },
  add_: {
    alignSelf: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#7BA212',
    borderRadius: 50,
    borderColor: '#38a81c',
    borderWidth: 0.6,
    marginTop: 7
  },
  compteur: {
    marginLeft: 7,
    marginTop: 13,
    marginRight: 7
  },
  compt: {
    color: "#fff",
    fontFamily: "Inconsolata",
    fontSize: 19,
    alignSelf:'center',
    marginTop:4
  }
});