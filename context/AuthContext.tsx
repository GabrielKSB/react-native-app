import { UserData } from "@/data/userList";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../src/services/api"
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProviderDataProps = {
    token: string,
    singout:() => void,
    singin: ({
        email,
        password
    }:{
        email: string,
        password: string,
    }) => Promise<void>
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProviderDataProps>({} as AuthContextProviderDataProps)

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
 const [user, setUser] = useState<UserData>();
 const [token, setToken] = useState("");

const takeToken = async() => {
    
   const userToken = await AsyncStorage.getItem("UserToken")
   if(userToken){
    api.defaults.headers.common.Authorization = `Bearer ${userToken}`
    setToken(userToken)
   }
}

 useEffect(()=>{
    takeToken()
 },[])

const singout = async() => {
    await AsyncStorage.removeItem("UserToken")
    setToken("")
}

 const singin = async(
    {
        email,
        password
    }:{
        email: string,
        password: string,
    }
 ) => {

    try {
        const {data} = await api.post("/users/login",{
          email: email,
          password: password,
        })
        console.log(data)

        api.defaults.headers.common.Authorization = `Bearer ${data}`

        await AsyncStorage.setItem("UserToken", data)

        setToken(data)
      } catch (err) {
        Alert.alert("Email ou Senha Inválidas")
      }

 }
 
 return (
    <AuthContext.Provider value ={{
        singin, token, singout
    }}>
        {children}

    </AuthContext.Provider>
 )

}