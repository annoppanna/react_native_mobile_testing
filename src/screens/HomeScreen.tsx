import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ProductLists} from '../components/ProductLists';
import {ShopLists} from '../components/ShopLists';

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <Image
          style={styles.coverImage}
          source={require('../assets/images/header-image.png')}
          resizeMode="cover"
          borderRadius={16}
        />

        <ProductLists items={[]} />

        <ShopLists items={[]} />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontFamily: 'NotoSansThai',
  },

  coverImage: {
    marginBottom: 16,
    width: 'auto',
    height: 147,
  },
});
