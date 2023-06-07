import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native'

import Topo from "./Components/Topo"
import Details from "./Components/Details"
import Item from './Components/Item'
import mock from '../mocks/mockCesta'

export default function Loja(){
  return <>
    <FlatList
      data = { mock.itens.lista }
      renderItem = { Item }
      keyExtractor = { ({ nome }) =>  nome}

      ListHeaderComponent = { () => { 
        
        return <>
          <Topo {...mock.topo}/>
          <View style={estilos.containerCesta}>
            <Details {...mock.detalhes}/>
            <Text  style={estilos.tituloItens} >{mock.itens.titulo}</Text>
          </View>
        </>

      } }
    />
    
  </>
}

const estilos = StyleSheet.create({
  containerCesta: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tituloItens: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});





















