import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from '../Divider';
import {ShopBanner} from './ShopBanner';
import {ShopProuductLists} from './ShopProductLists';

interface ShopContainerProps {
  items: any[];
}

export const ShopContainer: React.FC<ShopContainerProps> = (
  props: ShopContainerProps,
) => {
  const {items} = props;
  return (
    <View>
      {[...Array(3)].map((elementInArray, index) => (
        <View key={index}>
          <Divider
            dividerStyle={{
              marginVertical: 16,
            }}
          />
          <ShopBanner item={elementInArray} />
          <ShopProuductLists items={[]} />
        </View>
      ))}
    </View>
  );
};
