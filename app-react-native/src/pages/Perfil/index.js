import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, ScrollView, Switch, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

export default function Perfil({ route }) {
  //dark mode
  const [dark, setDark] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [dark]);

  async function setData() {
    await AsyncStorage.setItem("dark", String(dark));
  }

  async function getData() {
    const dark = await AsyncStorage.getItem("dark");

    setDark(dark === "true" && true);
  }

  const navigation = useNavigation();
  console.log(route.params);
  navigation.setOptions({
    title: `Perfil`,
  });

  const [endereco, setEndereco] = useState();

  const consultaCep = async (cep) => {
    const response = await api.get("/" + cep + "/json");
    setEndereco(response.data);
  };

  useEffect(() => {
    consultaCep(route.params?.cep);
  }, []);

  return (
    <View style={estilos.container}>
      <View style={[estilos.box, dark && estilos["bg-dark"]]}>
        <Image
          style={estilos.image}
          source={require("./imagem/perfil.webp")}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          
        
          
          <View style={estilos.bg}>
            <View style={estilos.espaco}>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Usuário: {route.params?.nome}</Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Idade: {route.params?.idade}</Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Sexo: {route.params?.sexo}</Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Email: {route.params?.email}</Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Celular: {route.params?.celular}</Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>
                Nacionalidade: {route.params?.nacionalidade}
              </Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>CEP: {route.params?.cep}</Text>

              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Endereço: {endereco?.logradouro}</Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Bairro: {endereco?.bairro}</Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Cidade: {endereco?.localidade}</Text>
              <Text style={[estilos.Text, dark && estilos["font-color"]]}>Estado: {endereco?.uf}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={estilos.topSide}>
            <Text style={[estilos.topText, dark && estilos["font-color"]]}>
              Dark mode
            </Text>
            <Switch
              style={estilos.switch}
              value={dark}
              onValueChange={(valor) => setDark(valor)}
            />
          </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: "#F0FFF0",
  },
  box: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#F0FFF0",
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 170,
    marginTop: 10,
  },
  titulo: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 600,
    paddingBottom: 10,
  },
  Text: {
    fontSize: 16,
    fontWeight: 400,
    padding: 2,
  },
  espaco: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    width: 280,
    height: '100%',
  },
  bg: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
  },
  top: {
    flexDirection: "row",
    gap: 32,
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 10,
  },
  topSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  topText: {
    fontSize: 15,
  },
  "bg-dark": {
    backgroundColor: "#202124",
  },
  "font-color": {
    color: "#FFFFFF",
  },
});