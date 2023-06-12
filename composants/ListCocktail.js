import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity} from 'react-native';
import React, { useState, useEffect  } from 'react';
import { Button } from '@rneui/themed';
import { Rating, AirbnbRating } from 'react-native-elements';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pré-requis install navigation : 
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

// const Tab = createBottomTabNavigator();

export default function ListCocktail({navigation}) {

    const [cocktail, setCocktail] = useState([]);
    const [listCocktail, setListCocktail] = useState([]);
    
    const [favorites, setFavorite] = useState([]);

    const [notation, setNotation] = useState([]);

    const getCocktail = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                setCocktail(data.drinks[0]);
                // console.log(data);
            })
    }

    

    // useEffect(async ()=>{
    //     let savedFavorite = await localStorage.getItem('__Fav');
    //     if(savedFavorite) {
    //         setFavorite(savedFavorite);
    //     }
    // }, [])

    useEffect(() => {

        for (let i = 0; i < 10; i++) {
            getCocktail();
            
        }
    
    }, []);


    useEffect(() => {
        setListCocktail([...listCocktail,cocktail]);      
    }, [cocktail]);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {
                listCocktail.map((item, index) => {   

                    let colorHeart = 'white';

                    if(favorites.filter(favorite => favorite.strDrink == item.strDrink).length != 0) colorHeart = 'red'

                    if(item != '')  
                    {           
                        return (
                            <View style={{flexDirection: 'row',}}>
                                <Button
                                    containerStyle={{justifyContent:'center',
                                    }}
                                    onClick={() => setFavorite([...favorites,item]) + console.log('ee')}
                                    key={item.strDrink + index}
                                    icon={{
                                        name: 'heart',
                                        type: 'font-awesome',
                                        size: 30,
                                        color: colorHeart,
                                    }}
                                    title=""
                                    color="#18315300"
                                />
                                <TouchableOpacity key={index} onPress={() =>
                                    navigation.navigate('Detail', {cocktail: item})
                                    }
                                >
                                    <View  style={styles.cardCocktails}>
                                        <Text style={styles.textCardCocktails}>{item.strDrink}</Text>
                                        <Image
                                            resizeMode="cover"
                                            style={styles.image}
                                            source={{
                                            uri:  item.strDrinkThumb ,
                                            }}
                                        /> 
                                        <Text>{"\n"}</Text>
                                        <Rating
                                            type='custom'
                                            startingValue={0}
                                            //   showRating
                                            onFinishRating={this.ratingCompleted}
                                            // style={{ paddingVertical: 10, backgroundColor: '#e8a9318a' }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    }
                    
                })
            }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee0c5',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 15,
    },
    cardCocktails: {
        backgroundColor: '#e8a9318a',
        borderRadius: 8,
        alignItems: 'center',
        textAlign: 'center',
        width:300,
        height:300,
        marginTop:10,
        marginBottom: 10,
        marginLeft: 10
    },
    textCardCocktails: {
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
});
