import React,{useState, useTransition} from 'react';
import { View, Text,StylerSheet,FlatList} from 'react-native';
import Header from './src/header';
import List from './src/List';
export default function AppAtividades() {

  const [feed,setFeed] = useState([
    {
     id: 1,
     nome: 'thallysson souza',
     descricao: 'O melhor momento, quando eu Toco em meu Violão',
     imgPerfil: 'https://thumbs.dreamstime.com/b/retrato-do-perfil-do-m%C3%BAsico-masculino-novo-consider%C3%A1vel-75797974.jpg',
     imgPublicacao: 'https://us.123rf.com/450wm/ipopba/ipopba1512/ipopba151200055/49718960-guitarrista-en-el-escenario-para-el-fondo-el-concepto-blando-y-desenfoque.jpg?ver=6',
     likeada: true,
     likers: 1
  }, 
  {
    id: 2,
    nome: 'Marcos Rocha',
    descricao: 'Mais um Dia de Trabalho',
    imgPerfil: 'https://ef564920920608e03abb-7d34ef097b6ab6c586dfc84157128505.ssl.cf1.rackcdn.com/PostImagem/36734/foto-de-perfil-profissional_o1eh30s23km6j1lmm1k5r8cvinuj.JPG',
    imgPublicacao: 'https://www.iugu.com/hubfs/controle-financeiro.png',
    likeada: true,
    likers: 12
 }, 
 {
  id: 3,
  nome: 'Sandro Alves',
  descricao: 'Aquela Pose no Skyte',
  imgPerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbdaVkjfUJjcvAoTMBZujNVaQ419z2JsyZMk5iBJ6cx7VT5X-jjZWXE3MKbyHohPsMLs&usqp=CAU',
  imgPublicacao: 'https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/catarinense%20skate_0.jpg?b3BaDIm8U6daEMJFmmjOYk0gD8UJCq6N',
  likeada: false,
  likers: 37
}, 
{
  id: 4 ,
  nome: 'Programador Sincero',
  descricao: 'Dando uma Manutenção no App',
  imgPerfil: 'https://www.mooc.org/hubfs/what-computer-programming-jobs-offer-remote-work-jpg.jpeg',
  imgPublicacao: 'http://viladosilicio.com.br/wp-content/uploads/2020/12/Captura-de-Tela-2020-12-28-a%CC%80s-12.36.10-1024x501.png',
  likeada: false,
  likers: 0
},
{
  id: 5,
  nome: 'Toy Sharp',
  descricao: 'Dando uma Manutenção no App',
  imgPerfil: 'https://programathor.com.br/assets/thor-91ae45b43c0df483b3ada7728d09a3458d40119e8cdb47abadd9f15a0f62172c.png',
  imgPublicacao: 'https://mapadasfranquias.com.br/wp-content/uploads/2020/08/toyshow.jpg',
  likeada: true,
  likers: 1
},



])
 return (
   <View>

 
      <Header/>

      <FlatList
      data={feed}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <List data={item}/>}
        
      
      />

    </View>
  );
}
