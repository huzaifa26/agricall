import React from "react";
import { View, Text } from "react-native"; // Import Picker
import { Shadow } from "react-native-shadow-2";
import { Picker } from '@react-native-picker/picker';


import { COLORS, FONTS } from "../constants";

export default function SelectField({
  contaynerStyle,
  placeholder,
  icon,
  title,
  onValueChange, // Add onValueChange prop
  selectedValue, // Add selectedValue prop
}) {
  return (
    <Shadow
      viewStyle={{ width: "100%", ...contaynerStyle }}
      startColor={"rgba(6, 38, 100, 0.03)"}
      finalColor={"rgba(6, 38, 100, 0.0)"}
      distance={10}
    >
      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "#fff",
          borderRadius: 10,
          justifyContent: "center",
          paddingVertical: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#666666",
              lineHeight: 12 * 1.7,
              zIndex:100,
              position:"absolute",
              left:20
            }}
          >
            {title}
          </Text>
          <Picker
            style={{ width: "100%",height:40,position:"relative",left:4,top:8}}
            selectedValue={selectedValue} 
            onValueChange={onValueChange} 
          >
            <Picker.Item label={placeholder} value="" />
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
          </Picker>
        </View>
        {icon && icon}
      </View>
    </Shadow>
  );
}