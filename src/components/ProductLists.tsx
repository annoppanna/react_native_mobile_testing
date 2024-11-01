import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ThemedText} from './ThemedText';

interface ProductListsProps {
  items: any[];
}

export const ProductLists: React.FC<ProductListsProps> = ({items: []}) => {
  return (
    <View>
      <ThemedText type="defaultSemiBold">หมวดหมู่สินค้า</ThemedText>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        {[...Array(10)].map((_elementInArray, index) => (
          <View key={index} style={styles.inner}>
            <View style={styles.image} />

            <ThemedText style={styles.text}>Cate LV.1</ThemedText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 14,
    marginTop: 8,
  },
  inner: {
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'gray',
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
  },
  text: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: 64,
    fontSize: 12,
  },
});
