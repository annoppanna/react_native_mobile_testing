import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {ThemedText} from '../ThemedText';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '../Divider';
import {ThemedView} from '../ThemedView';

interface CouponCardProps {
  items: any[];
  showEmty?: boolean;
}

export const CouponCard: React.FC<CouponCardProps> = (
  props: CouponCardProps,
) => {
  const {showEmty} = props;
  const navigation = useNavigation() as any;

  if (showEmty) {
    return (
      <ThemedView style={{flex: 1, alignItems: 'center'}}>
        <ThemedText
          style={{
            paddingTop: 36,
          }}>
          ไม่มีโค้ด
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{
        rowGap: 12,
        backgroundColor: '#fff',
        borderRadius: 20,
      }}>
      {[...Array(4)].map((_elementInArray, index) => (
        <TouchableHighlight
          key={index}
          onPress={() => {
            navigation.navigate('code-redeem-details', {id: index});
          }}
          underlayColor="white">
          <View
            key={index}
            style={{
              flex: 1,
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: index === 1 ? '#E8E8E8' : '#CAEEE7',
                borderRadius: 8,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  width: '35%',
                }}>
                <ThemedText
                  style={{
                    fontSize: 14,
                  }}>
                  ส่วนลด
                </ThemedText>
                <ThemedText
                  type="defaultSemiBold"
                  style={{
                    fontSize: 28,
                    lineHeight: 35,
                    color: index === 1 ? '#757677' : 'black',
                  }}>
                  30%
                </ThemedText>
              </View>

              <Divider
                orientation="vertical"
                color="white"
                dividerStyle={{
                  height: '75%',
                }}
              />
              <View
                style={{
                  flex: 1,
                  padding: 8,
                }}>
                <ThemedText
                  type="defaultSemiBold"
                  style={{
                    fontSize: 16,
                  }}>
                  ลดสูงสุด ฿1,000{' '}
                </ThemedText>
                <ThemedText
                  style={{
                    fontSize: 12,
                  }}>
                  ขั้นต่ำ ฿100
                </ThemedText>

                <Image
                  style={styles.tagCodeRedeem}
                  source={require('../../assets/images/redeem-join.png')}
                  resizeMode="contain"
                />
                <ThemedText
                  style={{
                    fontSize: 12,
                  }}>
                  ใช้ได้ถึง 31/12/2566
                </ThemedText>
              </View>
            </View>

            <View
              style={{
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: index === 1 ? '#BEBEBE' : '#8CDACB',
                borderRadius: 8,
                borderLeftWidth: 1,
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: '#d9d9',
              }}>
              <ThemedText
                style={{
                  color: 'white',
                }}>
                เก็บโค้ด
              </ThemedText>
            </View>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tagCodeRedeem: {
    width: 69,
    height: 20,
  },
});
