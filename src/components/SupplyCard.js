import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
//import utils
import { formatCurrency } from '../utils/formatcurrency';

const SupplyCard = ({ fuelQuantity, purchaseValue, fuelType, invoiceNumber, unitPrice, nameGasStation }) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cupom #{invoiceNumber}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Quantidade </Text>
          <Text style={styles.value}>{fuelQuantity} L</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Valor da Compra</Text>
          <Text style={styles.value}>{formatCurrency(purchaseValue)}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Tipo</Text>
          <Text style={styles.value}>{fuelType}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Preço/lt</Text>
          <Text style={styles.value}>{formatCurrency(unitPrice)}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Posto</Text>
          <Text style={styles.value}>{nameGasStation}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 8,
    elevation: 3,
    width: 300,
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
    marginBottom: 4,
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

export default SupplyCard;
