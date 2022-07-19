# Instagram-Clone-
Esse projeto é um clone no layout do instagram, com toda a interação e componentes renderizados e tratamento e dados via props e state
esse arquivo contem o header do layout
import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

export default function Header() {
 return (
   <View style={Estilos.conteiner}>
    <TouchableOpacity>
     <Image source={require('../imgs/logo.png')}
     style={Estilos.logo}
     />
    </TouchableOpacity>
    <TouchableOpacity>
     <Image source={require('../imgs/send.png')}
     style={Estilos.send}
     />
    </TouchableOpacity>
   </View>
  );
}

const Estilos = StyleSheet.create({
    conteiner:{
    
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.2,
        shadowColor: 'black',
        elevation:4

    },
    send:{
        width: 23,
        height: 23,
    }
})
