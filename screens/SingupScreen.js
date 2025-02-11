import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { bgImage } from "../assets/images/backgroundWave.png";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function SingupScreen() {
    const navigation = useNavigation()
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
          className="h-[255] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl"
          >
            SingUp
          </Animated.Text>
        </View>
      </View>

      {/* form */}
      <View className="flex items-center mx-4 space-y-4">
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          className="bg-black/5 p-5 rounded-2xlw-full"
        >
          <TextInput placeholder="Email" placeholderTextColor={"gray"} />
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="bg-black/5 p-5 rounded-2xlw-full"
        >
          <TextInput placeholder="Password" placeholderTextColor={"gray"} />
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="w-full"
        >
          <TouchableOpacity className="w-full bg-purple-800 p-3 rounded-2xl mb-3">
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
          <TouchableOpacity onPress={()=> navigation.push("Login")}>
            <Text className="text-purple-800">Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
