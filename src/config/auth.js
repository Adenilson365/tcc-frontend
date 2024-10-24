import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import apiConfig from "../config/apiConfig";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  async function getToken() {
    const storedToken = await AsyncStorage.getItem('@userToken');
    setToken(storedToken);
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
      console.log('Detalhes do erro ao buscar informações do usuário:', error.response);
    }
  }

  useEffect(() => {
    getToken();
    console.log(token);
  }, []);

  useEffect(() => {
    if (token) {
      getUserInfo();
      console.log(user);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, getToken, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
