import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Signup() {
  const navigation = useNavigation();
  const router =useRouter();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleClick=()=>{
    router.push('/auth/sign-in/signin')
  }

  const handleLogin=()=>{
    if(!email ||!password){
        ToastAndroid.show('Fields are required!',ToastAndroid.SHORT);
        return;
    }
  };

  


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={{ padding: 25, marginTop: 30 }}>
        <TouchableOpacity>
          <Ionicons name="arrow-back-circle-sharp" size={30} color="gray" />
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 35,
              fontFamily: 'outfit-medium',
            }}
          >
            Log in to scale
          </Text>
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={{ fontFamily: 'outfit-medium', color: 'white', fontSize: 16 }}>Email</Text>
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
            placeholder="Enter Email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={{ fontFamily: 'outfit-medium', color: 'white', fontSize: 16 }}>Password</Text>
          <TextInput
            style={{
              color: 'white',
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
            secureTextEntry={true}
            placeholder="Enter Password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ color: '#73EC8B', fontFamily: 'outfit-bold' }}>Forget Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
          }}
          onPress={handleLogin}
          
        >
          <Text>Login</Text>
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

            <View style={{
              flexDirection:'row',
              marginTop:20,
              alignItems:'center',
              display:'flex',
              justifyContent:'center'
            }}>
            <Text style={{
            color: 'gray',
          }}>Don't Have An Account? </Text>
          <TouchableOpacity onPress={handleClick}>
            <Text style={{color:'#73EC8B'}}>Sign Up</Text>
          </TouchableOpacity>
            </View>
      
      </View>
    </SafeAreaView>
  );
}
