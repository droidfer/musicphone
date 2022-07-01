import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-elements';

const Acercade = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        
        <Card>
          <Card.Title><Text style={styles.title}>Acerca de</Text></Card.Title>
          <Card.Divider />
          <Text style={{fontStyle: 'italic'}}>Ing. Fernando Martinez</Text>
          <Text>
            <Text style={{fontWeight: "bold"}}>Email:</Text>
            <Text> fmartinez@dotech.com.py</Text>
          </Text>
          <Text>
            <Text style={{fontWeight: "bold"}}>Contacto:</Text>
            <Text> +595 971 442200</Text>
          </Text>          
            <Text>Asuncion / Paraguay</Text>
          
        </Card>  
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