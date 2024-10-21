import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from '../config/apiConfig';

export const fetchData = async (endpoint, setDataFunction, monthIndex, year) => {
    try {
      const token = await AsyncStorage.getItem('@userToken');
      if (token) {
        const response = await axios.get(`${apiConfig.baseURL}/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            month: `${year}-${monthIndex + 1}`,
          },
        });
        setDataFunction(response.data);
      }
    } catch (error) {
      console.error(`Erro ao buscar os dados de ${endpoint}:`, error);
      console.log(`Detalhes do erro ao buscar ${endpoint}:`, error.response);
    }
  };
  