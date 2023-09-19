import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../../../components/Header'
import Users from '../../../components/Users';
import AddUser from '../../../components/AddUser';
import { COLORS } from '../../../constants';

const FirstRoute = () => (
  <Users />
);

const SecondRoute = () => (
  <AddUser />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function UsersIndex() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Users' },
    { key: 'second', title: 'Add User' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{
            backgroundColor: COLORS.PRIMARY,
            height: 2,
            bottom: -1.5,
        }}
        style={{
            backgroundColor: "transparent",
            elevation: 0,
            borderBottomWidth: 1,
            borderBottomColor: "#A5A0EA20",
        }}
        activeColor={COLORS.PRIMARY}
        inactiveColor={COLORS.GRAY}
        labelStyle={{ fontSize: 14, fontWeight:700 }}
    />
);

  return (
    <>
      <Header goBack={true} title={"Users"}/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width,height:layout.height+80 }}
        renderTabBar={renderTabBar}
      />
    </>
  );
}