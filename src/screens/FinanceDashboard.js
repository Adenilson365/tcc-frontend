import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  const [supplies, setSupplies] = useState([]);
  const [revenues, setRevenues] = useState([]);
  const [expenses, setExpenses] = useState([]);
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
  const [showValues, setShowValues] = useState(false); //Sempre que abrir o app os valores estarão ocultos

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

  const handlePreviousMonth = () => {
    setCurrentMonthIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? 11 : prevIndex - 1;
      fetchCalculatorData(newIndex); 
      fetchFreights(newIndex);
      fetchSupplies(newIndex);
      fetchRevenues(newIndex);
      fetchExpenses(newIndex);  
      return newIndex;
    });
  };
  
  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => {
      const newIndex = prevIndex === 11 ? 0 : prevIndex + 1;
      fetchCalculatorData(newIndex); 
      fetchFreights(newIndex); 
      fetchSupplies(newIndex);
      fetchRevenues(newIndex);
      fetchExpenses(newIndex);
      return newIndex;
    });
  };
  

  // Função para buscar os dados do calculator
  const fetchCalculatorData = async (monthIndex) => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
      if (token) {
        const response = await axios.get(`${apiConfig.baseURL}/calculator`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            month: `2024-${monthIndex + 1}`, 
          },
        });
        setCalculatorData(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar os dados do calculator:', error);
      console.log('Detalhes do erro ao buscar calculator:', error.response);
    }
  };
  
  
  const fetchFreights = async (monthIndex) => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
      if (token) {
        const response = await axios.get(`${apiConfig.baseURL}/freights`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            month: `2024-${monthIndex + 1}`, 
          },
        });
        setFreights(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar os fretes:', error);
      console.log('Detalhes do erro ao buscar fretes:', error.response);
    }
  };

  const fetchSupplies = async (monthIndex) => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
      if (token) {
        const response = await axios.get(`${apiConfig.baseURL}/supplies`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            month: `2024-${monthIndex + 1}`,
          },
        });
        setSupplies(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar os abastecimentos:', error);
      console.log('Detalhes do erro ao buscar abastecimentos:', error.response);
    }
  };

  const fetchRevenues = async (monthIndex) => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
      if (token) {
        const response = await axios.get(`${apiConfig.baseURL}/revenues`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            month: `2024-${monthIndex + 1}`,
          },
        });
        setRevenues(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar as receitas:', error);
      console.log('Detalhes do erro ao buscar receitas:', error.response);
    }
  };
  
  const fetchExpenses = async (monthIndex) => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
      if (token) {
        const response = await axios.get(`${apiConfig.baseURL}/expenses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            month: `2024-${monthIndex + 1}`,
          },
        });
        setExpenses(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar as despesas:', error);
      console.log('Detalhes do erro ao buscar despesas:', error.response);
    }
  };


  useFocusEffect(
    useCallback(() => {
     setCurrentMonthIndex(new Date().getMonth());
     fetchFreights(currentMonthIndex);
     fetchCalculatorData(currentMonthIndex);
     fetchSupplies(currentMonthIndex);
     fetchRevenues(currentMonthIndex);
     fetchExpenses(currentMonthIndex);
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
        <TouchableOpacity onPress={() => setShowValues(!showValues)}  >
        <Ionicons name={showValues ? 'eye' : 'eye-off'} size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.monthContainer}>
        <TouchableOpacity onPress={handlePreviousMonth}>
          <Ionicons name="chevron-back" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.monthText}>{months[currentMonthIndex]}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Ionicons name="chevron-forward" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* Balance Section */}
      <BalanceCard
        balance={calculatorData?.netValue || 0}
        expenses={calculatorData?.totalExpenses || 0}
        income={calculatorData?.totalReceived || 0}
        showValues={showValues}
      />

      {/* Categories Section */}
      <CategoriesCard
          freights={calculatorData?.totalFreights || 0}
          income={calculatorData?.totalRevenues || 0}
          expenses={calculatorData?.totalExpenses || 0}
          supply={calculatorData?.totalSupplies || 0}
          showValues={showValues}
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
            {selectedOption === options[1].key &&
              supplies.map((supply) => (
                <SupplyCard
                  key={supply.id}
                  fuelQuantity={supply.fuel_quantity || 0}
                  purchaseValue={supply.purchase_value || 0}
                  fuelType={supply.fuel_type || ''}
                  invoiceNumber={supply.invoice_number || ''}
                  unitPrice={supply.unit_price || 0}
                  nameGasStation={supply.name_gas_station || ''}
                />
              ))}

            {selectedOption === options[2].key &&
              expenses.map((expense) => (
                <ExpenseCard
                  key={expense.id}
                  purchaseValue={expense.purchase_value || 0}
                  description={expense.description || ''}
                />
              ))}
            {selectedOption === options[3].key &&
              revenues.map((revenue) => (
                <RevenueCard
                  key={revenue.id}
                  value={revenue.value || 0}
                  description={revenue.description || ''}
                />
              ))}
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
    justifyContent:  'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    paddingHorizontal: 30,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    flex: 1, 
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
    marginTop: -8, 
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1,
  },
  navText: {
    color: 'white',
    fontSize: 12, 
    textAlign: 'center', 
  },
  btn: {
    backgroundColor: 'black',
  },

  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,

  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },

});

export default FinanceDashboard;
