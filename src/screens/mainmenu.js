import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, Button } from 'react-native';
import styles from "../assets/Styles/stylemainmenu";

const MainMenu = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <Text style={styles.title}>Encuestas Musica</Text>
        <StatusBar style="auto" />
        <Pressable style={styles.button} onPress={() => navigation.navigate("Encuesta", { title: "Encuesta" })}>
            <Text style={styles.text}>Encuesta</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate("Resultados", { title: "Resultados" })}>
            <Text style={styles.text}>Resultados</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate("Acercade", { title: "Acerca de..." })}>
            <Text style={styles.text}>Acerca de...</Text>
        </Pressable>
      
      </View>

    </View>
  );
}

export default MainMenu;