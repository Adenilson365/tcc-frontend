import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../config/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setToken } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.200.101:3333/sessions', {
        email,
        password: senha,
      });

      const { token } = response.data;
      await AsyncStorage.setItem('@userToken', token);
      setToken(token);
      navigation.navigate('FinaceDashboard');

    } catch (error) {
      console.log(error.response?.data || error.message);
      Alert.alert('Erro de Login', 'Nome ou senha incorretos');
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
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Digite a senha cadastrada"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={() => navigation.navigate('Cadastro')} 
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f7f8fc',
  },
  inputPassword: {
    flex: 1,
    height: 50,
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
