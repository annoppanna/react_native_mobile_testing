/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CodeRedeemScreen from './src/screens/CodeRedeemScreen';
import CodeRedeemDetailScreen from './src/screens/CodeRedeemDetailScreen';
import {Colors} from './src/constants/Colors';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: Colors[colorScheme ?? 'light'].headerText,
            headerShown: true,
          }}
          initialRouteName="home">
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'E-voucher service',
              headerTitleStyle: {
                fontFamily: 'NotoSansThai',
              },
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" />
              ),
              headerRight: () => (
                <View style={styles.iconContainer}>
                  <Ionicons name="search-outline" size={24} color="black" />

                  <AntDesign
                    name="shoppingcart"
                    size={24}
                    color="black"
                    onPress={() => {
                      navigation.push('code-redeem');
                    }}
                  />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="code-redeem"
            component={CodeRedeemScreen}
            options={({navigation}) => ({
              title: 'โค้ด',
              headerTitleStyle: {
                fontFamily: 'NotoSansThai',
              },
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="black"
                  onPress={() => navigation.push('home')}
                />
              ),
            })}
          />
          <Stack.Screen
            component={CodeRedeemDetailScreen}
            name="code-redeem-details"
            options={({navigation}) => ({
              title: 'รายละเอียด',
              headerTitleStyle: {
                fontFamily: 'NotoSansThai',
              },
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="black"
                  onPress={() => navigation.push('code-redeem')}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default App;
