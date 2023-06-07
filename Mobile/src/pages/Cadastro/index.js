import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Switch,
  ScrollView,
  StyleSheet
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

export default function Cadastro() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState("Masculino");
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [celular, setCelular] = useState();
  const [cep, setCep] = useState();
  const [endereco, setEndereco] = useState();

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

  const consultaCep = async (cep) => {
    const response = await api.get("/" + cep + "/json");
    setEndereco(response.data);
  };

  const navigation = useNavigation();

  async function irTelaPerfil() {
    await consultaCep(cep);
    navigation.navigate("Perfil", {
      nome: nome,
      idade: idade,
      sexo: sexo,
      email: email,
      senha: senha,
      celular: celular,
      cep: cep,
      endereco: endereco,
    });
  }

  return (
    <SafeAreaView style={[estilos.container, dark && estilos["bg-dark"]]}>
      <StatusBar />
      <View style={estilos.box}>
        <Text style={[estilos.titulo, dark && estilos["font-color"]]}>
          CADASTRAR
        </Text>
        
        <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={[estilos.label, dark && estilos["font-color"]]}>
              Nome:
            </Text>
            <TextInput
              style={estilos.input}
              placeholder="Digite seu Nome/Instituição"
              onChangeText={(valor) => setNome(valor)}
            />

            <Text style={[estilos.label, dark && estilos["font-color"]]}>
              Idade:
            </Text>
            <TextInput
              style={estilos.input}
              placeholder="Digite sua idade"
              keyboardType="numeric"
              onChangeText={(valor) => setIdade(valor)}
            />

            <Text style={[estilos.label, dark && estilos["font-color"]]}>
              Email:
            </Text>
            <TextInput
              style={estilos.input}
              placeholder="Digite seu email"
              onChangeText={(valor) => setEmail(valor)}
            />

            <Text style={[estilos.label, dark && estilos["font-color"]]}>
              Senha:
            </Text>
            <TextInput
              style={estilos.input}
              secureTextEntry={true}
              placeholder="Digite sua senha"
              onChangeText={(valor) => setSenha(valor)}
            />

            <Text style={[estilos.label, dark && estilos["font-color"]]}>
              Sexo:
            </Text>
            <Picker
              style={estilos.input}
              selectedValue={sexo}
              onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
            >
              <Picker.Item key={1} value="Masculino" label="Masculino" />
              <Picker.Item key={2} value="Feminino" label="Feminino" />
              <Picker.Item key={3} value="Nenhum" label="Nenhum" />
            </Picker>

            <Text style={[estilos.label, dark && estilos["font-color"]]}>
              Celular:
            </Text>
            <TextInput
              style={estilos.input}
              placeholder="Digite ssua senha"
              keyboardType="numeric"
              onChangeText={(valor) => setCelular(valor)}
            />

            <Text style={[estilos.label, dark && estilos["font-color"]]}>
              CEP:
            </Text>
            <View style={estilos.viewInput}>
              <TextInput
                style={estilos.input}
                value={cep}
                placeholder="Digite seu CEP"
                onChangeText={(valor) => setCep(valor)}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
              />
            </View>

            <View style={estilos.botaoPosition}>
              <TouchableOpacity onPress={() => irTelaPerfil()}>
                <Text style={estilos.botao}>Cadastrar-se</Text>
              </TouchableOpacity>
            </View>
        
        <View style={estilos.topSide}>
              <Text style={[estilos.topText, dark && estilos["font-color"]]}>
                Dark mode
              </Text>
              <Switch
                value={dark}
                onValueChange={(valor) => setDark(valor)}
              />
            </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#F0FFF0",
    width: '100%',
  },
  box: {
    alignItems:'center',
    marginVertical: 40,

    justifyContent: 'center',
  },
  titulo: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    fontWeight: 700,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#222",
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: "white",
    color: "gray",
  },
  label: {
    margin: 5,
    fontSize: 16,
  },
  botao: {
    backgroundColor: "whitesmoke",
    color: "grey",
    height: 40,
    width: 100,
    padding: 10,
    margin: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  botaoPosition: {
    alignItems: "center",
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
