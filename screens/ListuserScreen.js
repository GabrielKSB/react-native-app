import "../global.css";

import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { UserItem } from "../components/UserListItem";
import {useAuth} from "../hooks/userAuth"
import api from "../src/services/api"


export default function ListuserScreen() {
  const navigation = useNavigation();


  const {singout} = useAuth();

  const [users, setUsers] = useState([]); 

  async function listUsers() {

    try{
      const usersFromApi = await api.get("users/listUsers");
    
      setUsers(usersFromApi.data);
    } catch(err){
      console.log(err)
    }
    
  }

  useEffect(() => {
    listUsers();
  }, []);

  console.log("Lista de Usuarios: ",users)


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
        <TouchableOpacity onPress={singout}>
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
