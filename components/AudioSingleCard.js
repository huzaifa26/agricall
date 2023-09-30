import React from 'react';
import { Image, Text, View } from 'react-native';
import AudioBars from './AudioBars';

const AudioSingleCard = ({ data }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: data.me ? 'flex-end' : 'flex-start' }}>
      <Image source={data.image} style={{ width: 50, height: 50 }} />
      <Text style={{ marginHorizontal: 10 }}>Play / Pause</Text>
      <AudioBars bars={data.bars} />
    </View>
  );
};

export default AudioSingleCard