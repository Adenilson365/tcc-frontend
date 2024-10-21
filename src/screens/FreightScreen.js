import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from '../config/apiConfig';
//import styles
import {formBtnStyles, headerStyles, navBarStyles } from '../styles/commonStyles';

const FreightScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    gross_freight: '',
    net_freight: '',
    advance: '',
    money_value_loss: '',
    expents: '',
    profit: '',
    exit_weight: '',
    arrival_weight: '',
    origin: '',
    destination: '',
    completed: false,
    additional: '',
    description: '',
    tariff: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
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
        `${apiConfig.baseURL}/freights`,
        formattedData,
        config
      );

      if (response.status === 200 || response.status === 201) {
        Alert.alert('Sucesso', 'Frete lançado com sucesso!');
        // Limpar os campos do formulário
        setFormData({
          gross_freight: '',
          net_freight: '',
          advance: '',
          money_value_loss: '',
          expents: '',
          profit: '',
          exit_weight: '',
          arrival_weight: '',
          origin: '',
          destination: '',
          completed: false,
          additional: '',
          description: '',
          tariff: '',
        });
        // Navegar para a tela de lista de fretes ou outra tela relevante
        navigation.navigate('FreightScreen');
      } else {
        Alert.alert('Erro', 'Não foi possível cadastrar o frete. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar frete:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar o frete.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      {/* Header */}
      <View style={headerStyles.header}>
        <FontAwesome name="bars" size={24} color="white" />
        <Text style={headerStyles.headerTitle}>Fretes</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Freight Form */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Lançamento de Frete</Text>
        <Text style={styles.label}>Frete bruto (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor bruto do frete"
          keyboardType="numeric"
          value={formData.gross_freight}
          onChangeText={(value) => handleInputChange('gross_freight', value)}
        />
        <Text style={styles.label}>Frete líquido (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor líquido do frete"
          keyboardType="numeric"
          value={formData.net_freight}
          onChangeText={(value) => handleInputChange('net_freight', value)}
        />
        <Text style={styles.label}>Adiantamento</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor do adiantamento"
          keyboardType="numeric"
          value={formData.advance}
          onChangeText={(value) => handleInputChange('advance', value)}
        />
        <Text style={styles.label}>Tarifa (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor da tarifa"
          keyboardType="numeric"
          value={formData.tariff}
          onChangeText={(value) => handleInputChange('tariff', value)}
        />
        <Text style={styles.label}>Quebra</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor da perda"
          keyboardType="numeric"
          value={formData.money_value_loss}
          onChangeText={(value) => handleInputChange('money_value_loss', value)}
        />
        <Text style={styles.label}>Despesas</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor das despesas"
          keyboardType="numeric"
          value={formData.expents}
          onChangeText={(value) => handleInputChange('expents', value)}
        />
        <Text style={styles.label}>Lucro</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor do lucro"
          keyboardType="numeric"
          value={formData.profit}
          onChangeText={(value) => handleInputChange('profit', value)}
        />
        <Text style={styles.label}>Peso de Saída (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o peso de saída da carga"
          keyboardType="numeric"
          value={formData.exit_weight}
          onChangeText={(value) => handleInputChange('exit_weight', value)}
        />
        <Text style={styles.label}>Peso de Chegada (obrigatório)</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o peso de chegada da carga"
          keyboardType="numeric"
          value={formData.arrival_weight}
          onChangeText={(value) => handleInputChange('arrival_weight', value)}
        />
        <Text style={styles.label}>Origem</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a cidade de origem"
          value={formData.origin}
          onChangeText={(value) => handleInputChange('origin', value)}
        />
        <Text style={styles.label}>Destino</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a cidade de destino"
          value={formData.destination}
          onChangeText={(value) => handleInputChange('destination', value)}
        />
        <Text style={styles.label}>Adicional de Frete</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor adicional aplicado"
          keyboardType="numeric"
          value={formData.additional}
          onChangeText={(value) => handleInputChange('additional', value)}
        />
        <Text style={styles.label}>Observações</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="(Opcional) Informe a descrição detalhada do frete"
          value={formData.description}
          onChangeText={(value) => handleInputChange('description', value)}
          multiline
        />

        <TouchableOpacity style={formBtnStyles.submitButton} onPress={handleSubmit}>
          <Text style={formBtnStyles.submitButtonText}>Salvar Frete</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={formBtnStyles.cancelButton} onPress={() => navigation.navigate('FinanceDashboard')}>
            <Text style={formBtnStyles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={formBtnStyles.clearButton} onPress={() => setFormData({
            gross_freight: '',
            net_freight: '',
            advance: '',
            money_value_loss: '',
            expents: '',
            profit: '',
            exit_weight: '',
            arrival_weight: '',
            origin: '',
            destination: '',
            completed: false,
            additional: '',
            description: '',
            tariff: '',
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
        <TouchableOpacity style={navBarStyles.navItem} onPress={() => navigation.navigate('FreightScreen')}>
          <FontAwesome name="truck" size={24} color="white" />
          <Text style={navBarStyles.navText}>Fretes</Text>
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

export default FreightScreen;
