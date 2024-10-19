import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
// Import components
import BalanceCard from '../components/BalanceCard';
import FreightCard from '../components/FreightCard';
import SupplyCard from '../components/SupplyCard';
import CategoriesCard from '../components/CategoriesCard'; // Importando o CategoriesCard

const FinanceDashboard = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState("Últimos fretes");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="bars" size={24} color="white" />
        <Text style={styles.headerTitle}>Início</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Balance Section */}
      <BalanceCard balance={35000.45} expenses={25000} income={15000} />

      {/* Categories Section */}
      <CategoriesCard
        freights={75540.45}
        income={3504}
        expenses={4535}
        supply={18750}
      />

      {/* Recent Freights or Supplies Section */}
      <View style={styles.freightsSectionWrapper}>
        <View style={styles.freightsSection}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedOption}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedOption(itemValue)}
              mode="dropdown"
            >
              <Picker.Item label="Últimos fretes" value="Últimos fretes" />
              <Picker.Item label="Últimos abastecimentos" value="Últimos abastecimentos" />
            </Picker>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {selectedOption === "Últimos fretes" && (
              <>
                <FreightCard departure={37.57} arrival={37.57} tariff={120.00} grossFreight={15000.00} netFreight={12758.70} />
                <FreightCard departure={37.57} arrival={37.57} tariff={120.00} grossFreight={15000.00} netFreight={12758.70} />
                <FreightCard departure={37.57} arrival={37.57} tariff={120.00} grossFreight={15000.00} netFreight={12758.70} />
              </>
            )}
            {selectedOption === "Últimos abastecimentos" && (
              <>
                <SupplyCard fuelQuantity={120} purchaseValue={500.00} fuelType="Diesel" invoiceNumber="154" unitPrice={7.45} nameGasStation='Posto X' />
                <SupplyCard fuelQuantity={100} purchaseValue={450.00} fuelType="Gasolina" invoiceNumber="155" unitPrice={7.12} nameGasStation='Posto Y' />
                <SupplyCard fuelQuantity={130} purchaseValue={520.00} fuelType="Diesel S10" invoiceNumber="156" unitPrice={7.27} nameGasStation='Posto Z'  />
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
