import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pré-requis install navigation : 
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

// const Tab = createBottomTabNavigator();

export default function ListCocktail() {
    return (
    <View style={styles.container}>
        <Text>Liste des cocktails</Text>
        <StatusBar style="auto" />
    </View> 
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
