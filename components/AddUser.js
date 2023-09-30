import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import InputField from './InputField';
import Button from './Button';
import SelectField from "./SelectField";


export default function AddUser() {
  return (
    <View style={{ height: "100%", paddingTop: 10 }}>
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 20, gap: 20 }}>
        <InputField
          title="User name"
          placeholder="User name"
          contaynerStyle={{ marginBottom: 10 }}
        />
        <SelectField
          title="Group name"
          placeholder="Group name"
          contaynerStyle={{ marginBottom: 10 }}
        />
        <Button
          title={"Submit"}
          containerStyle={{ marginBottom: 20 }}
          isLoading={false}
        />
      </View>
    </View>
  )
}