import React from 'react';
import {Image, StyleSheet, View, ScrollView} from 'react-native';
import {ThemedView} from '../components/ThemedView';
import {ThemedText} from '../components/ThemedText';
import {Divider} from '../components/Divider';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        style={styles.coverImage}
        source={require('../assets/images/header-image.png')}
        resizeMode="cover"
        borderRadius={16}
      />
      <ThemedText type="defaultSemiBold">หมวดหมู่สินค้า</ThemedText>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          columnGap: 14,
          marginTop: 8,
        }}>
        {[...Array(10)].map((_elementInArray, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'gray',
                width: 64,
                height: 64,
                borderRadius: 64 / 2,
              }}
            />

            <ThemedText
              style={{
                textAlign: 'center',
                flexWrap: 'wrap',
                width: 64,
                fontSize: 12,
              }}>
              Cate LV.1
            </ThemedText>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 16,
        }}>
        <ThemedText type="defaultSemiBold">ร้าน E-voucher ใกล้คุณ</ThemedText>

        <View
          style={{
            paddingVertical: 6,
            paddingHorizontal: 16,
            backgroundColor: '#175CD3',
            borderRadius: 10,
          }}>
          <ThemedText
            style={{
              color: '#fff',
            }}>
            เปิดอยู่
          </ThemedText>
        </View>
      </View>
      <Divider
        dividerStyle={{
          marginVertical: 16,
        }}
      />
      <View style={[styles.shopContainer, styles.shadowBox]}>
        <View
          style={{
            position: 'relative',
          }}>
          <Image
            style={styles.shopThumbnailImage}
            source={require('../assets/images/shop-thumbnail.png')}
            resizeMode="cover"
            borderRadius={4}
          />
          <View style={[styles.shadowBox, styles.tagContainer]}>
            <Image
              style={styles.tagLogoImage}
              source={require('../assets/images/tag-logo.png')}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: 8,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                maxWidth: '90%',
              }}>
              <ThemedText
                type="defaultSemiBold"
                style={{
                  fontSize: 16,
                }}>
                ร้านขายยาไทยโอสถสันติสุข
              </ThemedText>
            </View>

            <View
              style={{
                flex: 1,
                gap: 2,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'baseline',
              }}>
              <AntDesign name="star" size={16} color="#FFBE0B" />
              <ThemedText
                style={{
                  fontSize: 12,
                }}>
                5.0
              </ThemedText>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <ThemedText
                style={{
                  fontSize: 14,
                }}>
                สาขา สุขุมวิท
              </ThemedText>
            </View>
            <Divider
              orientation="vertical"
              dividerStyle={{
                height: 16,
              }}
            />
            <View
              style={{
                flex: 1,
                gap: 8,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'baseline',
              }}>
              <Feather name="clock" size={13} color="black" />

              <ThemedText
                style={{
                  fontSize: 14,
                }}>
                8:00 - 22:00
              </ThemedText>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <View
                style={{
                  gap: 3,
                  padding: 4,
                  borderRadius: 16,
                  flexDirection: 'row',
                  backgroundColor: '#EFF8FF',
                }}>
                <Image
                  style={styles.scootterImage}
                  source={require('../assets/images/scootter.png')}
                />
                <View
                  style={{
                    paddingVertical: 2,
                    paddingHorizontal: 4,
                    backgroundColor: '#175CD3',
                    borderRadius: 8,
                    flexShrink: 1,
                  }}>
                  <ThemedText
                    style={{
                      color: '#fff',
                      fontSize: 14,
                    }}>
                    ฿100
                  </ThemedText>
                </View>
              </View>
            </View>

            <Divider
              orientation="vertical"
              dividerStyle={{
                height: 16,
              }}
            />
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <ThemedText>89.99 กม.</ThemedText>
            </View>
            <Divider
              orientation="vertical"
              dividerStyle={{
                height: 16,
              }}
            />

            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <ThemedText
                style={{
                  color: '#B3B9C6',
                }}>
                ดูสาขาอื่น
              </ThemedText>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          columnGap: 12,
          paddingVertical: 10,
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
                source={require('../assets/images/product-thumbnail.png')}
                resizeMode="cover"
                borderTopLeftRadius={16}
                borderTopRightRadius={16}
                borderBottomLeftRadius={8}
                borderBottomRightRadius={8}
              />
              <View style={[styles.shadowBox, styles.productTagContainer]}>
                <Image
                  style={styles.tagLogoImage}
                  source={require('../assets/images/tag-logo.png')}
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
    </ThemedView>
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
  shopTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
  },

  shopContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#DFE4EA',
    maxHeight: 140,
  },
  shopThumbnailImage: {
    width: 94,
    height: 94,
  },
  scootterImage: {
    width: 20,
    height: 20,
  },
  productThumbnailImage: {
    width: 'auto',
    height: 112,
  },
  productContainer: {
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'column',
    borderColor: '#DFE4EA',
    width: 170,
  },
  tagContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: -4,
    left: -4,
    width: 32,
    height: 24,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
    backgroundColor: 'white',
  },
  tagLogoImage: {
    width: 28,
    height: 20,
  },
});
