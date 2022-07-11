import { StyleSheet, } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formcontainer: {
    flex: 1,
    width: "80%",
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: '#bbbbbb',
    marginBottom: 10,
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    marginBottom: 10,
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  });