import { useId } from "react";
import User1 from "../svg/User1"
import User2 from "../svg/User2"
import User3 from "../svg/User3"
import React from 'react';
import { View, Text, Image } from 'react-native';
import AudioSingleCard from "./AudioSingleCard";

export default function VoiceRecordingVisualization() {
  const audioData = [
    { id: useId(), name: 'John', groupName: "Group Name", me: false, image: <User1 />, },
    { id: useId(), name: 'Alice', groupName: "Group Name", me: true, image: <User2 />, },
    { id: useId(), name: 'Bob', groupName: "Group Name", me: false, image: <User3 />, },
  ];

  return (
    <View>
      {audioData.map((item) => (
        // <AudioSingleCard key={item.id} data={item} />
        <Text>{item.name}</Text>
      ))}
    </View>
  )
}




// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Audio } from 'expo-av';

// const audioContext = new Audio.Sound();

// function VoiceRecordingVisualization() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioData, setAudioData] = useState([]);
//   const [audioStatus, setAudioStatus] = useState(null);

//   async function loadAudio() {
//     try {
//       await audioContext.loadAsync(require('../assets/withyou.mp3'));
//       await audioContext.setIsLoopingAsync(true);

//       const status = await audioContext.getStatusAsync();
//       setAudioStatus(status);

//       if (!status.isLoaded) {
//         console.error('Error loading audio:', status.error);
//         return;
//       }

//       await audioContext.playAsync();

//       audioContext.setOnPlaybackStatusUpdate((status) => {
//         setIsPlaying(status.isPlaying);

//         // Calculate audio intensity (you can customize this)
//         const intensity = status.volume || 0;

//         // Update audio data for visualization
//         setAudioData((prevData) => [...prevData, intensity]);
//       });
//     } catch (error) {
//       console.error('Error loading audio:', error);
//     }
//   }

//   const startStopAudio = async () => {
//     if (isPlaying) {
//       await audioContext.pauseAsync();
//     } else {
//       await audioContext.playAsync();
//     }
//   };

//   useEffect(() => {
//     loadAudio();
//   }, []);

//   if (!audioStatus || !audioStatus.isLoaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Loading audio...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TouchableOpacity onPress={startStopAudio}>
//         <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
//       </TouchableOpacity>

//       <View style={{ flexDirection: 'row' }}>
//         {audioData.map((intensity, index) => (
//           <View
//             key={index}
//             style={{
//               width: 10,
//               height: intensity * 100,
//               backgroundColor: 'blue',
//               marginRight: 2,
//             }}
//           />
//         ))}
//       </View>
//     </View>
//   );
// }

// export default VoiceRecordingVisualization;
