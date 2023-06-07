import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Cadastro from "./src/pages/Cadastro";
import Perfil from "./src/pages/Perfil";
import Loja from "./src/pages/Loja/Cesta";

const Tab = createBottomTabNavigator();

const icons = {
  Cadastro: {
    name: "ios-add-circle",
  },
  Perfil: {
    name: "ios-person",
  },
  Loja: {
    name: "ios-cart",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: "grey",
          activeTintColor: "black",
          inactiveBackgroundColor: "white",
          inactiveTintColor: "black",
        }}
      >
        {/* <Tab.Screen name="Inicio" component={Inicio} /> */}
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Loja" component={Loja} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
