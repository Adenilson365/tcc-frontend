import axios from 'axios';
import { useContext } from 'react';
import apiConfig from '../config/apiConfig';
import AuthProvider from '../config/auth';

export const fetchData = async (endpoint, setDataFunction, monthIndex, year) => {
    try {
      const { token } = useContext(AuthProvider);
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
  