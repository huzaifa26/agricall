import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Svg, { Path, Rect } from 'react-native-svg';

const AudioBars = ({ audioBars }) => {
  return (
    // <Svg width="100%" height="40">
    //   {[4,4,4,4,4,4,4,4,4,]?.map((_, index) => (
    //     <Rect
    //       key={index}
    //       x={2} // Adjust the bar spacing as needed
    //       y={100}
    //       width="8"
    //       height="40"
    //       fill="#666" // Adjust the bar color as needed
    //     />
    //   ))}
    // </Svg>
    <View style={{ flexDirection: "row", alignContent: "center" }}>
      {[4, 6, 8, 7, 5, 8, 6, 4, 2,4, 6, 8, 7, 5, 8, 6, 4, 2,4, 6, 8, 7, 5, 8, 6, 4, 2,4, 6, 8, 7, 5, 8, 6, 4, 2]?.map((value, index) => {
        let height = value * 4
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 14.707 ${height}`}
            xmlSpace="preserve"
            width={"15"}
            height={"40"}
            style={{ marginHorizontal:-4 }} 
          >
            <Path d={`M6.275 0H8.433V${height}.707H6.275z`} fill="#030104" />
          </Svg>
        )
      })}
    </View>
  );
};

export default AudioBars