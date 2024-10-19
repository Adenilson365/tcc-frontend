import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import utils
import { formatCurrency } from '../utils/formatcurrency';

const CategoriesCard = ({ freights, income, expenses, supply }) => {
  return (
    <View style={styles.categoriesSection}>
      <Text style={styles.categoriesTitle}>Categorias:</Text>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>Fretes:</Text>
        <Text style={styles.categoryValue}>{formatCurrency(freights)}</Text>
      </View>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>Receitas:</Text>
        <Text style={styles.categoryValue}>{formatCurrency(income)}</Text>
      </View>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>Despesas:</Text>
        <Text style={styles.categoryValueExpense}> {formatCurrency(expenses)}</Text>
      </View>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>Abastecimentos:</Text>
        <Text style={styles.categoryValueExpense}>{formatCurrency(supply)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesSection: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    elevation: 5,
  },
  categoriesTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 16,
  },
  categoryValue: {
    fontSize: 16,
    color: 'green',
  },
  categoryValueExpense: {
    fontSize: 16,
    color: 'red',
  },
});

export default CategoriesCard;
