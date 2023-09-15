import React, { useCallback, useRef, useState, useEffect } from 'react'
import { Dimensions, Switch, Text, TouchableOpacity, FlatList, View } from 'react-native'
import Recording from '../../components/Recording'
import UpArrow from '../../svg/UpArrow';
import { COLORS } from '../../constants';
import RecordIcon from '../../svg/RecordIcon';
import { Shadow } from 'react-native-shadow-2';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import AudioBars from '../../components/AudioBars';

import { Audio } from 'expo-av';
import { Image } from 'react-native';

export default function Home() {
  const actionSheetRef = useRef();
  const onPressComment = useCallback(() => { actionSheetRef.current?.show(); }, [])

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const [audioRecorderPlayer, setAudioRecorderPlayer] = useState(null);

  const [isRecording, setIsRecording] = useState(false);
  const [audioBars, setAudioBars] = useState([]);
  const recordingOptions = {
    android: {
      extension: '.aac',
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
      sampleRate: 44100,
      numberOfChannels: 1,
      bitRate: 128000,
    },
    ios: {
      extension: '.caf',
      outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM,
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
      sampleRate: 44100,
      numberOfChannels: 1,
      bitRate: 128000,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
    },
  };
  // const intervalRef = useRef(null);
  const recording = new Audio.Recording();


  // useEffect(() => {
  //   const initAudioRecorder = async () => {
  //     const player = new AudioRecorderPlayer();
  //     await player.setSubscriptionDuration();
  //     setAudioRecorderPlayer(player);
  //   };

  //   initAudioRecorder();
  // }, []);

  // const startRecording = async () => {
  //   try {
  //     await audioRecorderPlayer.startRecorder();
  //     setIsRecording(true);

  //     intervalRef.current = setInterval(() => {
  //       audioRecorderPlayer.getRecordLevel((level) => {
  //         const bars = Array.from({ length: Math.ceil(level * 10) }, (_, index) => index);
  //         setAudioBars(bars);
  //       });
  //     }, 100);
  //   } catch (error) {
  //     console.error('Error starting recording:', error);
  //   }
  // };

  // const stopRecording = async () => {
  //   try {
  //     await audioRecorderPlayer.stopRecorder();
  //     setIsRecording(false);
  //     clearInterval(intervalRef.current);
  //     setAudioBars([]);
  //   } catch (error) {
  //     console.error('Error stopping recording:', error);
  //   }
  // };

  useEffect(() => {
    Audio.requestPermissionsAsync(); // Request audio recording permissions on component mount
  }, []);

  const startRecording = async () => {
    try {
      // await recording.prepareToRecordAsync(recordingOptions);
      // await recording.startAsync();
      setIsRecording(true);

      animateAudioBars();
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      // await recording.stopAndUnloadAsync();
      setIsRecording(false);
    } catch (error) {
      // console.error('Error stopping recording:', error);
    }
  };

  const animateAudioBars = () => {
    // Implement audio visualization logic here and update the audioBars state.
    // This depends on your specific requirements for visualizing audio levels.
    // For example, you can use the microphone input to calculate audio levels.
    // Here's a simplified example:
    const bars = Array.from({ length: 10 }, (_, index) => index);
    setAudioBars(bars);
  };


  return (
    <View style={{ flex: 1 }}>
      <Recording actionSheetRef={actionSheetRef} onPressComment={() => actionSheetRef.current?.hide()} />
      <TouchableOpacity style={{ backgroundColor: "#fff", position: "absolute", top: height - 115, paddingVertical: 10, paddingHorizontal: width / 2 - 15, borderTopLeftRadius: 25, borderTopRightRadius: 25, zIndex: 10 }} onPress={onPressComment}>
        {/* <Text style={{ width: 50, height: 5, backgroundColor: "#666666", borderRadius: 100 }}></Text> */}
        <UpArrow stroke={"#666666"} fill={"#666666"} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <View>
          <Switch
            trackColor={{ false: COLORS.GRAY, true: COLORS.PRIMARY }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", position: "relative", zIndex: 1 }}>
          <Shadow
            viewStyle={{ width: "100%" }}
            startColor={"rgba(6, 38, 100, 0.03)"}
            finalColor={"rgba(6, 38, 100, 0.0)"}
            distance={10}
          >
            <TouchableOpacity
              onPress={() => { isRecording ? stopRecording() : startRecording() }}
              style={{
                overflow:"hidden",padding: 20, borderRadius: 1000, backgroundColor: COLORS.WHITE, width: 200, height: 200, justifyContent: "center", alignItems: "center", shadowColor: '#000', shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}>
              {isRecording ? <AudioBars audioBars={audioBars} /> : <RecordIcon />}

            </TouchableOpacity>

          </Shadow>
        </View>
      </View>
    </View>
  )
}