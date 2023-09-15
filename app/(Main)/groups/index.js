import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../../../components/Header'
import Groups from '../../../components/Groups';
import AddGroup from '../../../components/AddGroup';
import { COLORS } from '../../../constants';

const FirstRoute = () => (
  <Groups />
);

const SecondRoute = () => (
  <AddGroup />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function GroupIndex() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Groups' },
    { key: 'second', title: 'Add Group' },
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
      <Header goBack={true} title={"Groups"} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width, height: layout.height + 80 }}
        renderTabBar={renderTabBar}
      />
    </>
  );
}