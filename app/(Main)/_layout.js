import { Link, Slot, Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { BookOpenTab, SearchTab, HomeTab } from "../../svg";

export default () => {

  const tabs = [
    {
      id: "1",
      to: "home",
      screen: "Home",
      // icon: (
      //   <HomeTab
      //     strokeColor={
      //       false == "Home"
      //         ? "#FF2DAB"
      //         : "#000"
      //     }
      //     fillColor={
      //       false == "Home"
      //         ? "#FF2DAB"
      //         : "#FF2DAB"
      //     }
      //   />
      // ),
    },
    {
      id: "2",
      to: "groups",
      screen: "Groups",
      // icon: (
      //   <SearchTab
      //     strokeColor={
      //       false == "Search"
      //         ? "#FF2DAB"
      //         : "#000"
      //     }
      //     fillColor={
      //       false == "Search"
      //         ? "#FF2DAB"
      //         : 'none'
      //     }
      //   />
      // ),
    },
    {
      id: "3",
      to: "users",
      screen: "Users",
      // icon: (
      //   <BookOpenTab
      //     strokeColor={
      //       false == "Courses"
      //         ? "#FF2DAB"
      //         : "#000"
      //     }
      //   />
      // ),
    }
  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
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
        }}
      >
        {tabs.map((item, index) => {
          return (
            <Link href={"/"+item.to}>
              <TouchableOpacity
                key={index}
                style={{ alignItems: "center", marginBottom: 6 }}
              >
                <Text>{item.screen}</Text>
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    color:
                      false == item.screen
                        ? "#FF2DAB"
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
    // <Tabs>
    //   <Tabs.Screen name="home"></Tabs.Screen>
    //   <Tabs.Screen name="users"></Tabs.Screen>
    //   <Tabs.Screen name="groups"></Tabs.Screen>
    // </Tabs>
  )
}