import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import apiConfig from '../config/apiConfig';
import { AuthContext } from '../config/auth';
//import styles
import {formBtnStyles, headerStyles, navBarStyles } from '../styles/commonStyles';

const ExpenseScreen = () => {
  const { token } = useContext(AuthContext);
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    purchase_value: '',
    description: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (!token) {
        Alert.alert('Erro', 'Usuário não autenticado. Faça login novamente.');
        return;
      }
      const formattedData = {};
      for (const key in formData) {
        formattedData[key] = formData[key] === '' ? null : formData[key];
      }
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.post(
        `${apiConfig.baseURL}/expenses`,
        formattedData,
        config
      );
  
      if (response.status === 200 || response.status === 201) {
        Alert.alert('Sucesso', 'Despesa lançada com sucesso!');
        // Limpar os campos do formulário
        setFormData({
          purchase_value: '',
          description: '',
        });
      } else {
        Alert.alert('Erro', 'Não foi possível cadastrar a despesa. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar despesa:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar a despesa.');
    }
    };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      {/* Header */}
      <View style={headerStyles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('FinanceDashboard')}>
        <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={headerStyles.headerTitle}>Despesas</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Expense Form */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Lançamento de Despesa</Text>
        <Text style={styles.label}>Valor da Compra (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor da despesa"
          keyboardType="numeric"
          value={formData.purchase_value}
          onChangeText={(value) => handleInputChange('purchase_value', value)}
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="(Opcional) Informe a descrição detalhada da despesa"
          value={formData.description}
          onChangeText={(value) => handleInputChange('description', value)}
          multiline
        />

        <TouchableOpacity style={formBtnStyles.submitButton} onPress={handleSubmit}>
          <Text style={formBtnStyles.submitButtonText}>Salvar Despesa</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={formBtnStyles.cancelButton} onPress={() => navigation.navigate('FinanceDashboard')}>
            <Text style={formBtnStyles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={formBtnStyles.clearButton} onPress={() => setFormData({
            purchase_value: '',
            description: '',
          })}>
            <Text style={formBtnStyles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={navBarStyles.bottomNavbar}>
        <TouchableOpacity style={navBarStyles.navItem} onPress={() => navigation.navigate('FinanceDashboard')}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={navBarStyles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={navBarStyles.navItem} onPress={() => navigation.navigate('ExpenseScreen')}>
          <FontAwesome name="money" size={24} color="white" />
          <Text style={navBarStyles.navText}>Despesas</Text>
        </TouchableOpacity>
        {/* Outros itens de navegação */}
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },

  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#303e4b',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#303e4b',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default ExpenseScreen;
