/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Link,
  NavigationContainer,
  useLinkTo,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/screens/HomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CodeRedeemScreen from './src/screens/CodeRedeemScreen';
import {ThemedView} from './src/components/ThemedView';
import CodeRedeemDetailScreen from './src/screens/CodeRedeemDetailScreen';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import {Colors} from './src/constants/Colors';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  // const colorScheme = useColorScheme();

  const linkTo = useLinkTo();

  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   NotoSansThai: require('../assets/fonts/NotoSansThai-Regular.ttf'),
  //   NotoSansThaiMedium: require('../assets/fonts/NotoSansThai-Medium.ttf'),
  // });

  // React.useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     SplashScreen.hide();
  //   }
  // }, []);

  const navigationRef = useNavigationContainerRef() as any;

  const linking = {
    prefixes: ['/'],
    config: {
      screens: {
        Home: '',
        CodeRedeem: 'code-redeem',
        CodeRedeemDetails: 'code-redeem-details',
      },
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: Colors[colorScheme ?? 'light'].headerText,
            headerShown: true,
          }}
          initialRouteName="Home">
          <Stack.Screen
            name="CodeRedeem"
            component={CodeRedeemScreen}
            options={{
              title: 'โค้ด',
              headerTitleStyle: {
                fontFamily: 'NotoSansThai',
              },
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Link to="/">
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color="black"
                  />
                </Link>
              ),
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'E-voucher service',
              headerTitleStyle: {
                fontFamily: 'NotoSansThai',
              },
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Ionicons name="chevron-back-outline" size={24} color="black" />
              ),
              headerRight: () => (
                <ThemedView style={styles.iconContainer}>
                  <ThemedView>
                    <Link to="/">
                      <Ionicons name="search-outline" size={24} color="black" />
                    </Link>
                  </ThemedView>

                  <ThemedView>
                    <Link to="/code-redeem">
                      <AntDesign name="shoppingcart" size={24} color="black" />
                    </Link>
                  </ThemedView>
                </ThemedView>
              ),
            }}
          />

          <Stack.Screen
            component={CodeRedeemDetailScreen}
            name="CodeRedeemDetails"
            options={{
              title: 'รายละเอียด',
              headerTitleStyle: {
                fontFamily: 'NotoSansThai',
              },
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Link to="/code-redeem">
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color="black"
                  />
                </Link>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

    //  <SafeAreaView style={backgroundStyle}>
    //  <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One 1111">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>

    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default App;
