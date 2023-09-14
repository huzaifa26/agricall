import { Link, Slot, Tabs, usePathname } from 'expo-router';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddIcon from '../../svg/AddIcon';
import GroupsIcon from '../../svg/GroupsIcon';
import UserIcon from '../../svg/UserIcon';
import {COLORS} from '../../constants/index'

// import { BookOpenTab, SearchTab, HomeTab } from "../../svg";

export default () => {
  const pathname = usePathname()

  const tabs = [
    {
      id: "3",
      to: "users",
      screen: "Users",
      isActive: pathname == "/users",
      icon: (
        <UserIcon
          strokeColor={
            pathname == "/users"
              ? COLORS.PRIMARY
              : "#000"
          }
          fill={
            pathname == "/users"
              ? COLORS.PRIMARY
              : COLORS.GRAY
          }
        />
      ),
    },
    {
      id: "1",
      to: "home",
      screen: "Home",
      isActive: pathname == "/home",
      icon: (
        <AddIcon
          strokeColor={
            pathname == "/home"
              ? COLORS.PRIMARY
              : "#000"
          }
          fill={
            pathname == "/home"
              ? COLORS.PRIMARY
              : COLORS.GRAY
          }
        />
      ),
    },
    {
      id: "2",
      to: "groups",
      screen: "Groups",
      isActive: pathname == "/groups",
      icon: (
        <GroupsIcon
          strokeColor={
            pathname == "/groups"
              ? COLORS.PRIMARY
              : "#000"
          }
          fill={
            pathname == "/groups"
              ? COLORS.PRIMARY
              : COLORS.GRAY
          }
        />
      ),
    },

  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 6,
          backgroundColor: "#fff",
          borderTopColor: "#EEEEEE",
          borderTopWidth: 1,
          paddingHorizontal: 35,
          position: "relative",
          zIndex: 20
        }}
      >
        {tabs.map((item, index) => {
          return (
            <Link href={"/" + item.to}>
              <TouchableOpacity
                key={index}
                style={{ alignItems: "center", marginBottom: 6 }}
              >
                {item.icon}
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    color:
                      item.isActive
                        ? COLORS.PRIMARY
                        : "#666666",
                    lineHeight: 14 * 1.2,
                  }}
                >
                  {item.screen}
                </Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
    </>
  )
}