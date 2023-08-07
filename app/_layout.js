import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false, }}></Stack>
  )
}
