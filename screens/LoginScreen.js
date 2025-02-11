import "../global.css";

import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/backgroundWave.png")}
      />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[160] w-[65]" source={require("../assets/images/light.png")}/>
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[100] w-[40]" source={require("../assets/images/light.png")}/>
      </View>

      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <Animated.Image
            entering={FadeInUp.delay(300).duration(1000).springify()}
            className="h-[70] w-1/2 self-center"
            source={require("../assets/images/LogoRukWhite.png")}/>
            
        {/* form */}
        <View className="flex items-center mx-4 gap-5">
          
          <Animated.View
            entering={FadeInUp.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder="Password" placeholderTextColor={"gray"} secureTextEntry={true} />
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(400).duration(1000).springify()}
            className="w-full">
            <TouchableOpacity className="w-full bg-color-ruk p-3 rounded-2xl mb-3" onPress={()=> navigation.push("ListUser")}>
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInUp.delay(600).duration(1000).springify()}
            className="flex-row justify-center">
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("SingUp")}>
              <Text className="text-purple-800 font-bold"> SingUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>

      
    </View>
  );
}
