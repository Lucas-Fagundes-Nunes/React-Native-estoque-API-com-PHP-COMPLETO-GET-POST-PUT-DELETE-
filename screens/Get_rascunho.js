import React, {useState} from 'react';
import {  SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,} from 'react-native';

const Get = ({route}) => {
    

/*
    const [ produtoSelecionado, produtoEscolhido ] = useState(null);

    
    const endpoint = 'http://192.168.201.216/estoqueapi/get.php?id='+route.params.paramKey.id;
  
      fetch(endpoint)
        .then(resposta => resposta.json())
          .then( json => {
            const produto = {
              nome: json.produto.nome,
              codigo: json.produto.codigo,
              detalhe: json.produto.detalhe,
              quantidade: json.produto.quantidade,
              serie: json.produto.serie,
              valor: json.produto.valor,
              fornecedor: json.produto.fornecedor,
              status: json.produto.status,
            };
            produtoEscolhido(produto);
          })
          .catch(() => {
            Alert.alert('Erro', 'Não foi possível carregar os dados do Produto');
          });

    */

    const [nome, setNome] = useState(route.params.paramKey.nome);
    const [codigo, setCodigo] = useState(route.params.paramKey.codigo);
    const [detalhe, setDetalhe] = useState(route.params.paramKey.detalhe);
    const [quantidade, setQuantidade] = useState(route.params.paramKey.quantidade);
    const [serie, setSerie] = useState(route.params.paramKey.serie);
    const [valor, setValor] = useState(route.params.paramKey.valor);
    const [fornecedor, setFornecedor] = useState(route.params.paramKey.fornecedor);
    const [status, setStatus] = useState(route.params.paramKey.status);


  return (
    
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
    
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
 


     {produtoSelecionado != null && (
        <View style={styles.container2}>
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
          value={produtoSelecionado.nome}
          onChangeText={(nome) => setNome(nome)}
          placeholder={'Nome do Produto'}
          style={styles.inputStyle}
        />

        <TextInput
          value={produtoSelecionado.detalhe}
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
          value={produtoSelecionado.valor}
          onChangeText={(valor) => setValor(valor)}
          placeholder={'Valor do Produto'}
          style={styles.inputStyle}
        />

        <TextInput
          value={produtoSelecionado.fornecedor}
          onChangeText={(fornecedor) => setFornecedor(fornecedor)}
          placeholder={'Fornecedor'}
          style={styles.inputStyle}
        />

        <TextInput
          value={produtoSelecionado.status}
          onChangeText={(status) => setStatus(status)}
          placeholder={'Status do Produto'}
          style={styles.inputStyle}
        />

        <Button
          title="Atualizar produto"
          onPress={() => atualizarProduto(codigo, nome, detalhe, fornecedor, quantidade, valor, serie, status)}
          color='green'
        />

        </View> 
        )}
         </View>
    </SafeAreaView>
  );
};


const atualizarProduto = (codigo, nome, detalhe, fornecedor, quantidade, valor, serie, status) => {  


    fetch('http://192.168.201.216/estoqueapi/put.php', {
      method: 'PUT',
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

      

export default Get;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0066CC',  
    
  },
  container2: {
    flex: 1,
    padding: 20,
    paddingBottom:60,
    backgroundColor: '#0066CC',  
    alignItems: 'center',
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