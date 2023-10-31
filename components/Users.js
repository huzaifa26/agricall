import React, { useEffect, useId, useState } from 'react'
import { Text, View, FlatList, Dimensions, ActivityIndicator } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import User1 from "../svg/User1"
import User2 from "../svg/User2"
import User3 from "../svg/User3"
import ContextMenu from './ContextMenu';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

export default function Users() {

  // const data = [
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  //   { id: useId(), name: 'John', groupName: "Group Name", image: <User3 /> },
  //   { id: useId(), name: 'Alice', groupName: "Group Name", image: <User2 /> },
  //   { id: useId(), name: 'Bob', groupName: "Group Name", image: <User1 /> },
  // ];

  const userImages = {
    1: <User1 />,
    2: <User2 />,
    3: <User3 />,
  }

  const [data, setDataState] = useState([])
  const [dataLoading, setDataLoading] = useState(true);

  const getGroups = async () => {
    const collectionRef = collection(db, 'users');
    const snapshot = await getDocs(collectionRef);

    const result = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data(), image: userImages[Math.floor(Math.random() * 3) + 1] }
    })
    setDataState(result);
    setDataLoading(false);
  }

  useEffect(() => {
    getGroups()
  }, [])

  useEffect(() => {
    setDataToShow(data?.slice(0, 10))
  }, [data])

  const [dataToShow, setDataToShow] = useState(data.slice(0, 10)); // Initial subset of data

  const loadMoreData = () => {
    const newDataToShow = data.slice(0, dataToShow.length + 5); // Load 2 more items
    setDataToShow(newDataToShow);
  };

  return (
    <View style={{ marginHorizontal: 10, marginTop: 20 }}>
      {dataLoading ? <ActivityIndicator color="#A5A0EA" size="large" /> :
        <FlatList
          data={dataToShow}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem name={item.name} image={item.image} groupName={item.groupName} />}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.2}
        />
      }
    </View>
  )
}

function ListItem({ name, image, groupName }) {
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
        <View style={{ maxWidth: 100, maxHeight: 100 }}>
          {image}
        </View>
        <View>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{name}</Text>
          <Text style={{ marginLeft: 10, fontSize: 12, color: 'gray' }}>{groupName}</Text>
        </View>
      </View>
    </Shadow>
  );
};