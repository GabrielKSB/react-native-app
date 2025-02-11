import "../global.css";

import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function SingupScreen() {
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

      <View className="h-full w-full flex justify-around pt-60 pb-5">
        <Animated.Image
            entering={FadeInUp.delay(300).duration(1000).springify()}
            className="h-[70] w-1/2 self-center"
            source={require("../assets/images/LogoRukWhite.png")}/>
            
        {/* form */}
        <View className="flex items-center mx-4 gap-5 pt-20">
        <Animated.View
            entering={FadeInUp.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Name" placeholderTextColor={"gray"} />
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>

          <View className="flex-row gap-8 items-center mx-4">
            <Animated.View
              entering={FadeInUp.delay(400).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-1/4 mb-3 flex-row">
              <TextInput placeholder="DDD" placeholderTextColor={"gray"} />
            </Animated.View>

            <Animated.View
              entering={FadeInUp.delay(400).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-3/4 mb-3 flex-row">
              <TextInput placeholder="Number" placeholderTextColor={"gray"} />
            </Animated.View> 
          </View>
          
          <Animated.View
              entering={FadeInUp.delay(600).duration(1000).springify()}
              className="bg-black/5 p-5 rounded-2xl w-full mb-3">
              <TextInput placeholder="Password" placeholderTextColor={"gray"} />
            </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(800).duration(1000).springify()}
            className="w-full">
            <TouchableOpacity className="w-full bg-color-ruk p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                SingUp
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInUp.delay(600).duration(1000).springify()}
            className="flex-row justify-center">
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
