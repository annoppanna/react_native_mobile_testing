import React from 'react';

import {StyleSheet, View, Image} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ThemedText} from '../components/ThemedText';
import {Divider} from '../components/Divider';

export default function CodeRedeemDetailScreen({route}: any) {
  const {id} = route.params;

  return (
    <ThemedView style={styles.container}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginTop: 8,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: id == 1 ? '#E8E8E8' : '#CAEEE7',
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
                // color: "#757677",
                color: id === 1 ? '#757677' : 'black',
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
              source={require('../assets/images/redeem-join.png')}
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
            backgroundColor: id == 1 ? '#BEBEBE' : '#8CDACB',
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

      <View
        style={{
          marginTop: 24,
        }}>
        <ThemedText type="defaultSemiBold">ข้อกำหนดและเงื่อนไข</ThemedText>
        <ThemedText
          type="defaultSemiBold"
          style={{
            marginTop: 12,
            fontSize: 16,
          }}>
          ระยะเวลาที่ใช้ได้
        </ThemedText>
        <ThemedText
          style={{
            color: '#B3B9C6',
          }}>
          1 ต.ค. 2023 00:00 - 31 ธ.ค. 2566 23:59
        </ThemedText>
        <ThemedText
          style={{
            marginTop: 12,
            fontSize: 16,
          }}>
          โค้ด
        </ThemedText>
        <ThemedText
          style={{
            color: '#B3B9C6',
          }}>
          Free Shipping Voucher | โค้ดส่งฟรี{' '}
        </ThemedText>
        <ThemedText
          style={{
            marginTop: 12,
            fontSize: 16,
          }}>
          การชำระเงิน
        </ThemedText>
        <ThemedText
          style={{
            color: '#B3B9C6',
          }}>
          ใช้ได้กับทุกช่องทางการชำระเงิน
        </ThemedText>
        <ThemedText
          style={{
            marginTop: 12,
            fontSize: 16,
          }}>
          อุปกรณ์
        </ThemedText>
        <ThemedText
          style={{
            color: '#B3B9C6',
          }}>
          iOS, Android
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 16,
            marginTop: 12,
          }}>
          เงื่อนไข
        </ThemedText>
        <ThemedText
          style={{
            color: '#B3B9C6',
            marginBottom: 8,
          }}>
          โค้ดส่งฟรี ขั้นต่ำ 200 บาท
        </ThemedText>

        <View
          style={{
            flexDirection: 'row',
            columnGap: 8,
          }}>
          <View>
            <ThemedText
              style={{
                color: '#B3B9C6',
              }}>{`\u2022`}</ThemedText>
          </View>
          <View>
            <ThemedText
              style={{
                color: '#B3B9C6',
              }}>{`Lorem ipsum dolor sit amet, consectetur adipiscing `}</ThemedText>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            columnGap: 8,
          }}>
          <View>
            <ThemedText
              style={{
                color: '#B3B9C6',
              }}>{`\u2022`}</ThemedText>
          </View>
          <View>
            <ThemedText
              style={{
                color: '#B3B9C6',
              }}>{`Lorem ipsum dolor sit amet, consectetur `}</ThemedText>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            columnGap: 8,
          }}>
          <View>
            <ThemedText
              style={{
                color: '#B3B9C6',
              }}>{`\u2022`}</ThemedText>
          </View>
          <View>
            <ThemedText
              style={{
                color: '#B3B9C6',
              }}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua `}</ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontFamily: 'NotoSansThai',
  },
  tagCodeRedeem: {
    width: 69,
    height: 20,
  },
});
