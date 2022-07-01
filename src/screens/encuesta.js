import { StatusBar } from 'expo-status-bar';
import { Pressable, Alert, ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const Encuesta = ({navigation}) =>  {

const [url, setUrl] = useState("http://192.168.100.137:8080");
const [email, setEmail] = useState();

//Sync Related States
const [isLoading, setIsLoading] = useState(true);
const [sending, setSending] = useState(false);


//DropDown Component
const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState();

//Recibir Datos de Generos de Musica
const getGenres = () => {
  return fetch(url+'/listgenre')
    .then((response) => response.json())
    .then((json) => {
      setItems(json);
      setIsLoading(false);
      
    })
    .catch((error) => {
      console.error(error);
    });
};

useEffect(() => { getGenres(); }, []);

//Enviar Encuesta
const sendGenre = () => {

    // Valida el Correo
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if(!reg.test(email)){
      Alert.alert(  
        'Verifique Su correo Electronico',  
        'Su correo electronico no esta correcto',  
        [  
            {text: 'OK'},  
        ]  
      );
      return;
    }

    //Valida Genero de Musica
    if(!value){
      Alert.alert(  
        'Debe Seleccionar un Genero',  
        'Elija un Genero de Musica',  
        [  
            {text: 'OK'},  
        ]  
      );
      return;
    }


    //Funcion de Enviar Encuesta
    setSending(true);
    return fetch((url+"/addmusic?email="+email+"&genre="+value+""), requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSending(false);
        setEmail("");

        Alert.alert(  
          'Encuestra Enviada',  
          'Su encuesta ha sido enviada correctamente',  
          [  
              {text: 'OK'},  
          ]  
        );  

      })
      .catch((error) => {
        Alert.alert(  
          'Error',  
          'Su encuesta no ha sido enviada correctamente. Verifique su conexion a internet',  
          [  
              {text: 'OK'},  
          ]  
        );
        console.error(error);
      });
};

const requestOptions = {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
};

  //Pantalla de Recepcion de Generos
  if(isLoading){
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <Text> Descargado Generos...</Text>
      </View>
    );
  }

  // Pantalla de Envio de Encuesta
  if(sending){
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <Text> Enviando Encuesta...</Text>
      </View>
    );
  }

  // Pantalla de Carga de Encuesta
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <Text style={styles.title}>Encuesta</Text>
        <StatusBar style="auto" />

        <Text style={styles.text}>ESTILO DE MUSICA</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <Text style={styles.text}>CORREO ELECTRONICO</Text>
        <Input
          placeholder='Ingresar Correo Electronico'
          onChangeText={setEmail}
        />

        <Pressable style={styles.button} onPress={sendGenre}>
          <Text style={styles.text}>Enviar Encuesta</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Encuesta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76b5c5',
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
    backgroundColor: '#2596be',
    
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
});