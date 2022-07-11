import { View} from 'react-native';
import { Card, Text } from 'react-native-elements';
import styles from "../assets/Styles/styleacercade";


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

