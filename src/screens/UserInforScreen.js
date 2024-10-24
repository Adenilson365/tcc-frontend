import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../config/auth';
import { formateDate } from '../utils/formateDate';
import {headerStyles, } from '../styles/commonStyles';

function UserInfoScreen() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      <View style={headerStyles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={headerStyles.headerTitle}>Perfil</Text>
        <View/>
      </View>
      <View style={styles.userInfoContainer}>
        {user ? (
          <>
            <Text style={styles.userInfoText}>Nome: {user.name}</Text>
            <Text style={styles.userInfoText}>Email: {user.email}</Text>
            <Text style={styles.userInfoText}>Data de Cadastro: {formateDate(user.createdAt)}</Text>
          </>
        ) : (
          <Text style={styles.userInfoText}>Carregando informações do usuário...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  userInfoContainer: {
    padding: 20,
    marginTop: 20,
  },
  userInfoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});



export default UserInfoScreen;
