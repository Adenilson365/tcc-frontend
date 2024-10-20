import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import apiConfig from '../config/apiConfig';
import { Ionicons } from '@expo/vector-icons';
// Import components
import BalanceCard from '../components/BalanceCard';
import FreightCard from '../components/FreightCard';
import SupplyCard from '../components/SupplyCard';
import ExpenseCard from '../components/ExpenseCard';
import RevenueCard from '../components/RevenueCard';
import CategoriesCard from '../components/CategoriesCard';

const FinanceDashboard = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(1);
  const [freights, setFreights] = useState([]);
  const [calculatorData, setCalculatorData] = useState({
    totalExpenses: 0,
    totalSupplies: 0,
    totalFreights: 0,
    totalRevenues: 0,
    netValue: 0,
  });
  const options = [
    { key: 1, option: 'Últimos fretes' },
    { key: 2, option: 'Últimos abastecimentos' },
    { key: 3, option: 'Últimas despesas' },
    { key: 4, option: 'Últimas receitas' },
  ];

  // Função para buscar os dados do calculator
  const fetchCalculatorData = async () => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
      if (token) {
        const response = await axios.get(`${apiConfig.baseURL}/calculator`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCalculatorData(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar os dados do calculator:', error);
      console.log('Detalhes do erro ao buscar calculator:', error.response);
    }
  };

  const fetchFreights = async () => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
      if (token) {
        const response = await axios.get(`${apiConfig.baseURL}/freights`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFreights(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar os fretes:', error);
      console.log('Detalhes do erro ao buscar fretes:', error.response);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFreights();
     fetchCalculatorData();
    }, [])
  );

  let optionsPicker = options.map((item) => {
    return <Picker.Item key={item.key} value={item.key} label={item.option} />;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="bars" size={24} color="white" />
        <Text style={styles.headerTitle}>Início</Text>
        <View style={{ width: 24 }} />
   {/*      <TouchableOpacity onPress={() => setShowValues(!showValues)} style={styles.balanceContainer}>
        <Ionicons name={showValues ? 'eye' : 'eye-off'} size={24} color="green" />
        </TouchableOpacity> */}
      </View>

      {/* Balance Section */}
      <BalanceCard
        balance={calculatorData?.netValue || 0}
        expenses={calculatorData?.totalExpenses || 0}
        income={calculatorData?.totalReceived || 0}
      />

      {/* Categories Section */}
      <CategoriesCard
          freights={calculatorData?.totalFreights || 0}
          income={calculatorData?.totalRevenues || 0}
          expenses={calculatorData?.totalExpenses || 0}
          supply={calculatorData?.totalSupplies || 0}
/>

      {/* Recent Freights or Supplies Section */}
      <View style={styles.freightsSectionWrapper}>
        <View style={styles.freightsSection}>
          <View style={styles.pickerWrapper}>
            <Picker
              style={styles.picker}
              selectedValue={selectedOption}
              onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
              mode="dropdown"
            >
              {optionsPicker}
            </Picker>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {selectedOption === options[0].key &&
              freights.map((freight) => (
                <FreightCard
                key={freight.id}
                freightId={freight.id}
                departure={freight.exit_weight || 0}
                arrival={freight.arrival_weight || 0}
                tariff={freight.tariff || 0}
                grossFreight={freight.gross_freight || 0}
                netFreight={freight.net_freight || 0}
                />
              ))}
            {selectedOption === options[1].key && (
              <>
                <SupplyCard fuelQuantity={120} purchaseValue={500.0} fuelType="Diesel" invoiceNumber="154" unitPrice={7.45} nameGasStation="Posto X" />
                <SupplyCard fuelQuantity={100} purchaseValue={450.0} fuelType="Gasolina" invoiceNumber="155" unitPrice={7.12} nameGasStation="Posto Y" />
                <SupplyCard fuelQuantity={130} purchaseValue={520.0} fuelType="Diesel S10" invoiceNumber="156" unitPrice={7.27} nameGasStation="Posto Z" />
              </>
            )}
            {selectedOption === options[2].key && (
              <>
                <ExpenseCard purchaseValue={500} description="Manutenção" />
                <ExpenseCard purchaseValue={200} description="Pedágio" />
                <ExpenseCard purchaseValue={300} description="Alimentação" />
              </>
            )}
            {selectedOption === options[3].key && (
              <>
                <RevenueCard value={1500} description="Frete" />
                <RevenueCard value={350} description="Venda de peças" />
                <RevenueCard value={200} description="Serviços" />
              </>
            )}
          </ScrollView>
        </View>
      </View>

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
  freightsSectionWrapper: {
    flex: 1,
  },
  freightsSection: {
    margin: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 0,
    backgroundColor: '#fff',
    marginBottom: 5,
    width: '100%',
    overflow: 'hidden',
  },
  picker: {
    height: 45,
    marginTop: -8, // Ajustar o alinhamento do texto no Android
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

export default FinanceDashboard;
