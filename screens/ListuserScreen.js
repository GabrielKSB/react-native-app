import "../global.css";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { User, UserList } from "../data/userList";
import { UserItem } from "../components/UserListItem";
import { UserHeader } from "../components/UserListHeader/UserListHeader"
import { SeparatorItem } from "../components/SeparatorItem/SeparatorItem"

export default function ListuserScreen() {
  const navigation = useNavigation();

  function renderItem({item}){
    return <UserItem {...item} />
  }

  return (    
      <FlatList 
        ItemSeparatorComponent={SeparatorItem}
        ListHeaderComponent={UserHeader}
        keyExtractor={(item) => item.name}
        data={UserList}
        renderItem={renderItem}
      />
  );
}
