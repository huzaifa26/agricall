import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/InputField';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import EyeOff from '../svg/EyeOff';
import Eye from '../svg/Eye';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

const Login = () => {
  const router=useRouter();
  const gradientHeight = 500;
  const gradientBackground = 'purple';
  const data = Array.from({ length: gradientHeight });

  const height = Dimensions.get("window").height
  const width = Dimensions.get("window").width

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ flex: 1, }}>
      <ImageBackground
        style={{ flex: 1, width: '100%', height: '100%', justifyContent: "center" }}
        source={require('../assets/Background.png')}
      >
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <Header title={"Login"} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, gap: 20 }}>
            {/* <Text style={{ marginTop: 20, fontSize: 35 }}>L o g i n</Text> */}

            <Image source={require("../assets/Logo.png")} style={{ width: 189, height: 71 }} />

            <InputField
              title="Username"
              placeholder="Username"
              contaynerStyle={{ marginBottom: 10 }}
              onChangeText={(text) => setEmail(text)}
            />
            <InputField
              title="Password"
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              icon={
                <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                  <View style={{ padding: 20 }}>
                    {showPassword ? <EyeOff /> : <Eye />}
                  </View>
                </TouchableWithoutFeedback>
              }
              contaynerStyle={{ marginBottom: 16 }}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              title={"Login"}
              containerStyle={{ marginBottom: 20 }}
              // onPress={() => loginHandler()}
              onPress={() => router.push("/home")}
              isLoading={false}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Login;