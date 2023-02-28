import React, {useState} from 'react';
import {  SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,} from 'react-native';

const Get = ({route}) => {


    console.log(route.params.paramKey.id)
    fetch('http://192.168.201.216/estoqueapi/get.php?id='+route.params.paramKey.id)
    .then((response) => response.json())
    .then((json) => console.log(json.produto));


    const [nome, setNome] = useState();
    const [codigo, setCodigo] = useState();
    const [detalhe, setDetalhe] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [serie, setSerie] = useState('');
    const [valor, setValor] = useState('');
    const [fornecedor, setFornecedor] = useState('');
    const [status, setStatus] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container2}>
        <Text style={styles.heading}>
        {route.params.paramKey.nome.toUpperCase()}
        </Text>
        <Text style={styles.textStyle}>
          Código: {route.params.paramKey.codigo}
        </Text>
        <Text style={styles.textStyle}>
          Detalhe: {route.params.paramKey.detalhe}
        </Text>
        <Text style={styles.textStyle}>
          Quantidade: {route.params.paramKey.quantidade}
        </Text>
        <Text style={styles.textStyle}>
          Serie: {route.params.paramKey.serie}
        </Text>
        <Text style={styles.textStyle}>
          Valor: {route.params.paramKey.valor}
        </Text>
        <Text style={styles.textStyle}>
          Fornecedor: {route.params.paramKey.fornecedor}
        </Text>
        <Text style={styles.textStyle}>
          Status: {route.params.paramKey.status}
        </Text>
        <Text style={styles.textStyle}>
          Cadastrado: {route.params.paramKey.data_inicio}
        </Text>
        <Text style={styles.textStyle}>
          Atualizado: {route.params.paramKey.data_atualizada}
        </Text>
        </View>




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
          title="Cadastrar"
          onPress={() => console.log(codigo, nome, detalhe, fornecedor, quantidade, valor, serie, status)}
          color='green'
        />

    
        </View> 

    </SafeAreaView>
  );
};

export default Get;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0066CC',  
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0066CC',  

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
    color:'white',
    textAlign: 'left',
    fontSize: 14,
    marginVertical: 5,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
});