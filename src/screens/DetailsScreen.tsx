import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';

const DetailsScreen = ({route, navigation}) => {
  const {recipe} = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkIfFavorite();
  }, []);

  const checkIfFavorite = async () => {
    const doc = await firestore().collection('favorites').doc(recipe.id).get();
    setIsFavorite(doc.exists);
  };

  const handleFavoritePress = async () => {
    if (isFavorite) {
      await firestore().collection('favorites').doc(recipe.id).delete();
      setIsFavorite(false);
    } else {
      await firestore().collection('favorites').doc(recipe.id).set(recipe);
      setIsFavorite(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerIcons}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}>
          <MaterialCommunityIcons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.iconButton}>
          <MaterialCommunityIcons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <Image source={{uri: recipe.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.row}>
          <Text style={styles.timeText}>{recipe.time} Min</Text>
        </View>
        <Text style={styles.description}>
          {recipe.description} <Text style={styles.viewMore}>View More</Text>
        </Text>
        <View style={styles.nutritionContainer}>
          <View style={styles.nutritionItem}>
            <MaterialCommunityIcons name="leaf" size={18} color="#fff" />
            <Text style={styles.nutritionText}>65g carbs</Text>
          </View>
          <View style={styles.nutritionItem}>
            <MaterialCommunityIcons name="weight" size={18} color="#fff" />
            <Text style={styles.nutritionText}>27g proteins</Text>
          </View>
          <View style={styles.nutritionItem}>
            <MaterialCommunityIcons name="fire" size={18} color="#fff" />
            <Text style={styles.nutritionText}>120 Kcal</Text>
          </View>
          <View style={styles.nutritionItem}>
            <MaterialCommunityIcons name="water" size={18} color="#fff" />
            <Text style={styles.nutritionText}>91g fats</Text>
          </View>
        </View>
        <View style={styles.creatorContainer}>
          <Image
            source={{uri: recipe.creatorImage}}
            style={styles.creatorImage}
          />
          <View>
            <Text style={styles.creatorName}>{recipe.creatorName}</Text>
            <Text style={styles.creatorBio}>{recipe.creatorBio}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerIcons: {
    position: 'absolute',
    top: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 1,
  },
  iconButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#777',
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginVertical: 10,
  },
  viewMore: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  nutritionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  nutritionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  nutritionText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  creatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  creatorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  creatorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creatorBio: {
    fontSize: 14,
    color: '#777',
  },
});

export default DetailsScreen;
