import React, { useState, useEffect } from 'react';
import { ActivityIndicator,Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";
import styles from "../assets/Styles/styleresultados";


const Resultados = ({navigation}) =>  {

  const [url, setUrl] = useState("http://192.168.100.137:8080");
  const [isLoading, setIsLoading] = useState(true);
  const [Resultado, setResultado] = useState();

  const getStats = () => {
    return fetch(url+'/stats')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setResultado(json);
        setIsLoading(false);
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => { getStats(); }, []);

  if(isLoading){
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <Text> Descargado Resultados...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>

      <View style={styles.chart}>
      <VictoryChart domainPadding={{x: 40}} >
        <VictoryBar
          data={Resultado}
          x="musicname"
          y="count"
          
        />
        <VictoryAxis
          label="Generos"
          style={{
            axisLabel: { padding: 30 }
          }}
        />
        <VictoryAxis dependentAxis
          label="Hits"
          style={{
            axisLabel: { padding: 40 }
          }}
        />
      </VictoryChart>
      </View>

    </View>
  );
}

export default Resultados;