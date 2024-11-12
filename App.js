import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/login/Login';
import CadastroScreen from './src/screens/cadastro/Cadastro';
import FeedScreen from './src/screens/feed/Feed';

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      {/* Adicione outras telas no Tab Navigator, se necessário */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cadastro'
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='MainTabs'
          component={TabRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
