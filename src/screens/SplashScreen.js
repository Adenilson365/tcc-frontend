//[Apresenta a marca do aplicativo ao usuário.]
//Essa tela é a primeira a ser exibida ao abrir o aplicativo. 
//Ela é responsável por exibir o logo da aplicação e redirecionar o usuário para a tela de login após 2 segundos.
//Para isso, usa-se o hook useEffect para executar a função de redirecionamento após 2 segundos.


import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); 
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TruckSaldo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28a745',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
