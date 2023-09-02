import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Svg, { Path, Rect } from 'react-native-svg';

const AudioBars = ({ audioBars }) => {
  return (

    <View style={{ flexDirection: "row", alignContent: "center", position: "absolute", right: "50%", transform: [{ translateX: -15 }] }}>
      {[4, 6, 8, 4, 6, 8, 4, 6, 8, , 4, 6, 8, 4, 6, 6, 8, 4, 6, 8]?.map((value, index) => {
        let height = value * 4
        return (
          <Svg
            key={value + index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 14.707 ${height}`}
            xmlSpace="preserve"
            width={"15"}
            height={"40"}
            style={{ marginHorizontal: -5 }}
          >
            <Path d={`M6.275 0H8.433V${height}.707H6.275z`} fill="#030104" />
          </Svg>
        )
      })}
    </View>
  );
};

export default AudioBars