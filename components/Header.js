import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import Arrow from "../svg/Arrow"
import { useRouter } from 'expo-router';

export default function Header({ goBack, title, titleStyle }) {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 52,
      }}
    >
      {goBack && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 0,
            paddingHorizontal: 20,
          }}
          onPress={()=> router.back()}
        >
          <Arrow />
        </TouchableOpacity>
      )}
      {title && (
        <Text
          style={{
            fontSize: 18,
            fontWeight:500,
            color: "#000",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Text>
      )}
    </View>
  )
}
