import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Header from '../../../components/Header'
import Users from '../../../components/Users';
import AddUser from '../../../components/AddUser';

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
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  console.log(layout)

  return (
    <>
      <Header goBack={true} title={"Users"}/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width,height:layout.height+80 }}
      />
    </>
  );
}