import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CodeRedeemScreen from './src/screens/CodeRedeemScreen';
import CodeRedeemDetailScreen from './src/screens/CodeRedeemDetailScreen';
import {Colors} from './src/constants/Colors';
import HomeScreen from './src/screens/HomeScreen';
import {Fonts} from './src/styles/fonts';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: Colors['light'].headerText,
            headerShown: true,
            headerShadowVisible: false,
          }}
          initialRouteName="home">
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'E-voucher service',
              headerTitleStyle: {
                fontFamily: Fonts.NotoSansThai,
              },
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" />
              ),
              headerRight: () => (
                <View style={styles.iconContainer}>
                  <Ionicons
                    name="search-outline"
                    size={24}
                    color="black"
                    onPress={() => navigation.push('code-redeem')}
                  />

                  <AntDesign
                    name="shoppingcart"
                    size={24}
                    color="black"
                    onPress={() => navigation.push('code-redeem')}
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
                fontFamily: Fonts.NotoSansThai,
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
                fontFamily: Fonts.NotoSansThai,
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
