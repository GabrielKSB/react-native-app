import { View, Text, Image, TextInput} from 'react-native'
import { bgImage } from '../assets/images/backgroundWave.png'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function LoginScreen(){
    return(
        <View style={[{
            backgroundColor: "white", height: 100, width: 100,
        }]}>
            <StatusBar style='light'/>
            <Image style={[{
                height: 700, width: 400,
            }]} source={require("../assets/images/backgroundWave.png")}/>

            <View className='h-full w-full flex justify-around pt-40 pb-10'>
                <View className='flex items-center'>
                    <Text className='text-white font-bold tracking-wider text-5xl'>
                        Login
                    </Text>
                </View>
            </View>

            <View className='flex items-center mx-4 space-y-4'>
                <View className='bg-black/5 p-5 rounded-2xlw-full'>
                    <TextInput placeholder='Email'placeholderTextColor={'gray'}/>
                </View>
            </View>


            <View className='flex items-center mx-4 space-y-4'>
                <View className='bg-black/5 p-5 rounded-2xlw-full'>
                    <TextInput placeholder='Password'placeholderTextColor={'gray'}/>
                </View>
            </View>

        </View>
    )
}