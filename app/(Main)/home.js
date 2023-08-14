import React, { useCallback, useRef, useState } from 'react'
import { Dimensions, Switch, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import Recording from '../../components/Recording'
import UpArrow from '../../svg/UpArrow';
import { COLORS } from '../../constants';
import RecordIcon from '../../svg/RecordIcon';
import { Shadow } from 'react-native-shadow-2';

export default function Home() {
  const actionSheetRef = useRef();
  const onPressComment = useCallback(() => { actionSheetRef.current?.show(); }, [])

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={{ flex: 1 }}>
      <Recording actionSheetRef={actionSheetRef} onPressComment={() => actionSheetRef.current?.hide()} />
      <TouchableOpacity style={{ backgroundColor: "#fff", position: "absolute", top: height - 100, paddingVertical: 10, paddingHorizontal: width / 2 - 15, borderTopLeftRadius: 25, borderTopRightRadius: 25,zIndex:10 }} onPress={onPressComment}>
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",position:"relative",zIndex:1 }}>
          <Shadow
            viewStyle={{ width: "100%" }}
            startColor={"rgba(6, 38, 100, 0.03)"}
            finalColor={"rgba(6, 38, 100, 0.0)"}
            distance={10}
          >
            <TouchableOpacity style={{
              padding: 20, borderRadius: 1000, backgroundColor: COLORS.WHITE, width: 200, height: 200, justifyContent: "center", alignItems: "center", shadowColor: '#000', shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}>
              <RecordIcon />
            </TouchableOpacity>
          </Shadow>
        </View>
      </View>
    </View>
  )
}