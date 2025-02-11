import "../global.css";
import api from "../src/services/api"

import { View, Text, Image, TextInput, TouchableOpacity, Alert} from "react-native";
import { useState } from "react";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function SingupScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [area_code, setAreaCode] = useState("")
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")

  async function RegisterUsers() {

    if(name == "" || email == "" || area_code == "" || number == "" || password == ""){
       Alert.alert("Insira todos os Dados")
       setName("")
       setEmail("")
       setAreaCode("")
       setNumber("")
       setPassword("")
    } 

    try {
      await api.post("/users/register",{
        name: name,
        email: email,
        area_code: area_code,
        number: number,
        password: password,
      });

      Alert.alert("Usuário Cadastrado")
      navigation.push("Login");
    } catch (err) {
      Alert.alert("Insiras os Dados Corretamente")
    }
  }


  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/backgroundWave.png")}
      />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[100] w-[40]"
          source={require("../assets/images/light.png")}
        />
      </View>

      <View className="h-full w-full flex justify-around pt-60 pb-10">
        <Animated.Image
          entering={FadeInUp.delay(300).duration(1000).springify()}
          className="h-[70] w-1/2 self-center"
          source={require("../assets/images/LogoRukWhite.png")}
        />

        {/* form */}
        
        <View className="flex items-center mx-4 gap-5 pt-20">
        
          <Animated.View
            entering={FadeInUp.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Name" placeholderTextColor={"gray"}
            value={name}
            onChangeText={(texto) => setName(texto)} />
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} 
            value={email}
            onChangeText={(texto) => setEmail(texto)} />
          </Animated.View>

          <View className="flex-row gap-8 items-center mx-4">
            <Animated.View
              entering={FadeInUp.delay(400).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-1/4 mb-3 flex-row"
            >
              <TextInput placeholder="DDD" placeholderTextColor={"gray"} 
              value={area_code}
              onChangeText={(texto) => setAreaCode(texto)}/>
            </Animated.View>

            <Animated.View
              entering={FadeInUp.delay(400).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-3/4 mb-3 flex-row"
            >
              <TextInput placeholder="Number" placeholderTextColor={"gray"} 
              value={number}
              onChangeText={(texto) => setNumber(texto)}/>
            </Animated.View>
          </View>

          <Animated.View
            entering={FadeInUp.delay(600).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput placeholder="Password" placeholderTextColor={"gray"} 
            value={password}
            onChangeText={(texto) => setPassword(texto)} />
          </Animated.View>
          
          <Animated.View
            entering={FadeInUp.delay(800).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity 
            onPress={RegisterUsers}
            className="w-full bg-color-ruk p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                SingUp
              </Text>
            </TouchableOpacity>

          </Animated.View>
          <Animated.View
            entering={FadeInUp.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text className="text-purple-800 font-bold"> Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
