import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [token, setToken] = useState(null);

    async function getToken() {
        const token = await AsyncStorage.getItem('@userToken');
        setToken(token);
    }
    useEffect(() => {
        getToken();
    }, []);

  return (
    <AuthContext.Provider value={{token, setToken, getToken}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;