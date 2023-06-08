import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './composants/HomePage';
import Detail from './composants/Detail';

// pré-requis install navigation : 
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Détail du cocktails' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
