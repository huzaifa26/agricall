import React, { useId, useState } from 'react'
import { Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import Header from "../../components/Header"
import GroupUser from "../../svg/GroupUser"
import ContextMenu from '../../components/ContextMenu';

const ListItem = ({ name, image, totalUsers }) => {
  const firstLetter = name[0].toUpperCase();

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
        // paddingRight: 30,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginBottom: 12,
        width: Dimensions.get("window").width -20,
        // justifyContent: "space-between",
      }}>
        <View
          style={{
            flex:10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          <View style={{ maxWidth: 100, maxHeight: 100 }}>
            {image}
          </View>
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
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
    { id: useId(), name: 'John', totalUsers: "10 users", image: <GroupUser /> },
  ];

  const [dataToShow, setDataToShow] = useState(data.slice(0, 10)); // Initial subset of data

  const loadMoreData = () => {
    const newDataToShow = data.slice(0, dataToShow.length + 5); // Load 2 more items
    setDataToShow(newDataToShow);
  };

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Header goBack={true} title={"Groups"} />
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
