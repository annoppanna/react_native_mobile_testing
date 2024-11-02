import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemedText} from './ThemedText';
import {ShopContainer} from './shop-lists/ShopContainer';

interface ShopListsProps {
  items: any[];
}

export const ShopLists: React.FC<ShopListsProps> = (props: ShopListsProps) => {
  const {items} = props;

  return (
    <View>
      <View style={styles.shopTitleContainer}>
        <ThemedText type="defaultSemiBold">ร้าน E-voucher ใกล้คุณ</ThemedText>

        <View style={styles.shopStatusBox}>
          <ThemedText style={styles.shopStatusText}>เปิดอยู่</ThemedText>
        </View>
      </View>

      <ShopContainer items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  shopTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  shopStatusBox: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#175CD3',
    borderRadius: 10,
  },
  shopStatusText: {
    color: '#fff',
  },
});
