import React, { useId, useState } from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import Header from "../../components/Header"

const ListItem = ({ name }) => {
  const firstLetter = name[0].toUpperCase();

  return (
    <Shadow
      viewStyle={{ width: "100%" }}
      startColor={"rgba(6, 38, 100, 0.03)"}
      finalColor={"rgba(6, 38, 100, 0.0)"}
      distance={10}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          backgroundColor: '#ffffff',
          marginBottom: 12,
          width: Dimensions.get("window").width
        }}
      >
        {/* <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#e0e0e0',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{firstLetter}</Text>
        </View> */}
        <View>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{name}</Text>
          <Text style={{ marginLeft: 10, fontSize: 12, color: 'gray' }}>10 Users</Text>
        </View>
      </View>
    </Shadow>
  );
};

export default function Groups() {

  const data = [
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    { id: useId(), name: 'John' },
    { id: useId(), name: 'Alice' },
    { id: useId(), name: 'Bob' },
    // Add more data objects here
  ];

  const [dataToShow, setDataToShow] = useState(data.slice(0, 10)); // Initial subset of data

  const loadMoreData = () => {
    const newDataToShow = data.slice(0, dataToShow.length + 5); // Load 2 more items
    setDataToShow(newDataToShow);
  };

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Header goBack={true} title={"Users"} />
      <FlatList
        data={dataToShow}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem name={item.name} />}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.2}
      />
    </View>
  )
}
