import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import RecipeCard from '../components/RecipeCard';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeList = [];
      const querySnapshot = await firestore().collection('recipes').get();
      querySnapshot.forEach(documentSnapshot => {
        recipeList.push({
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        });
      });
      setRecipes(recipeList);
      setFilteredRecipes(recipeList);
    };

    fetchRecipes();
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
    if (query) {
      const filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  };

  console.log(recipes);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <RecipeCard
            title={item.title}
            author={item.creatorName}
            image={item.image}
            onPress={() => navigation.navigate('Details', {recipe: item})}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
