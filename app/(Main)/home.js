import React, { useCallback, useRef } from 'react'
import { Dimensions, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import Recording from '../../components/Recording'

export default function Home() {
  const actionSheetRef = useRef();

  const onPressComment = useCallback(() => { actionSheetRef.current?.show(); }, [])

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  return (
    <View>
      <Recording actionSheetRef={actionSheetRef} />
      <TouchableOpacity style={{ backgroundColor:"#fff",position: "absolute", top: height - 80,paddingVertical:20,paddingHorizontal:width/2-20,borderTopLeftRadius:25,borderTopRightRadius:25, }} onPress={onPressComment}>
        <Text style={{ width: 50, height: 5, backgroundColor: "#666666", borderRadius: 100 }}></Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </View>
  )
}