import { View, Text, TextInput } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

import { COLORS, FONTS } from "../constants";

export default function InputField({
    contaynerStyle,
    placeholder,
    icon,
    secureTextEntry,
    title,
    onChangeText,
    value
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
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingLeft: 20,
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
                        }}
                    >
                        {title}
                    </Text>
                    <TextInput
                        style={{ paddingRight: 20, width: "100%" }}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        onChangeText={onChangeText}
                        defaultValue={value}
                    />
                </View>
                {icon && icon}
            </View>
        </Shadow>
    );
}
