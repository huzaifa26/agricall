import React from 'react'
import { Text } from 'react-native'
import ActionSheet from 'react-native-actions-sheet'

export default function Recording({ actionSheetRef }) {
  return (
    <ActionSheet ref={actionSheetRef} containerStyle={{ height: "85%", position: "relative", zIndex: 0, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
      <Text>Recording</Text>
    </ActionSheet>
  )
}
