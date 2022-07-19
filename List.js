# Instagram-Clone-
Esse projeto é um clone no layout do instagram, com toda a interação e componentes renderizados e tratamento e dados via props e state
import React,{useState} from 'react';
import { View,Text,Image,StyleSheet, TouchableOpacity } from 'react-native';

export default function List(props) {

     

   function curtidas(Likeada){
       
    return Likeada ? require('../imgs/likeada.png') : require('../imgs/like.png')
    
   }
   
    function mostrarLikes(likers){
      if(likers == 0){
        return;
      } else{

      return(
          <View>
            <Text style={Estilos.txtlikes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
          </View>
      )
    }
    }


 return (
   <View style={{flex: 1}}>
          <View style={Estilos.Perfil}>
            <Image source={{uri: props.data.imgPerfil}} style={Estilos.imgPerfl}/>
            <Text style={Estilos.nomeUsuario}>{props.data.nome}</Text>
          </View> 
        
          <Image
          resizeMode='cover' 
          source={{uri: props.data.imgPublicacao}} style={Estilos.imgsPublic}/>
           
           <View style={Estilos.Areabtn}>
            <TouchableOpacity onPress={() => {}} style={Estilos.botao}>
             <Image source={curtidas(props.data.likeada)} style={Estilos.imgBotao}/>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => {}} style={Estilos.botao}>
             <Image source={require('../imgs/comment.png')} style={Estilos.imgBotao}/>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {}} style={Estilos.botao}>
             <Image source={require('../imgs/send.png')} style={Estilos.imgBotao}/>
             </TouchableOpacity>
           </View>

          {mostrarLikes(props.data.likers)}
          <Text style={Estilos.rodapédescricao}>
            {props.data.nome}
          </Text>
          <Text style={Estilos.rodapédescricao}>
            {props.data.descricao}
          </Text>
           
   </View>
  );
}

const Estilos = StyleSheet.create({
    Perfil:{
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center',
   padding: 8,
   borderBottomWidth: 0.2,
   borderTopWidth: 0.2,
   borderBottomColor: 'black'

    },
  imgPerfl:{
   height: 50,
   width: 50,
   borderRadius: 25,
  },
  imgsPublic:{
   alignItems: 'center',
   height: 400
  },
  nomeUsuario: {
   paddingLeft: 5,
   fontSize: 15,
   fontWeight: 'bold',
   color: '#000'
  },
  Areabtn:{

    flexDirection: 'row',
  

  },
  botao:{
    padding: 5,
  },
  imgBotao:{
    width:30,
    height:30
  },
  txtlikes:{
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5
    
  },
  rodapédescricao:{
    fontSize: 15,
    color: 'black',
    marginLeft: 5
  }
})
