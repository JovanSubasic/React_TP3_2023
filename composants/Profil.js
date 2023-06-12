import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

// pré-requis install navigation : 
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

// const Tab = createBottomTabNavigator();

export default function Profil() {
    return (
    <View style={styles.container}>
        <Ionicons name="md-person-circle-outline" size={80} color="#e8a9318a" />
        <Text style={styles.textCardCocktails}>Jovan Subasic</Text> 

        <Text style={styles.text}>jovan.subasic@gmail.com</Text> 

        <Text>{"\n"}{"\n"}</Text> 


        <Button 
    
            color="#e8a9318a" 
            title="Déconnexion" 
            onPress={() => console.log("deco")}
        />

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
    textCardCocktails: {
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
});
