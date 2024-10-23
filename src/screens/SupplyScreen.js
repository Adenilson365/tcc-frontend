import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AuthContext } from '../config/auth';
//import config 
import apiConfig from '../config/apiConfig';
//styles
import {formBtnStyles, headerStyles, navBarStyles } from '../styles/commonStyles';

const SupplyScreen = () => {
  const { token } = useContext(AuthContext);
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    fuel_quantity: '',
    purchase_value: '',
    fuel_type: '',
    invoice_number: '',
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

      // Converter campos vazios para null
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
        `${apiConfig.baseURL}/supplies`,
        formattedData,
        config
      );

      if (response.status === 200 || response.status === 201) {
        Alert.alert('Sucesso', 'Abastecimento lançado com sucesso!');
        // Limpar os campos do formulário
        setFormData({
          fuel_quantity: '',
          purchase_value: '',
          fuel_type: '',
          invoice_number: '',
          description: '',
        });
      } else {
        Alert.alert('Erro', 'Não foi possível cadastrar o abastecimento. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar abastecimento:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar o abastecimento.');
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
        <Text style={headerStyles.headerTitle}>Abastecimentos</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Supply Form */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Lançamento de Abastecimento</Text>
        <Text style={styles.label}>Quantidade de Combustível (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a quantidade de combustível"
          keyboardType="numeric"
          value={formData.fuel_quantity}
          onChangeText={(value) => handleInputChange('fuel_quantity', value)}
        />
        <Text style={styles.label}>Valor da Compra (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor da compra"
          keyboardType="numeric"
          value={formData.purchase_value}
          onChangeText={(value) => handleInputChange('purchase_value', value)}
        />
        <Text style={styles.label}>Tipo de Combustível</Text>
        <Picker
          selectedValue={formData.fuel_type}
          style={[styles.input, styles.pickerInput]}
          onValueChange={(value) => handleInputChange('fuel_type', value)}
        >
          <Picker.Item label="Selecione o tipo de combustível" value="" />
          <Picker.Item label="Diesel S500" value="Diesel S500" />
          <Picker.Item label="Diesel S10" value="Diesel S10" />
          <Picker.Item label="Outros" value="Outros" />
        </Picker>
        <Text style={styles.label}>Número da Nota Fiscal</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o número da nota fiscal"
          value={formData.invoice_number}
          onChangeText={(value) => handleInputChange('invoice_number', value)}
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="(Opcional) Informe a descrição"
          value={formData.description}
          onChangeText={(value) => handleInputChange('description', value)}
          multiline
        />

        <TouchableOpacity style={formBtnStyles.submitButton} onPress={handleSubmit}>
          <Text style={formBtnStyles.submitButtonText}>Salvar Abastecimento</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={formBtnStyles.cancelButton} onPress={() => navigation.navigate('FinanceDashboard')}>
            <Text style={formBtnStyles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={formBtnStyles.clearButton} onPress={() => setFormData({
            fuel_quantity: '',
            purchase_value: '',
            fuel_type: '',
            invoice_number: '',
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
        <TouchableOpacity style={navBarStyles.navItem} onPress={() => navigation.navigate('SupplyScreen')}>
          <FontAwesome name="tint" size={24} color="white" />
          <Text style={navBarStyles.navText}>Abastecimentos</Text>
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
  pickerInput: {
    paddingVertical: 12,
  },
});

export default SupplyScreen;
