import React from 'react';
import { Image, Text, View } from 'react-native';
import AudioFake from './AudioFake';
import Play from '../svg/Play';
import { Shadow } from 'react-native-shadow-2';
import { Dimensions } from 'react-native';

const AudioSingleCard = ({ data }) => {
  console.log(data.me)
  return (
    <View style={{ flexDirection: 'row', alignItems: "center", gap: 10, backgroundColor: "#47474710", marginVertical: 10,marginHorizontal:10,borderRadius:7, paddingHorizontal: 15, paddingVertical: 10 }}>

      {data.image}
      <Image source={require("../assets/Play.png")} style={{ width: 35, height: 35 }} />
      <Text style={{ marginHorizontal: 10, width: 20, height: 20 }}><Play /></Text>
      <AudioFake bars={data.bars} />
    </View >


  );
};

export default AudioSingleCard

// {/* {
//   data.me === true &&
//   <View style={{ flexDirection: 'row', alignItems: "center", justifyContent:"end", gap: 10, backgroundColor: "aqua", marginVertical: 10, paddingHorizontal: 15, paddingVertical: 10 }}>
//     <AudioFake bars={data.bars} />
//     <Text style={{ marginHorizontal: 10, width: 20, height: 20 }}><Play /></Text>
//     <Image source={require("../assets/Play.png")} style={{ width: 35, height: 35 }} />
//     {data.image}
//   </View>
// } */}