import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const Post = ({navigation}) => {
    
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [detalhe, setDetalhe] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [serie, setSerie] = useState('');
  const [valor, setValor] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [status, setStatus] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Cadastrar Produto
        </Text>

        <TextInput
          value={codigo}
          onChangeText={(codigo) => setCodigo(codigo)}
          placeholder={'Código do Produto'}
          style={styles.inputStyle}
        />

        <TextInput
          value={nome}
          onChangeText={(nome) => setNome(nome)}
          placeholder={'Nome do Produto'}
          style={styles.inputStyle}
        />

        <TextInput
          value={detalhe}
          onChangeText={(detalhe) => setDetalhe(detalhe)}
          placeholder={'Detalhe do Produto'}
          style={styles.inputStyle}
        />

        <TextInput
          value={quantidade}
          onChangeText={(quantidade) => setQuantidade(quantidade)}
          placeholder={'Quantidade'}
          style={styles.inputStyle}
        />

        <TextInput
          value={serie}
          onChangeText={(serie) => setSerie(serie)}
          placeholder={'Serie'}
          style={styles.inputStyle}
        />

        <TextInput
          value={valor}
          onChangeText={(valor) => setValor(valor)}
          placeholder={'Valor do Produto'}
          style={styles.inputStyle}
        />

        <TextInput
          value={fornecedor}
          onChangeText={(fornecedor) => setFornecedor(fornecedor)}
          placeholder={'Fornecedor'}
          style={styles.inputStyle}
        />

        <TextInput
          value={status}
          onChangeText={(status) => setStatus(status)}
          placeholder={'Status do Produto'}
          style={styles.inputStyle}
        />

        <Button
          title="Cadastrar Produto"
          onPress={() => salvarCadastro(codigo, nome, detalhe, fornecedor, quantidade, valor, serie, status)}
          color='green'
        />

        </View> 
    </SafeAreaView>
  );
};

const salvarCadastro = (codigo, nome, detalhe, fornecedor, quantidade, valor, serie, status) => {  


fetch('http://192.168.201.216/estoqueapi/post.php', {
  method: 'POST',
  body: JSON.stringify({
    codigo: codigo, 
    nome: nome, 
    detalhe: detalhe, 
    fornecedor: fornecedor, 
    quantidade: quantidade, 
    valor: valor, 
    serie: serie, 
    status: status,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  
  navigation.navigate('Estoque Produtos')

  };  

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#0066CC',
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    color: "white", 
    textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
});




