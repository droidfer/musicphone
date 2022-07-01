import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Acercade = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <Text style={styles.title}>Acerca de</Text>
        <Text>Ing. Fernando Martinez</Text>
        <Text>Email: fmartinez@dotech.com.py</Text>
        <Text>Contacto: +595 971 442200</Text>
        <Text>Asuncion / Paraguay</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

export default Acercade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9b571',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  formcontainer: {
    flex: 1,
    width: "80%",
    justifyContent: 'center',
  },
  title: {
    color: '#4a341e',
    fontWeight: 'bold',
    fontSize: 30,
  }
  
});