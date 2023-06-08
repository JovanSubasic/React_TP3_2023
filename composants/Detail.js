import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pré-requis install navigation : 
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

// const Tab = createBottomTabNavigator();

export default function Detail() {
    return ( 
    <View style={styles.container}>
        <Text>On arrive à cette page au moment ou l'on appuie sur un cocktail. Elle sert à donner la recette du cocktail</Text>
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
