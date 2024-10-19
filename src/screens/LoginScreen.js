import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigation = useNavigation(); // Hook para navegação

  const handleLogin = () => {
    if (email === 'Teste' && senha === 'Teste123') {
      navigation.navigate('FinanceDashboard');
    } else {
      alert('Nome ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-Vindo!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o e-mail cadastrado"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite a senha cadastrada"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Botão "Não tenho cadastro" redirecionando para a tela de Cadastro */}
      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={() => navigation.navigate('Cadastro')} // Navega para a tela de Cadastro
      >
        <Text style={styles.registerButtonText}>Não tenho cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f7f8fc',
  },
  forgotPasswordText: {
    color: '#555',
    textAlign: 'right',
    marginBottom: 40,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#28a745',
    borderWidth: 1,
  },
  registerButtonText: {
    color: '#28a745',
    fontSize: 16,
  },
});

export default LoginScreen;
