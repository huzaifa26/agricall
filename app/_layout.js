import { Stack } from 'expo-router'
import React from 'react'
import ToastProvider from '../context/toastContext'
import { MenuProvider } from 'react-native-popup-menu';

export default function Layout() {
  return (
    <MenuProvider>
      <ToastProvider>
        <Stack screenOptions={{ headerShown: false, }}></Stack>
      </ToastProvider>
    </MenuProvider>
  )
}
