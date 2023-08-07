import React from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const gradientHeight = 500;
  const gradientBackground = 'purple';
  const data = Array.from({ length: gradientHeight });

  const height = Dimensions.get("window").height
  const width = Dimensions.get("window").width

  console.log(height)

  return (
    // <>
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <ImageBackground
    //       style={{ minWidth: '100%', minHeight: '100%'}}
    //       source={require('../assets/Background.png')}
    //     />
    //     <Header title={"Login"} />
    //     <Text style={{ position: 'absolute', top: '28%', textAlign: 'center', fontSize: 35 }}>
    //       L o g i n
    //     </Text>
    //     <TextInput
    //       style={{ position: 'absolute', width: 200, height: 30, top: '38%', textAlign: 'center', fontSize: 19 }}
    //       placeholder="Email"
    //       keyboardType="email-address"
    //       autoCapitalize="none"
    //     />
    //     <TextInput
    //       style={{ position: 'absolute', width: 200, height: 30, top: '44%', textAlign: 'center', fontSize: 19 }}
    //       placeholder="Password"
    //       secureTextEntry
    //     />
    //     <TouchableOpacity
    //       style={{ position: 'absolute', width: 100, height: 30, top: '54%', alignItems: 'center', justifyContent: 'center' }}
    //     >
    //       <Text style={{ fontSize: 19 }}>Login</Text>
    //     </TouchableOpacity>
    //   </View>
    // </>

    <View style={{ flex: 1, }}>
      <ImageBackground
        style={{ flex: 1, width: '100%', height: '100%', justifyContent: "center" }}
        source={require('../assets/Background.png')}
      >
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <Header title={"Login"} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginTop: 20, fontSize: 35 }}>L o g i n</Text>
            <TextInput
              style={{ width: 200, height: 30, marginTop: 10, textAlign: 'center', fontSize: 19 }}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={{ width: 200, height: 30, marginTop: 10, textAlign: 'center', fontSize: 19 }}
              placeholder="Password"
              secureTextEntry
            />
            <TouchableOpacity
              style={{ width: 100, height: 30, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ fontSize: 19 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Login;