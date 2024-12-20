import React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  TabAll,
  TabDiscount,
  TabDeliveryFree,
} from '../components/tab-code-redeem';
import {ThemedText} from '../components/ThemedText';

export default function CodeRedeemScreen() {
  const renderScene = SceneMap({
    first: TabAll,
    second: TabDiscount,
    third: TabDeliveryFree,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'ทั้งหมด'},
    {key: 'second', title: 'ส่วนลด'},
    {key: 'third', title: 'ส่งฟรี'},
  ]);

  const renderTabBar = (props: any) => {
    return (
      <TabBar
        key={props.key}
        {...props}
        activeColor="#175CD3"
        labelStyle={{
          color: 'black',
          fontFamily: 'NotoSansThai-Regular',
        }}
        tabStyle={{
          position: 'relative',
          justifyContent: 'flex-start',
          borderRightWidth: 1,
          borderColor: '#DFE4EA',
          height: 29,
        }}
        indicatorStyle={{
          backgroundColor: '#175CD3',
        }}
        renderLabel={({route, color}: any) => (
          <ThemedText
            style={{
              color,
            }}>
            {route.title}
          </ThemedText>
        )}
        style={{
          backgroundColor: 'white',
          paddingVertical: 18,
        }}
      />
    );
  };

  return (
    <TabView
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      initialLayout={{width: layout.width}}
    />
  );
}
