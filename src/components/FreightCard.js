import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { formatCurrency } from '../utils/formatcurrency';

const FreightCard = ({ departure, arrival, tariff, grossFreight, netFreight }) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Frete #154</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Saída</Text>
          <Text style={styles.value}>{departure}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Chegada</Text>
          <Text style={styles.value}>{arrival}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Tarifa</Text>
          <Text style={styles.value}>{formatCurrency(tariff)}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Frete Bruto</Text>
          <Text style={styles.value}>{formatCurrency(grossFreight)}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Líquido</Text>
          <Text style={styles.value}>{formatCurrency(netFreight)}</Text>
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
    width: 250, // Alargando o card para ocupar mais espaço horizontal
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
    marginBottom: 3, 
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
    borderRadius: 1,
    borderColor: '#3dc772', 
    borderWidth: 1,

    paddingVertical: 5, 
    paddingHorizontal: 10, 
    borderRadius: 2, 
  },
  buttonText: {
    color: '#3dc772', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});

export default FreightCard;
