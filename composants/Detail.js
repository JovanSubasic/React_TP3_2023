import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView, ScrollView, Image} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pré-requis install navigation : 
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

// const Tab = createBottomTabNavigator();

export default function Detail({ route }) {

    // var ingredientRecette = [];

	// for(let i = 0; i < 14; i++){

	// 	ingredientRecette.push(
	// 		<View key = {i}>
				
    //             <Text style={styles.column}>{route.params.cocktail.strIngredient + i}</Text>
				
				
	// 		</View>
	// 	)
	// }

    console.log(route)
    return ( 
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.textCardCocktails}>{route.params.cocktail.strDrink}</Text>
                <View  style={styles.cardCocktails}>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={{
                    uri:  route.params.cocktail.strDrinkThumb ,
                    }}
                /> 
                </View>

                <Text style={styles.textCardCocktails}>Instructions recette :</Text>
                    
                {(route.params.cocktail.strIngredient1 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient1}</Text> : '' }
                {(route.params.cocktail.strIngredient2 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient2}</Text> : '' }
                {(route.params.cocktail.strIngredient3 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient3}</Text> : '' }
                {(route.params.cocktail.strIngredient4 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient4}</Text> : '' }
                {(route.params.cocktail.strIngredient5 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient5}</Text> : '' }
                {(route.params.cocktail.strIngredient6 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient6}</Text> : '' }
                {(route.params.cocktail.strIngredient7 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient7}</Text> : '' }
                {(route.params.cocktail.strIngredient8 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient8}</Text> : '' }
                {(route.params.cocktail.strIngredient9 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient9}</Text> : '' }
                {(route.params.cocktail.strIngredient10 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient10}</Text> : '' }
                {(route.params.cocktail.strIngredient11 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient11}</Text> : '' }
                {(route.params.cocktail.strIngredient12 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient12}</Text> : '' }
                {(route.params.cocktail.strIngredient13 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient13}</Text> : '' }
                {(route.params.cocktail.strIngredient14 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient14}</Text> : '' }
                {(route.params.cocktail.strIngredient15 != null) ? <Text style={styles.column}>- {route.params.cocktail.strIngredient15}</Text> : '' }

                {/* <Text style={styles.textRecette}>{(route.params.cocktail.strInstructionsFR != null)? route.params.cocktail.strInstructionsFR : route.params.cocktail.strInstructions }</Text> */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee0c5',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 15,
        marginTop: 25
    },
    textCardCocktails: {
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    cardCocktails: {
        backgroundColor: '#e8a9318a',
        borderRadius: 15,
        alignItems: 'center',
        textAlign: 'center',
        width:200,
        height:200,
        marginTop:10,
        marginBottom: 10,
        marginLeft: 105
    },
    column: {
        fontSize: 18,
        textAlign: 'center',
        margin: 20
    }
});
