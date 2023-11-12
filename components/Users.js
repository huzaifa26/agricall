import React, { useEffect, useId, useState } from 'react'
import { Text, View, FlatList, Dimensions, ActivityIndicator } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import User1 from "../svg/User1"
import User2 from "../svg/User2"
import User3 from "../svg/User3"
import ContextMenu from './ContextMenu';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { useCustomToast } from '../hooks/useCustomToast';
import { deleteUser, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function Users() {
  const router = useRouter()
  const openDialog = useCustomToast();

  const userImages = {
    1: <User1 />,
    2: <User2 />,
    3: <User3 />,
  }

  const [data, setDataState] = useState([]);
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
          renderItem={({ item }) => <ListItem name={item.name} image={item.image} groupName={item.groupName} item={item} />}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.2}
        />
      }
    </View>
  )
}

function ListItem({ name, image, groupName, item }) {
  const router = useRouter()
  const firstLetter = name[0].toUpperCase();

  const deleteUserHandler = async () => {
    try {
      const userRef = doc(db, 'users', item.id);
      let blocked = false
      if (item.block === false) {
        blocked = true;
      }
      await updateDoc(userRef, { block: blocked });
      router.replace('/users');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Shadow
      viewStyle={{ width: "100%" }}
      startColor={"rgba(6, 38, 100, 0.03)"}
      finalColor={"rgba(6, 38, 100, 0.0)"}
      distance={10}>
      <View style={item.block ?
        {
          flexDirection: 'row',
          // justifyContent: 'space-between',
          width: Dimensions.get("window").width,
          backgroundColor: '#ffffff',
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          marginBottom: 12,
          opacity: 0.5,
        }
        : {
          flexDirection: 'row',
          // justifyContent: 'space-between',
          width: Dimensions.get("window").width,
          backgroundColor: '#ffffff',
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          marginBottom: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 6
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
        <Menu style={{
          flex: 1
        }}>
          <MenuTrigger style={{ borderRadius: 1000 }}>
            <View style={{ width: 30, height: 30, borderRadius: 1000 }}>
              <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", gap: 3, borderRadius: 1000 }}>
                <View style={{ width: 4, height: 4, backgroundColor: "#666", borderRadius: 1000 }}></View>
                <View style={{ width: 4, height: 4, backgroundColor: "#666", borderRadius: 1000 }}></View>
                <View style={{ width: 4, height: 4, backgroundColor: "#666", borderRadius: 1000 }}></View>
              </View>
            </View>
            {/* <Text>Hello world</Text> */}
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => console.log(`Edit`)} text='Edit' />
            <MenuOption onSelect={() => deleteUserHandler()} >
              <Text>{item.block ? 'Unblock' : 'block'}</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>

    </Shadow>
  );
};