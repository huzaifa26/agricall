import { View } from "react-native";
import InputField from './InputField';
import Button from './Button';
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase";
import { useRouter } from 'expo-router';
import { useCustomToast } from "../hooks/useCustomToast";

export default function AddGroup() {
  const router = useRouter();
  const openDialog = useCustomToast();

  const [groupName, setGroupName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonSubmit = async () => {
    try {
      setIsLoading(true);
      const docRef = await addDoc(collection(db, "groups"), {
        name: groupName,
      });
      console.log("Document written with ID: ", docRef.id);
      setGroupName('');
      openDialog({ title: "Group saved" });
      router.replace('/groups');
    } catch (error) {
      setIsLoading(false)
      console.error("Error adding document: ", error);
    }
  }

  return (
    <View style={{ height: 200, marginTop: 0 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, gap: 20 }}>

        <InputField
          title="Group name"
          placeholder="Group name"
          contaynerStyle={{ marginBottom: 10 }}
          onChangeText={(text) => setGroupName(text)}
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