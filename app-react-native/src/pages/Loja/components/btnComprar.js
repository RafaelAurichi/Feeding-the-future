import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function BtnComprar({text}){
  {/*onPress={() => {}} é um parametro que podemos usar para estilizar a animação quando o botão é pressionado*/}
  return <>
    <TouchableOpacity style={estilos.botao}>
      <Text style={estilos.TextBotao}>{ text }</Text>
    </TouchableOpacity>
  </>
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,  
  },
  TextBotao: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
  }
});