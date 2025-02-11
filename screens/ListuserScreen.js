import "../global.css";

import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { UserItem } from "../components/UserListItem";


export default function ListuserScreen() {
  const navigation = useNavigation();


  const [users, setUsers] = useState([]); 

  async function listUsers() {

    try{
      const usersFromApi = await api.get("users/listUsers");
    
      setUsers(usersFromApi.data);

    } catch(err){
      console.log(err)
    }
    
  }

  console.log("Lista de Usuarios: ",users)

  const dataUserList = [
    {
      id: 1,
      email: "gabrielTeste@email.com",
      area_code: 11,
      number: 972713344,
      createdAt: "02-02-2025",
      updatedAt: "02-02-2025",
    },
    {
      id: 2,
      email: "adrianoTeste@email.com",
      area_code: 11,
      number: 972713344,
      createdAt: "02-02-2025",
      updatedAt: "02-02-2025",
    },
  ];

  function renderItem({ item }) {
    return <UserItem {...item} />;
  }

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />

      <View className="h-1/3 w-full">
        <Animated.Image
          entering={FadeInUp.delay(100).duration(1000).springify()}
          className="h-full w-full absolute"
          source={require("../assets/images/listUser-cover.png")}
        />
      </View>

      <View className="w-full h-2/3 items-center">
        <Animated.Text 
        entering={FadeInUp.delay(200).duration(1000).springify()}
        className="font-bold text-2xl uppercase pt-3 text-color-ruk">
          Registered Users
        </Animated.Text>
        <TouchableOpacity onPress={() => navigation.push("Login")}>
          <Text className="text-purple-800 font-bold">Back</Text>
        </TouchableOpacity>

        <Animated.FlatList 
        entering={FadeInUp.delay(400).duration(1000).springify()}
          className="w-full"
          keyExtractor={(users) => users.id}
          data={users}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
