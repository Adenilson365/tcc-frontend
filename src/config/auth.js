import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import apiConfig from "../config/apiConfig";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children, navigation }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);


  async function getToken() {
    try {
      const storedToken = await AsyncStorage.getItem('@userToken');
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error('Erro ao obter o token:', error);
    }
  }

  async function getUserInfo() {
    if (!token) return;

    try {
      const response = await axios.get(`${apiConfig.baseURL}/users/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
      if (error.response) {
        console.log('Detalhes do erro ao buscar informações do usuário:', error.response);
      }
    }
  }

  async function logout() {
    try {
      await AsyncStorage.removeItem('@userToken');
      setToken(null);
      setUser(null);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ signed: !!user, token, setToken, getToken, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
