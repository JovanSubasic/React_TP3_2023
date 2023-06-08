import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favoris from './Favoris';
import Profil from './Profil';
import ListCocktail from './ListCocktail';
// pré-requis install navigation : 
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

const Tab = createBottomTabNavigator();

export default function HomePage() {
    return ( 
    <Tab.Navigator>
        <Tab.Screen options={{ title: 'Liste des cocktails' }} name="ListCocktail" component={ListCocktail} />
        <Tab.Screen name="Favoris" component={Favoris} />
        <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
    // <View></View>
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
