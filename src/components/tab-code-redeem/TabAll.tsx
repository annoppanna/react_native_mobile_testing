import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import {ThemedView} from '../ThemedView';
import {ThemedText} from '../ThemedText';
import {Divider} from '../Divider';
import {useNavigation} from '@react-navigation/native';

export const TabAll: React.FC<any> = () => {
  const [value, setValue] = React.useState('');

  const navigation = useNavigation() as any;
  // const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="เพิ่มโค้ดส่วนลด"
          onChangeText={text => setValue(text)}
          value={value}
        />
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
          }}>
          <ThemedText
            type="defaultSemiBold"
            style={{
              fontSize: 14,
              color: '#B4B4B4',
              lineHeight: 24,
            }}>
            ตกลง
          </ThemedText>
        </View>
      </View>

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
              navigation.navigate('CodeRedeemDetails', {id: index});
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
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontFamily: 'NotoSansThai',
  },

  searchContainer: {
    fontFamily: 'NotoSansThai',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DFE4EA',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 8,
    marginBottom: 18,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'NotoSansThai',
  },
  tagCodeRedeem: {
    width: 69,
    height: 20,
  },
});
