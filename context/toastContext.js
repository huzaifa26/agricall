import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ToastContext } from '../constants/index';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Dimensions } from 'react-native';

export default function ToastProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [counter, setCounter] = useState(5);

  const openDialog = useCallback(({ title }) => {
    setTitle(title);
    setCounter(5);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false)
    }, 5000)
  }, [isOpen])

  const closeDialog = () => setIsOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => {
        if (counter < 2) {
          setIsOpen(false);
          clearInterval(interval)
        }
        return counter - 1
      });
    }, 1000)
    return () => clearInterval(interval);
  }, [title]);

  return (
    <ToastContext.Provider value={{ openDialog, closeDialog }}>
      {isOpen ?
        <View style={{ width: Dimensions.get("window").width, position: "absolute", zIndex: 10000000, justifyContent: "center", alignItems: "center", position: "absolute", top: Dimensions.get("window").height * 0.8 }}>
          <View style={{ flex: 0.5, paddingHorizontal: 30, alignItems: "center", justifyContent: "center", borderRadius: 10, height: 40, backgroundColor: "#000", opacity: 0.9 }}>
            <Text style={{ color: "#ffffff" }}>{title}</Text>
          </View>
        </View>
        : null}

      {children}
    </ToastContext.Provider>
  );
}