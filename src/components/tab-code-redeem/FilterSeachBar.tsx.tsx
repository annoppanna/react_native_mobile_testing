import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ThemedText} from '../ThemedText';
import {Fonts} from '../../styles/fonts';

interface FilterSeachBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const FilterSeachBar: React.FC<FilterSeachBarProps> = (
  props: FilterSeachBarProps,
) => {
  const {value, onChange} = props;
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.inputStyle}
        placeholder="เพิ่มโค้ดส่วนลด"
        onChangeText={text => onChange(text)}
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
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    fontFamily: Fonts.NotoSansThai,
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
    fontFamily: Fonts.NotoSansThai,
  },
});
