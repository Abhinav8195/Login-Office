import { View, Text, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation, useRouter} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

export default function Signin() {
    const navigation=useNavigation();
    const router=useRouter();
    const [email,setEmail]=useState('')

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])

    const handleBack=()=>{
        router.back()
    }

    const handleClick=()=>{
        router.replace('/auth/signup/signup')
      }
      const handleSignIn=()=>{
        if(!email){
            ToastAndroid.show("Please Fill out Work Email",ToastAndroid.SHORT)
            return;
        }
      }
  return (
    <SafeAreaView style={{flex:1,padding:25,backgroundColor:'black'}}>
      <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back-circle-sharp" size={30} color="gray" />
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontFamily: 'outfit-medium',
            }}
          >
            Get your free account
          </Text>
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
            flexDirection: 'row',
           
          }}
        >
          <Image style={{width:25,height:25}} source={require('../../../assets/images/a.png')} />
          <Text style={{  color: 'white', flex: 1, textAlign: 'center' }}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
            flexDirection: 'row',
          }}
        >
           <Image style={{width:25,height:25}} source={require('../../../assets/images/g.png')} />
          <Text style={{ color: 'white', flex: 1, textAlign: 'center' }}>Continue with Google</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center', color: 'gray' }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        </View>


        <View style={{
            marginTop:20
        }}>
        <Text style={{ fontFamily: 'outfit-medium', color: 'white', fontSize: 16 }}>Work Email</Text>
          <TextInput
            style={{
              color: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
              marginBottom: 20,
            }}
            placeholder="hello@company.com"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
          />
        </View>
            
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
          }}
          onPress={handleSignIn}
        >
          <Text>Continue with Email</Text>
        </TouchableOpacity>

            <View style={{
              flexDirection:'row',
              marginTop:20,
              alignItems:'center',
              display:'flex',
              justifyContent:'center'
            }}>
            <Text style={{
            color: 'gray',
          }}>Already Have An Account? </Text>
          <TouchableOpacity onPress={handleClick}>
            <Text style={{color:'#73EC8B'}}>Login</Text>
          </TouchableOpacity>
            </View>

    </SafeAreaView>
  )
}