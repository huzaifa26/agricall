import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import InputField from './InputField';
import Button from './Button';


export default function AddUser() {
  return (
    <View style={{ height: 200, marginTop: 0 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, gap: 20 }}>

        <InputField
          title="User name"
          placeholder="User name"
          contaynerStyle={{ marginBottom: 10 }}
        />
        {/* <InputField
          title="Password"
          placeholder="••••••••"
          contaynerStyle={{ marginBottom: 16 }}
        /> */}
        <Button
          title={"Submit"}
          containerStyle={{ marginBottom: 20 }}
          isLoading={false}
        />
      </View>
    </View>
  )
}