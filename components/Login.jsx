import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login() {
  const navigation = useNavigation();
  const router =useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleStart=()=>{
    router.replace('/auth/signup/signup')
  }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' ,alignItems:'center',justifyContent:'center'}}>
      <View style={{
        padding:25,
        marginTop:30,
      }}>
        <View style={{
          alignItems:'center',
        }}>
        <Text style={{
          color:'#73EC8B',
          fontFamily:'outfit-bold',
          fontSize:20
        }}>
          Welcome To Scale
        </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#73EC8B',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
           
          }}
          onPress={handleStart}
        >
          <Text style={{
            fontFamily:'outfit-medium'
          }}>Get Started</Text>
        </TouchableOpacity>
        
      </View>
      
    </SafeAreaView>
  );
}
