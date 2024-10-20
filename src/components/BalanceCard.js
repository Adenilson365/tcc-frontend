import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { formatCurrency } from '../utils/formatcurrency';

const BalanceCard = ({ balance, income, expenses }) => {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
  const [showValues, setShowValues] = useState(false);

  const handlePreviousMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePreviousMonth}>
          <Ionicons name="chevron-back" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.monthText}>{months[currentMonthIndex]}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Ionicons name="chevron-forward" size={24} color="green" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setShowValues(!showValues)} style={styles.balanceContainer}>
        <Ionicons name={showValues ? 'eye' : 'eye-off'} size={24} color="green" />
        <Text style={styles.balanceText}>Saldo</Text>
        <Text style={styles.amountText}>{showValues ? formatCurrency(balance) : '-------'}</Text>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.labelItem}>
          <MaterialIcons name="attach-money" size={28} color="#3dc772" />
          </View>
          <View style={styles.valueContainer}>
          <Text style={styles.detailText}>Receitas</Text>
          <Text style={styles.amountDetailText}>{showValues ? formatCurrency(income) : '-------'}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.labelItem}>
          <MaterialIcons name="money-off" size={28} color="#DF5e5b" />
          </View>
          <View style={styles.valueContainer}>
          <Text style={styles.detailText}>Despesas</Text>
          <Text style={styles.expenseDetailText}>
  {showValues ? formatCurrency(expenses) : '-------'}
</Text>
        </View>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  balanceContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 16,
    color: '#303e4b',
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#303e4b',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailText: {
    fontSize: 14,
    color: 'grey',
    //marginTop: 5,
  },
  amountDetailText: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: '#3dc772',
    //marginTop: 5,
  },
  expenseDetailText: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: '#DF5e5b',
    //marginTop: 5,
  },
  labelItem: {
    flexDirection: 'row',
    marginRight: -5,

  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  valueContainer: {
    marginLeft: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default BalanceCard;
