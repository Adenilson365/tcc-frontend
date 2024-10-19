import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Lógica para salvar os dados do frete
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="bars" size={24} color="white" />
        <Text style={styles.headerTitle}>Fretes</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Freight Form */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Cadastro de Fretes</Text>
        <TextInput
          style={styles.input}
          placeholder="Frete Bruto"
          keyboardType="numeric"
          value={formData.gross_freight}
          onChangeText={(value) => handleInputChange('gross_freight', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Frete Líquido"
          keyboardType="numeric"
          value={formData.net_freight}
          onChangeText={(value) => handleInputChange('net_freight', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Adiantamento"
          keyboardType="numeric"
          value={formData.advance}
          onChangeText={(value) => handleInputChange('advance', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Perda de Valor"
          keyboardType="numeric"
          value={formData.money_value_loss}
          onChangeText={(value) => handleInputChange('money_value_loss', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Despesas"
          keyboardType="numeric"
          value={formData.expents}
          onChangeText={(value) => handleInputChange('expents', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Lucro"
          keyboardType="numeric"
          value={formData.profit}
          onChangeText={(value) => handleInputChange('profit', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso de Saída"
          keyboardType="numeric"
          value={formData.exit_weight}
          onChangeText={(value) => handleInputChange('exit_weight', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso de Chegada"
          keyboardType="numeric"
          value={formData.arrival_weight}
          onChangeText={(value) => handleInputChange('arrival_weight', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Origem"
          value={formData.origin}
          onChangeText={(value) => handleInputChange('origin', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Destino"
          value={formData.destination}
          onChangeText={(value) => handleInputChange('destination', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor Adicional"
          keyboardType="numeric"
          value={formData.additional}
          onChangeText={(value) => handleInputChange('additional', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={formData.description}
          onChangeText={(value) => handleInputChange('description', value)}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Salvar Frete</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={styles.bottomNavbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FinanceDashboard')}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FreightScreen')}>
          <FontAwesome name="truck" size={24} color="white" />
          <Text style={styles.navText}>Fretes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="tint" size={24} color="white" />
          <Text style={styles.navText}>Diesel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="file-text" size={24} color="white" />
          <Text style={styles.navText}>Despesa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="money" size={24} color="white" />
          <Text style={styles.navText}>Receita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    //paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  submitButton: {
    height: 50,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
  },
});

export default FreightScreen;
