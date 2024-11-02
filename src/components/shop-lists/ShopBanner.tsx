import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from '../Divider';
import {ThemedText} from '../ThemedText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

interface ShopBannerProps {
  item: any;
}

export const ShopBanner: React.FC<ShopBannerProps> = (
  props: ShopBannerProps,
) => {
  const {item} = props;
  return (
    <View style={[styles.shopContainer, styles.shadowBox]}>
      <View
        style={{
          position: 'relative',
        }}>
        <Image
          style={styles.shopThumbnailImage}
          source={require('../../assets/images/shop-thumbnail.png')}
          resizeMode="cover"
          borderRadius={4}
        />
        <View style={[styles.shadowBox, styles.tagContainer]}>
          <Image
            style={styles.tagLogoImage}
            source={require('../../assets/images/tag-logo.png')}
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
                source={require('../../assets/images/scootter.png')}
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
  );
};

const styles = StyleSheet.create({
  shopContainer: {
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#DFE4EA',
    maxHeight: 140,
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
  shopThumbnailImage: {
    width: 94,
    height: 94,
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

  tagLogoImage: {
    width: 28,
    height: 20,
  },

  scootterImage: {
    width: 20,
    height: 20,
  },
});
