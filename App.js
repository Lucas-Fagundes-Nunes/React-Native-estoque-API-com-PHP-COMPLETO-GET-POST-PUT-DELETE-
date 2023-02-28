import * as React from 'react';
import { Button, View,  SafeAreaView, Text,StyleSheet, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './screens/Index';
import Get from './screens/Get';
import Post from './screens/Post';
import Pokemon from './screens/Pokemon';

function HomeScreen({ navigation }) {

  return (
    <View style={styles.homeProdutos}>
      <Text style={styles.alpha}>ALPHA LFN</Text>
      <View >
    <Image source={require('./assets/logo.png')} 
    style={styles.image}/>
    </View>

      <View style={styles.btn}>
      <Button 
        title="Listar Produtos"
        onPress={() => navigation.navigate('Listar Produtos')}
      />
      </View>
  
      <View style={styles.btn}>
      <Button 
        title="Cadastrar Produto"
        color="green"
        onPress={() => navigation.navigate('Cadastrar Produto')}
        style={styles.homeButton}
      />
      </View>

      <View style={styles.btn}>
      <Button 
        title="Pokemon Exemplo"
        color="red"
        onPress={() => navigation.navigate('Pokemon')}
        style={styles.homeButton}
      />
      </View>
    </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Estoque Produtos" component={HomeScreen} />
      <Stack.Screen name="Listar Produtos" component={Index} />
      <Stack.Screen name="Verificar Produto" component={Get} />
      <Stack.Screen name="Cadastrar Produto" component={Post} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({   
  homeProdutos: {  
    flex: 1, 
    alignItems: 'center', 

    backgroundColor: '#0066CC',  
  },  
  homeButton: {
    backgroundColor: 'white', 
    color:"#f194ff"
  },
  btn: {
    width: '90%',
    margin: 10,
    
  },
  image: {
    width:200,
    height:200,

    resizeMode: 'contain',
    marginBottom:30
  },
  alpha: 
  {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
    color: "white", 
    textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 15, 
  }
});  
