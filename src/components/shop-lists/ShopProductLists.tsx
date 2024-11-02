import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {ThemedText} from '../ThemedText.tsx';

interface ShopProuductListsProps {
  items: any[];
}
export const ShopProuductLists: React.FC<ShopProuductListsProps> = (
  props: ShopProuductListsProps,
) => {
  const {items} = props;

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        columnGap: 12,
        paddingTop: 10,
        backgroundColor: '#fff',
        marginTop: 4,
      }}>
      {[...Array(10)].map((_elementInArray, index) => (
        <View style={[styles.productContainer, styles.shadowBox]} key={index}>
          <View
            style={{
              position: 'relative',
            }}>
            <Image
              style={styles.productThumbnailImage}
              source={require('../../assets/images/product-thumbnail.png')}
              resizeMode="cover"
              borderTopLeftRadius={16}
              borderTopRightRadius={16}
              borderBottomLeftRadius={8}
              borderBottomRightRadius={8}
            />
            <View style={[styles.shadowBox, styles.productTagContainer]}>
              <Image
                style={styles.tagLogoImage}
                source={require('../../assets/images/tag-logo.png')}
              />
            </View>

            {index % 2 != 0 && (
              <View style={[styles.shadowBox, styles.discountTagContainer]}>
                <ThemedText
                  style={{
                    color: '#fff',
                  }}>
                  -99%
                </ThemedText>
              </View>
            )}
          </View>
          <View
            style={{
              padding: 12,
            }}>
            <ThemedText numberOfLines={1} ellipsizeMode="tail">
              ชุดตรวจสุขภาพ Chemetry
            </ThemedText>

            <View
              style={{
                gap: 8,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              {index % 2 != 0 && (
                <ThemedText
                  style={{
                    color: '#B3B9C6',
                    textDecorationLine: 'line-through',
                  }}>
                  ฿9,999
                </ThemedText>
              )}
              <View
                style={{
                  flexShrink: 1,
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  backgroundColor: index % 2 != 0 ? '#DC3545' : '#175CD3',
                  borderRadius: 16,
                  alignSelf: 'flex-end',
                  marginTop: 8,
                }}>
                <ThemedText
                  style={{
                    color: '#fff',
                  }}>
                  ฿ 999
                </ThemedText>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productThumbnailImage: {
    width: 'auto',
    height: 112,
  },
  productContainer: {
    marginBottom: 4,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'column',
    borderColor: '#DFE4EA',
    width: 170,
  },

  productTagContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 6,
    left: 6,
    width: 32,
    height: 24,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountTagContainer: {
    position: 'absolute',
    backgroundColor: '#DC3545',
    top: 6,
    right: 6,
    width: 47,
    height: 28,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowBox: {
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 1,
    backgroundColor: 'white',
  },
  tagLogoImage: {
    width: 28,
    height: 20,
  },
});
