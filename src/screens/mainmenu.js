import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Button } from 'react-native';

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

const styles = StyleSheet.create({
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