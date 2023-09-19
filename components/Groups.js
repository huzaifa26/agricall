import React, { useId, useState } from 'react'
import { Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import ContextMenu from './ContextMenu';
import { Image } from 'react-native';

const ListItem = ({ name, image, totalUsers }) => {
  return (
    <Shadow
      viewStyle={{ width: "100%" }}
      startColor={"rgba(6, 38, 100, 0.03)"}
      finalColor={"rgba(6, 38, 100, 0.0)"}
      distance={10}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginBottom: 12,
        width: Dimensions.get("window").width - 20,
      }}>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={image}
          />
          <View>
            <Text style={{ marginLeft: 10, fontSize: 16 }}>{name}</Text>
            <Text style={{ marginLeft: 10, fontSize: 12, color: 'gray' }}>{totalUsers}</Text>
          </View>
        </View>
        <ContextMenu />
      </View>
    </Shadow>
  );
};

export default function Groups() {

  const data = [
    { id: useId(), name: 'John', totalUsers: "10 users", image: require("../assets/GroupUser.png") },
    { id: useId(), name: 'John', totalUsers: "10 users", image: require("../assets/GroupUser.png") },
    { id: useId(), name: 'John', totalUsers: "10 users", image: require("../assets/GroupUser.png") },
    { id: useId(), name: 'John', totalUsers: "10 users", image: require("../assets/GroupUser.png") },
    { id: useId(), name: 'John', totalUsers: "10 users", image: require("../assets/GroupUser.png") },
  ];

  const [dataToShow, setDataToShow] = useState(data.slice(0, 10)); // Initial subset of data

  const loadMoreData = () => {
    const newDataToShow = data.slice(0, dataToShow.length + 5); // Load 2 more items
    setDataToShow(newDataToShow);
  };

  return (
    <View style={{ marginHorizontal: 10 }}>
      <FlatList
        style={{ height: Dimensions.get('window').height - 115 }}
        data={dataToShow}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem name={item.name} image={item.image} totalUsers={item.totalUsers} />}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.2}
      />
    </View>
  )
}
