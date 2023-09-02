import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';

const ContextMenu = () => {
  const buttonRef = useRef(null);
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const showContextMenu = () => {
    if (buttonRef.current) {
      buttonRef.current.measureInWindow((x, y, width) => {
        // Calculate the position for the context menu
        const screenHeight = Dimensions.get('window').height;
        const menuHeight = 100; // Adjust as needed
        const menuTop = -250;
        const menuLeft = x - width - 230;

        console.log(menuTop)


        // Ensure the menu doesn't go off the screen
        if (menuTop + menuHeight > screenHeight) {
          setMenuPosition({ top: y - menuHeight, left: x });
        } else {
          setMenuPosition({ top: menuTop, left: menuLeft });
        }

        setContextMenuVisible(true);
      });
    }
  };

  const hideContextMenu = () => {
    setContextMenuVisible(false);
  };

  const [viewHeight, setViewHeight] = useState(0);

  const onViewLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    console.log(height);
    setViewHeight(height);
  };

  return (
    <View>
      <TouchableOpacity onPress={showContextMenu} ref={buttonRef} style={{ width: 30, height: 30, borderRadius: 1000 }}>
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", gap: 3, borderRadius: 1000 }}>
          <View style={{ width: 4, height: 4, backgroundColor: "#666", borderRadius: 1000 }}></View>
          <View style={{ width: 4, height: 4, backgroundColor: "#666", borderRadius: 1000 }}></View>
          <View style={{ width: 4, height: 4, backgroundColor: "#666", borderRadius: 1000 }}></View>
        </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isContextMenuVisible}
        animationType="slide"
        onRequestClose={hideContextMenu}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Add shadow to this wrapper view */}
          <View
            onLayout={onViewLayout}
            style={{
              backgroundColor: 'white',
              padding: 16,
              borderRadius: 8,
              width: 200,
              shadowColor: '#000',
              top: menuPosition.top,
              left: menuPosition.left,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 5, // This is for Android
            }}
          >
            {/* Context menu options */}
            <TouchableOpacity onPress={hideContextMenu}>
              <Text>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideContextMenu}>
              <Text>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideContextMenu}>
              <Text>Option 3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ContextMenu;