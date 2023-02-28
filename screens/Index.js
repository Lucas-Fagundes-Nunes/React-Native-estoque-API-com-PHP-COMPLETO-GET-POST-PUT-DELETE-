import React, {useState, useEffect} from 'react';  
import {  
  SafeAreaView,  
  Text,  
  StyleSheet,  
  View,  
  ScrollView
} from 'react-native';  

export default function Index({ navigation }) { 
  const [dataSource, setDataSource] = useState([]); 

  // Fetch de busca API
  useEffect(() => {  
    fetch('http://192.168.201.216/estoqueapi/')  
      .then((response) => response.json())  
      .then((responseJson) => {  
        setDataSource(responseJson.produtos);  
      })  
      .catch((error) => {  
        console.error(error);  
      });
  }, []);  

  const ItemView = (item) => {  
      console.log(item);
    return (  
    
      <Text  // Objeto criado 
        style={styles.itemStyle}  
        //onPress={() => clicarNoObjeto(item)}
        onPress={() => navigation.navigate('Verificar Produto',{ paramKey: item, })}
        >  
        {'Código: '+ item.codigo}
        {'\nNome do Produto: ' + item.nome.toUpperCase()}  
        {'\nDetalhe: '+ item.detalhe}
      </Text>  
    );  
  };  

  const clicarNoObjeto = (item) => {  
    alert('\nCódigo: ' + item.codigo + 'Id : ' + item.id + '\nNome do Produto : ' + item.nome + '\nDetalhe : ' + item.detalhe + '\nQuantidade : ' + item.quantidade + '\nSerie : ' + item.serie + '\nValor do Produto : ' + item.valor + '\nFornecedor : ' + item.fornecedor + '\nStatus : ' + item.status + '\nCadastrado : ' + item.data_inicio + '\nAtualização : ' + item.data_atualizada);  
  };  

  return (  
    <SafeAreaView style={{flex: 1}}>  
      <View style={styles.container}>  
        <ScrollView>
          {
            dataSource.map(ItemView)
          }
        </ScrollView>
      </View>  
    </SafeAreaView>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    paddingTop: 10,  
    backgroundColor: 'rgba(255,255,255,.4)',  
  },  
  itemStyle: {  
    backgroundColor: '#0066CC',  
    padding: 20,  
    marginVertical: 8,  
    marginHorizontal: 10,  
    color: 'white',  
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,

    elevation: 24,
  },  
  
});  

