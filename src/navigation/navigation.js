// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Pesanan from '../screens/Pesanan';
import Pembatalan from '../screens/Pembatalan';
import Lainnya from '../screens/Lainnya';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Navigasi ke Homescreen*/}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*Navigasi ke Pesanan Saya*/}
        <Stack.Screen name="Pesanan" component={Pesanan} />
        {/*Navigasi ke Pembatalan*/}
        <Stack.Screen name="Pembatalan" component={Pembatalan} />
        {/*Navigasi ke Lainnya*/}
        <Stack.Screen name="Lainnya" component={Lainnya} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;