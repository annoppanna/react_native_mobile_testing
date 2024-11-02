import React from 'react';
import {StyleSheet} from 'react-native';

import {ThemedView} from '../ThemedView';
import {FilterSeachBar} from './FilterSeachBar.tsx';

import {Fonts} from '../../styles/fonts';
import {CouponCard} from './CouponCard.tsx';

export const TabAll: React.FC<any> = () => {
  const [value, setValue] = React.useState('');
  let items = [] as any;

  return (
    <ThemedView style={styles.container}>
      <FilterSeachBar value={value} onChange={value => setValue(value)} />
      <CouponCard items={items} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontFamily: Fonts.NotoSansThai,
  },
});
