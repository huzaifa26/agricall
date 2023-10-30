import { Stack } from 'expo-router'
import React from 'react'
import ToastProvider from '../context/toastContext'

export default function Layout() {
  return (
    <ToastProvider>
      <Stack screenOptions={{ headerShown: false, }}></Stack>
    </ToastProvider>
  )
}
