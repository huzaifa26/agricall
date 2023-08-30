import React from 'react'
import { Dimensions, Text,TouchableOpacity } from 'react-native'
import ActionSheet from 'react-native-actions-sheet'
import UpArrow from '../svg/UpArrow'

export default function Recording({ actionSheetRef,onPressComment }) {
  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width
  return (
    <ActionSheet ref={actionSheetRef} containerStyle={{ height: "85%", position: "relative", zIndex: 0, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
      <TouchableOpacity style={{ backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: width / 2 - 25, borderTopLeftRadius: 25, borderTopRightRadius: 25, }} onPress={onPressComment}>
        <UpArrow stroke={"#666666"} fill={"#666666"} style={{transform: [{ rotate: '180deg' }] }}/>
      </TouchableOpacity>
      <Text>Recording</Text>
    </ActionSheet>
  )
}