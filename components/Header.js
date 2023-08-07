import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import Arrow from "../components/Header"

export default function Header({ goBack, title, titleStyle }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 42,
      }}
    >
      {goBack && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 0,
            paddingHorizontal: 20,
          }}
          onPress={onPress}
        >
          <Arrow />
        </TouchableOpacity>
      )}
      {title && (
        <Text
          style={{
            fontSize: 16,
            color: "#000",
            textTransform: "capitalize",
            ...titleStyle,
          }}
        >
          {title}
        </Text>
      )}
    </View>
  )
}
