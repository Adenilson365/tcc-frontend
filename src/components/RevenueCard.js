import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { formatCurrency } from '../utils/formatcurrency';

const RevenueCard = ({ value, description}) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Receita</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Valor</Text>
          <Text style={styles.value}>{value !== undefined ? formatCurrency(value) : '-'}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.value}>{description || '-'}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    borderRadius: 8,
    elevation: 3,
    width: 300, // Ajustando a largura do card
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303e4b',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#a0a6ac',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#303e4b',
  },
  button: {
    borderRadius: 2,
    borderColor: '#3dc772',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#3dc772',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RevenueCard;
