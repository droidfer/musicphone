import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainMenu from "./src/screens/mainmenu";
import Encuesta from "./src/screens/encuesta";
import Resultados from "./src/screens/resultados";
import Acercade from "./src/screens/acercade";



export default createAppContainer(
  createStackNavigator({ MainMenu, Encuesta, Resultados, Acercade }, { initialRouteName: "MainMenu" })
);

