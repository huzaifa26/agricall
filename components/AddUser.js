import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import InputField from './InputField';
import Button from './Button';
import SelectField from "./SelectField";
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { useCustomToast } from "../hooks/useCustomToast";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function AddUser() {

  const openDialog = useCustomToast();
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userGroup, setUserGroup] = useState();

  const [data, setDataState] = useState([])

  const getGroups = async () => {
    const collectionRef = collection(db, 'groups');
    const snapshot = await getDocs(collectionRef);

    const result = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data(), image: require("../assets/GroupUser.png") }
    })
    setDataState(result);
  }

  useEffect(() => {
    getGroups()
  }, [])

  const handleButtonSubmit = async () => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, userEmail, userPassword)
      const docRef = await addDoc(collection(db, "users"), {
        email: userEmail,
        name: userName,
        password: userPassword,
        groupId: userGroup.id,
        groupName: userGroup.name,
      });

      const groupDocRef = doc(db, "groups", userGroup.id);

      const groupDocSnapshot = await getDoc(groupDocRef);
      if (groupDocSnapshot.exists()) {
        const userData = { userId: docRef.id };
        await updateDoc(groupDocRef, {
          users: arrayUnion(userData),
        });
      } else {
        await updateDoc(groupDocRef, {
          users: [userDocRef.id],
        });
        // If the group document doesn't exist, you may want to handle this case.
        // You can create the group or take the necessary actions.
      }


      console.log("Document written with ID: ", docRef.id);
      openDialog({ title: "User added" });
      router.replace('/users');
    } catch (error) {
      setIsLoading(false);
      console.error("Error adding document: ", error);
    }
  }

  return (
    <View style={{ height: "100%", paddingTop: 10 }}>
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 20, gap: 20 }}>
        <InputField
          title="Email"
          placeholder="user@gmail.com"
          contaynerStyle={{ marginBottom: 10 }}
          onChangeText={(text) => setUserEmail(text)}
        />
        <InputField
          title="User name"
          placeholder="User name"
          contaynerStyle={{ marginBottom: 10 }}
          onChangeText={(text) => setUserName(text)}
        />
        <InputField
          title="Password"
          placeholder="******"
          contaynerStyle={{ marginBottom: 10 }}
          onChangeText={(text) => setUserPassword(text)}
          secureTextEntry={true}
        />
        <SelectField
          title="Select Group"
          placeholder="Select Group"
          contaynerStyle={{ marginBottom: 10 }}
          onValueChange={(value) => setUserGroup(value)}
          selectedValue={userGroup}
          data={data}
        />
        <Button
          title={"Submit"}
          containerStyle={{ marginBottom: 20 }}
          isLoading={isLoading}
          onPress={handleButtonSubmit}
        />
      </View>
    </View>
  )
}