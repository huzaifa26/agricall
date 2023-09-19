import { View } from "react-native";
import InputField from './InputField';
import Button from './Button';


export default function AddGroup() {
  return (
    <View style={{ height: 200, marginTop: 0 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, gap: 20 }}>

        <InputField
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